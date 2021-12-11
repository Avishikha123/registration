
import React, { useState } from "react";
import { FaGithub, FaSearch, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../App.css";
import "../Header.css";

function Header() {
  const [userType, setUserType] = useState("Buyer");
  const [searchWord, setSearchWord] = useState("");
  const [filter, setFilter] = useState("");

  const searchHandler = (e) => {
    setSearchWord(e.target.value);
    console.log("search word:", searchWord);
  };
  const selectHandler = (e) => {
    setFilter(e.target.value);
    console.log("filter:", filter);
  };

  return (
    <div className="Header">
      <div className="Header__header">
        <>
          <img
            className="Header__header__logo"
            src="https://www.graphicsprings.com/filestorage/stencils/1cf0e62090ebd950855b702c81587979.png?width=500&height=500"
            alt=""
          />
          <p>BetterMart</p>
        </>
        <ul className="Header__header__nav">
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FaTwitter className="Header__header__nav__icons" size={20} />
            <FaFacebook className="Header__header__nav__icons" size={20} />
            <FaLinkedin className="Header__header__nav__icons" size={20} />
            <FaGithub className="Header__header__nav__icons" size={20} />
          </li>
          <li>Contact Number: 1800-101-4242</li>
          <li id="Header__sb__button" hidden={userType == null}>
            {userType}
          </li>
          <li id="Header__searchbar">
            <input
              type="text"
              placeholder="Search for products"
              onChange={searchHandler}
            />
            {/* <FaSearch style={{ marginLeft: "5px" }} /> */}
          </li>
        </ul>
      </div>
      <div className="Header__menubar">
        <ul className="Header__header__nav">
          <li className="Header__header__nav__button">Home</li>
          <li className="Header__header__nav__button">About Us</li>
          <li className="Header__header__nav__button">Login/Sign-up</li>
          <li id="header__nav__unstyled">
            Filter:
            <select value={filter} onChange={selectHandler}>
              <option selected disabled>
                Filter by
              </option>
              <option value="BS">Best Selling</option>
              <option value="L2H">Price: Low to High</option>
              <option value="H2L">Price: High to Low</option>
              <option value="A2Z">Name: A to Z</option>
              <option value="Z2A">Name: Z to A</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
