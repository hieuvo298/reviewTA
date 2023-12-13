import React from "react";
import { BiSolidCommentAdd } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import "./header.css"
const Header = () => {
  return (
    <header>
      <div>
      <h1>
        Review TA Béc Cọp !!! <BiSolidCommentAdd />
      </h1>
      </div>
      <FaSearch  className="search-btn"/>
      <input type="search" placeholder="Search Here ..." className="search-input" />
    </header>
  );
};

export default Header;
