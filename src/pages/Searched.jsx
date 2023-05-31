import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import { motion } from "framer-motion";
import { appUrls } from "../services/urls";
import { toast } from "react-toastify";

export function UseQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Searched() {
  let query = UseQuery();
  const [data, setData] = useState([]);

  const getSearchedRecipes = async () => {
    try {
      const res = await axios.get(
        appUrls.COMPLEX_RECIPES_URL + `&query=${query.get("name")}`
      );
      if (res?.status === 200) {
        setData(res?.data?.results);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setData([]);
    }
  };

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        getSearchedRecipes();
      }
    })();
    return () => (mounted = false);
  }, [query.get("name")]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center w-full"
    >
      {data.map((list) => {
        return (
          <Link key={list?.id} to={`/recipe/${list?.id}`}>
            <div className="relative w-64 h-48 cursor-pointer">
              <img
                className="object-cover w-full h-full rounded-md"
                src={list?.image}
                alt={list?.title}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
                <h2 className="relative z-10 text-white text-xs font-bold">
                  {list?.title}
                </h2>
              </div>
            </div>
          </Link>
        );
      })}
    </motion.div>
  );
}
