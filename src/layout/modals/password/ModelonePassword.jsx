import axios from "axios";
import React, { useState } from "react";
import { Api } from "../../../api";

function ModelonePassword() {
  const [state, setState] = useState({
    email: "",
  });
  const [toggole ,setToggole] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    setMessage("")
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", JSON.stringify(state.email));
    const options = {
      method: "post",
      url: `${Api}reset-password-request`,
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
      setToggole(false)
      if (error.response) {
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
      id="exampleModalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
          </div>

          <h5 className="modal-title" id="exampleModalToggleLabel">
            نسيت كلمة المرور
          </h5>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  رقم الهاتف/ البريد الإلكترونى
                </label>
                <input type="text" className="form-control" id="recipient-name" 
                  name="email"
                  onChange={handleChange}
                  value={state.email || ''}/>
              </div>

              <span className="errorfiled">{message}</span>
              <div className="modal-footer">

              
<button
                className={state.email === "" ?"btn button-login mb-5 button-disabled":"btn button-login mb-5 button-active"}
                data-bs-target={toggole === false?" ":"#exampleModalToggle3"}
              data-bs-toggle="modal" type="submit">المتابعه</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelonePassword;
