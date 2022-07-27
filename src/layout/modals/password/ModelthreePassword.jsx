import axios from "axios";
import React, { useState } from "react";
import { Api } from "../../../api";


function ModelthreePassword(props) {
  const [state, setState] = useState({
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
      url: `${Api}reset-password`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify({
        code: props.code,
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
        //setMessage(error.response.data.messge)
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
    id="exampleModalToggle4"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
          </div>

          <h5 className="modal-title" id="exampleModalToggleLabel">
          تعيين كلمة مرور جديده
          </h5>
          <div className="modal-body">
            <form>
              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                ادخل كلمة المرور الجديده
                </label>
                <input type="password" className="form-control" 
                  name="password"
                  value={state.password || ''}
                  onChange={handleChange} />
              </div>

              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                إعد ادخال كلمة المرور الجديده
                </label>
                <input type="password" className="form-control"  
                  name="password_confirmation"
                  value={state.password_confirmation || ''}
                  onChange={handleChange}/>
              </div>
              <span className="errorfiled">{message}</span>

              <button  type="button" onClick={handleSubmit}
                className={toggole ===false?"btn button-login mb-5 button-disabled":"btn button-login mb-5 button-active"}>
                حفظ
               </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelthreePassword;
