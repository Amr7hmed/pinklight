import axios from "axios";
import React, { useState } from "react";
import { Api } from "../../../api";

function ModelonePassword(props) {
  const [state, setState] = useState({
    email: JSON.parse(localStorage.getItem("email")),
    code: "",
  });
  const [toggole, setToggole] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    setMessage("")
    setToggole(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
props.setCode(state.code);
    console.log(props.codedata);
    const options = {
      method: "post",
      url: `${Api}reset-password-code`,
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
        setMessage(error.response.data.message)
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
      id="exampleModalToggle3"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header"></div>

          <h5 className="modal-title" id="exampleModalToggleLabel">
            نسيت كلمة المرور
          </h5>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  رقم الهاتف/ البريد الإلكترونى
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  name="email"
                  value={state.email || ''}
                  onChange={handleChange}
                />
              </div>

              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  الرمز
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  name="code"
                  value={state.code || ''}
                  onChange={handleChange}
                />
                <button className="btn send" type="submit">أرسال</button>
              </div>
              <span className="errorfiled">{message}</span>

              <div className="modal-footer">
                <button 
                className={toggole ===false?"btn button-login button-disabled":"btn button-login button-active"}
                data-bs-target={toggole ===false?" ":"#exampleModalToggle4"}
              data-bs-toggle="modal">المتابعه</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelonePassword;
