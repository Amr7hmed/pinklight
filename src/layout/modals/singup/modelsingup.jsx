import axios from "axios";
import React, { useState } from "react";
import { Api } from "../../../api";


function ModelSingup() {
  const [state, setState] = useState({
    email: "",
  });
  const [toggole ,setToggole] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      [e.target.name]: value
    });
    setMessage("")
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", JSON.stringify(state.email));
    const options = {
      method: "post",
      url: `${Api}signup/step1`,
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
      console.log(response.data.message)
      setToggole(true)
    })
    .catch(function (error) {
    // setToggole(false)
      if (error.response) {
        console.log(error.response.data.messge);
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
      id="singupModal"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
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
          إنشاء حساب جديد
          </h5>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  رقم الهاتف / البريد الإلكترونى
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  name="email"
                  onChange={handleChange}
                  value={state.email || ''}
                />
              </div>
              <span className="errorfiled">{message}</span>

                <button
                className={state.email === ""?"btn button-login mb-5 button-disabled":"btn button-login mb-5 button-active"}
                data-bs-target={toggole ===false?" ":"#singupModal2"}
              data-bs-toggle="modal" type="submit">المتابعه</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelSingup;