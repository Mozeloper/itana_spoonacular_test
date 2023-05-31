import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggle from "react-dark-mode-toggle";
import logo from "../assets/cooking-logo.avif";
import { checkTheme, handleChangeTheme } from "../store/slices/darkModeSlice";

export default function Header() {
  const navigate = useNavigate();
  const { initialTheme } = useSelector((state) => state.darkModeSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        checkTheme(initialTheme);
      }
    })();
    return () => (mounted = false);
  }, [initialTheme]);

  return (
    <div className="w-full flex md:flex-row flex-col justify-between items-center">
      <img
        src={logo}
        alt="logo"
        className="w-[100px] h-[80px] cursor-pointer mix-blend-overlay"
        onClick={() => navigate("/")}
      />
      <DarkModeToggle
        className="outline-none"
        onChange={() =>
          dispatch(
            handleChangeTheme(initialTheme === "dark" ? "light" : "dark")
          )
        }
        checked={initialTheme === "dark" ? false : true}
        size={40}
      />
    </div>
  );
}
