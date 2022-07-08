import axios from "axios";
import React, { useState } from "react";
import { Api } from "../../../api";

function ModelThreeSingup() {
  const [state, setState] = useState({
    name: "",
    email: JSON.parse(localStorage.getItem("email")),
    password: "",
    password_confirmation: "",
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
      url: `${Api}signup/step3`,
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
      setToggole(true)
    })
    .catch(function (error) {
      if (error.response) {
        setToggole(false)
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
      id="singupModal3"
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
            أكمل بياناتك
          </h5>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  name="name"
                  value={state.name || ''}
                  onChange={handleChange}
                />
              </div>

              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  البريد الالكترونى
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="recipient-name"
                  name="email"
                  value={state.email || ''}
                  onChange={handleChange}
                />
              </div>

              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  ادخل كلمة المرور الجديده
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="recipient-name"
                  name="password"
                  value={state.password || ''}
                  onChange={handleChange}
                />
              </div>

              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  إعد ادخال كلمة المرور الجديده
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="recipient-name"
                  name="password_confirmation"
                  value={state.password_confirmation || ''}
                  onChange={handleChange}
                />
              </div>
              <span className="errorfiled">{message}</span>
              <button type="submit"
                className={
                  toggole === false
                    ? "btn button-login mb-5 button-disabled"
                    : "btn button-login mb-5 button-active"
                }
              >
                إنشاء الحساب
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelThreeSingup;
