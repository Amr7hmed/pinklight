import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Api } from "../../api";

function Confirmform() {
  const [state, setState] = useState({
    area: "",
    name: "",
    family_name: "",
    phone: "",
    city: "",
    zip_code: "",
    address: "",
  });
  const [toggole ,setToggole] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "post",
      url: `${Api}order/address/1`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
      },
      data: JSON.stringify({
      ...state,
      }),
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response.message)
      setToggole(true)
    })
    .catch(function (error) {
      setToggole(false)
      if (error.response) {
        console.log(error.response.data);
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
    <section className="checkoutpage__form">
      <h3>عنوان الشحن</h3>

      <div className="formgroup">
            <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-12 col-md-6 mb_20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="البلد/المنطقه*"
                  name="area"
                  onChange={handleChange}
                />
            </div>
          </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 mb_20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="اسم الاسره*"
                  name="family_name"
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-12 col-md-6 mb_20">
                <input type="text" className="form-control" placeholder="الاسم*" 
                  name="name"
                  onChange={handleChange}/>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 mb_20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="رقم الجوال*"
                  name="phone"
                  onChange={handleChange}/>
                
            </div>
          </div>

            <div className="row">
              <div className="col-sm-12 col-md-6 mb_20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="المدينه*"
                  name="city"
                  onChange={handleChange}/>
            </div>
              <div className="col-sm-12 col-md-6 mb_20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="الرمز البريدى*"
                  name="zip_code"
                  onChange={handleChange}/>
              </div>
          </div>

            <div className="row">
              <div className="col-sm-12 mb_20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="تفاصيل العنوان*"
                  name="address"
                  onChange={handleChange}/>
              </div>
          </div>

          <div className="buttonsform">
            <NavLink to={toggole === false ? `/payment` : null }
                className="btn" type="submit">
              حفظ
            </NavLink>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Confirmform;
