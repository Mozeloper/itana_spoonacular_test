import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { BsFacebook, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import { motion } from "framer-motion";
import { api_key, appUrls } from "../services/urls";

function isObjectEmpty(obj) {
  return Object.keys(obj)?.length === 0;
}

export default function Recipe() {
  const [data, setData] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const [tabs] = useState([
    {
      id: 1,
      name: "Instructions",
      key: "instructions",
    },
    {
      id: 2,
      name: "Ingredients",
      key: "ingredients",
    },
    {
      id: 3,
      name: "Cooking time",
      key: "cooking_time",
    },
  ]);

  const { id } = useParams();

  const getRecipeDetails = async () => {
    try {
      const res = await axios.get(
        `${appUrls.RECIPE_DETAILS_URL}/${id}/information?apiKey=${api_key}`
      );
      if (res?.status === 200) {
        setData(res?.data);
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

  const copyCodeToClipBoard = () => {
    navigator.clipboard.writeText(data?.spoonacularSourceUrl);
  };

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        getRecipeDetails();
      }
    })();
    return () => (mounted = false);
  }, [id]);

  return (
    <>
      {!isObjectEmpty(data) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex xl:flex-row flex-col gap-8 justify-between"
        >
          <div className="w-full flex flex-col gap-4">
            <h3 className="font-medium text-[#27292c] dark:text-[#f4f4f4]">
              {data?.title}
            </h3>
            <img
              src={data?.image}
              alt={data?.title}
              className="rounded-lg"
              loading="lazy"
            />
            <div className="w-full flex justify-between">
              <AiOutlineCopy
                title="copy link to share"
                onClick={copyCodeToClipBoard}
                className="w-[20px] h-[30px] cursor-pointer text-[#27292c] dark:text-[#f4f4f4]"
              />
              <div className="flex gap-4">
                <a
                  href="https://web.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook className="w-[20px] h-[30px] cursor-pointer text-[#27292c] dark:text-[#f4f4f4]" />
                </a>
                <a
                  href="https://api.whatsapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsWhatsapp className="w-[20px] h-[30px] cursor-pointer text-[#27292c] dark:text-[#f4f4f4]" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <BsTwitter className="w-[20px] h-[30px] cursor-pointer text-[#27292c] dark:text-[#f4f4f4]" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-4 overflow-hidden overflow-x-auto no-scrollbar">
              {tabs.map((list) => {
                return (
                  <div
                    onClick={() => setActiveTab(list?.key)}
                    key={list?.id}
                    className={`${
                      activeTab === list?.key
                        ? "bg-BACKGROUND_DARK text-white"
                        : "bg-white border-2 border-black text-TEXT_DARK"
                    } cursor-pointer py-[0.5rem] flex items-center justify-center min-w-[143px] min-h-[44px] font-semibold whitespace-nowrap`}
                  >
                    {list?.name}
                  </div>
                );
              })}
            </div>
            <div className="md:px-6 px-3">
              {activeTab === "instructions" && (
                <div className="flex flex-col gap-8 mb-4">
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.summary }}
                    className="text-[#27292c] dark:text-[#f4f4f4]"
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.instructions }}
                    className="text-[#27292c] dark:text-[#f4f4f4]"
                  />
                </div>
              )}
              {activeTab === "ingredients" && (
                <ul className="list-disc">
                  {data?.extendedIngredients.map((list) => {
                    return (
                      <li
                        className="text-[#27292c] dark:text-[#f4f4f4]"
                        key={list?.id}
                      >
                        {list?.original}
                      </li>
                    );
                  })}
                </ul>
              )}
              {activeTab === "cooking_time" && (
                <ul className="list-disc">
                  <li className="text-[#27292c] dark:text-[#f4f4f4]">
                    {data?.readyInMinutes} Mins
                  </li>
                </ul>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
