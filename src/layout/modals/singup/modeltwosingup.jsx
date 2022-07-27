import axios from "axios";
import React, { useState } from "react";
import { Api } from "../../../api";

function ModeltwoSingup() {
  const [state, setState] = useState({
    code: "",
  });
  const [toggole ,setToggole] = useState(false);
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      [e.target.name]: value
    });
    setMessage("")
    setToggole(false)
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "post",
      url: `${Api}signup/step2`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify({
        email: JSON.parse(localStorage.getItem("email")),
      ...state,
      }),
    };
    axios(options).then(function (response) {
      console.log("handle success");
      setToggole(true)
    }).catch(function (error) {
      //setToggole(false)
      if (error.response) {
        console.log(error.response.data.message);
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
      id="singupModal2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header"></div>

          <h5 className="modal-title" id="exampleModalToggleLabel">
          أدخل رمز التحقق
        </h5>
          <div className="modal-body">
            <form>

              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  الرمز
                </label>
                <input
                  type="text"
                  className="form-control"
                  
                  name="code"
                  onChange={handleChange}
                  value={state.code || ''}
                />
                <button className="btn send" type="button" onClick={handleSubmit}>أرسال</button>
              </div>
              <span className="errorfiled">{message}</span>
                <button  type="button" 
                className={toggole ===false?"btn button-login mb-5 button-disabled":"btn button-login mb-5 button-active"}
                data-bs-target={toggole ===false?" ":"#singupModal3"}
              data-bs-toggle="modal">المتابعه</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModeltwoSingup;
