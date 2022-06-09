import React from "react";
import Facebook from "../../images/icon/facebook-f-brands.svg";
import Instagram from "../../images/icon/instagram-brands.svg";
import Twitter from "../../images/icon/twitter-brands.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="footer_item">
              <h6>اشترك الان</h6>
              <span>اشترك الان لتصلك احدث العروض والتخفيضات</span>
              <div className="footer_input">
                <input type="email" placeholder="البريد الالكترونى" />
                <button className="btn"></button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="footer_item">
              <h6>تابعنا على</h6>
              <div className="soceilmedua">
                <a href="https://twitter.com/">
                  <img src={Twitter} alt="Twitter" className="twitter" />
                </a>
                <a href="https://instagram.com/">
                  <img src={Instagram} alt="Instagram" className="instagram" />
                </a>
                <a href="https://facebook.com/">
                  <img src={Facebook} alt="Facebook" className="facebook" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="footer_item">
              <h6>معلومات الموقع</h6>
              <div className="footer_list">
                <NavLink to="/"> من نحن</NavLink>
                <NavLink to="/">تواصل معنا </NavLink>
                <NavLink to="/">سياسة الاستخدام و الخصوصيه </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
