import React, { useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (text !== "") {
      navigate(`/search?name=${text}`);
    }
    return null;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-2 pl-10 text-white bg-BACKGROUND_DARK rounded-md focus:outline-none"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <AiOutlineSearch className="text-white" />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
