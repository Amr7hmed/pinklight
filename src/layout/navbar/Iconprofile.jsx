/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { NavLink } from "react-router-dom";
import User from "../../images/icon/user.svg";
import Login from "../modals/login/index.jsx";

function Iconprofile() {
  const handleSubmit = () => {
    localStorage.removeItem("token");
    window.location.pathname = "/";
  }
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

        <ul
          className="dropdown-menu navbar__iconprofile"
          aria-labelledby="dropdownMenuLink"
        >
          <li className="dropdown-item">
            <NavLink to="/myporfile">ملفى الشخصى</NavLink>
          </li>
          <li className="dropdown-item">
            <NavLink to="/myorders">طلباتى</NavLink>
          </li>
          <li className="dropdown-item">
            <NavLink to="/mymassages">رسائلى</NavLink>
          </li>
          <li className="dropdown-item">
            <NavLink to="/mynotifications">إشعاراتى</NavLink>
          </li>

          <li className="dropdown-item">
            <NavLink to="/myads">إعلاناتى</NavLink>
          </li>

          <li className="dropdown-item">
            <button type="submit" className="btn" onClick={() => handleSubmit()}>تسجيل الخروج</button>
          </li>
        </ul>
      </div>

      <Login />
    </>
  );
}

export default Iconprofile;
