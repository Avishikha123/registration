

import React, { useState, useEffect } from "react";
import "../App.css";
//  import "./Footer.css";
import "../Footer.css"
function Footer() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (email.length !== 0 && !email.includes("@"))
        alert("Please enter a valid email.");
    }, 1000);

    //CLEANUP FUNCTION
    return () => {
      clearTimeout(identifier); //Clears the current timer
    };
  }, [email]);

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    if (email.length === 0 && !email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    console.log("email:", email);
    setEmail("");
  };

  return (
    <div className="Footer">
      <div className="Footer__columns">
        <div className="Footer__columns__column" id="Footer__logo">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              className="Footer__columns__column__logo"
              src="https://www.graphicsprings.com/filestorage/stencils/1cf0e62090ebd950855b702c81587979.png?width=500&height=500"
              alt=""
            />
            <p>BetterMart</p>
          </div>
          <p>
            Laborum aliqua excepteur elit anim reprehenderit amet aliquip
            officia.
          </p>
          <p>Contact Number: 1800-101-4242</p>
        </div>
        <div className="Footer__columns__column">
          <p> About Us</p>
          <p>Terms &amp; Condition</p>
          <p>Customer Support</p>
          <p>Privacy Policy</p>
          <p> Sitemap</p>
        </div>
        <div className="Footer__columns__column" id="Footer__contact">
          <p style={{ fontWeight: "bold" }}>Newsletter</p>
          <p>Subscribe to our newsletter</p>
          <div id="Footer__contact__email">
            <input
              type="email"
              id="Footer__contact__email__input"
              value={email}
              onChange={onChange}
              placeholder="Email Id"
            />
            <button id="Footer__contact__email__button" onClick={onSubmit}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="Footer__row">
        Copyrights &copy; 2021 BetterMart.com All rights reserved.
      </div>
    </div>
  );
}
export default Footer;