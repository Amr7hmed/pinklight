/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import User from "../../images/icon/user.svg";
import Login from "../modals/login/index.jsx";

function Iconlogin() {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={User} alt="login" className="user" />
        </button>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li className="dropdown-item">
            <a
              className="btn"
              data-bs-toggle="modal"
              href="#loginModal"
              role="button"
            >
              تسجيل الدخول
            </a>
           / 
            <button
              type="button"
              className="btn"
              data-bs-toggle="modal"
              href="#singupModal"
              role="button"
            >
              إنشاء حساب
            </button>
          </li>
        </ul>
      </div>

      <Login/>
    </>
  );
}

export default Iconlogin;
