import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle === true) {
      document.querySelector("#drop").style.display = "flex";
    } else {
      document.querySelector("#drop").style.display = "none";
    }
  }, [toggle]);
  return (
    <div id="nav">
      <div id="navleft">
        <h1>Devcart</h1>
        <span>Shoping Bindazz</span>
      </div>
      <div id="nav-center">
        <input type="text" placeholder="Search for product,brands and more" />
        <i class="ri-search-line"></i>
      </div>
      <div id="nav-right">
        <h4>Become a Seller</h4>
        <h4
          id="more"
          onClick={() => {
            toggle === false ? setToggle(true) : setToggle(false);
          }}
        >
          More <i class="ri-arrow-down-s-line"></i>
        </h4>
      </div>
      <div id="drop">
        <h4>
          <i class="ri-notification-fill"></i>Notification Preferences
        </h4>
        <h4>
          <i class="ri-question-fill"></i>24*7 Customer Care
        </h4>
        <h4>
          <i class="ri-advertisement-fill"></i>Advertise
        </h4>
        <h4>
          <i class="ri-download-fill"></i>Download App
        </h4>
      </div>
    </div>
  );
};
export default Navbar;
