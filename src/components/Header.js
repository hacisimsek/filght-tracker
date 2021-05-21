import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import photo1 from "../photos/1.jpeg";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img data-testid="icon-test"  className="header_icon" src={photo1} alt="" />
      </Link>

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <LanguageIcon />
        <p>Feedback</p>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
