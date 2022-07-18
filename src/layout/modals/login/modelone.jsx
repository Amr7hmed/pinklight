import axios from "axios";
import React, { useState } from "react";
import { Api } from "../../../api";


function Modelone() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [toggole, setToggole] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    setToggole(true);
    setMessage("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const options = {
      method: "post",
      url: `${Api}login`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify({
      ...state,
      }),
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response.data.access_token);
      localStorage.setItem("token", JSON.stringify(response.data.access_token));
      setToggole(true);
      window.location.pathname = "/";
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        setMessage(error.response.data.messge)
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    console.log(error.config);
    });

    
  };


  return (
    <div
      className="modal fade"
      id="loginModal"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <h5 className="modal-title" id="exampleModalToggleLabel">
            تسجيل الدخول
          </h5>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  رقم الهاتف/ البريد الإلكترونى
                </label>
                <input type="text" className="form-control"  
                  name="email"
                  value={state.email || ''}
                  onChange={handleChange}/>
              </div>
              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  كلمة المرور
                </label>
                <input type="password" className="form-control"  
                  name="password"
                  value={state.password}
                  onChange={handleChange}/>
              </div>

              <div className="forget_password">
              <span 
              className="btn"
              data-bs-target="#exampleModalToggle2"
              data-bs-toggle="modal">هل نسيت كلمة المرور؟</span>
              
              </div>
              <span className="errorfiled">{message}</span>

              
              <button type="submit"
                className={
                  toggole === false
                    ? "btn button-login button-disabled"
                    : "btn button-login button-active"
                }>
              تسجيل الدخول
               </button>
            </form>
          </div>
          <div className="modal-footer">
            لا تملك حساب ؟
            <a
              className="btn"
              data-bs-target="#exampleModalToggle2"
              data-bs-toggle="modal"
              href="#singupModal"
            >
              انشىء حسابك الان
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modelone;
