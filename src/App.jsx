import React from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import Dietary from "./pages/Dietary";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <div className="w-full min-h-screen h-full dark:bg-BACKGROUND_DARK_MODE transition-all">
      <main className="xl:px-[20rem] lg:px-[10rem] md:px-[5rem] px-[1rem] py-[1.5rem]">
        <Header />
        <div className="lg:w-[65%] md:w-[75%] w-full mx-auto">
          <SearchBar />
        </div>
        <div className="w-full mt-6 overflow-hidden overflow-x-auto no-scrollbar mb-16">
          <Categories />
        </div>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/diet/:type" element={<Dietary />} />
            <Route path="/search" element={<Searched />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
