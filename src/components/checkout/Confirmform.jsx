import React from "react";
import { NavLink } from "react-router-dom";

function Confirmform() {
  return (
    <section className="checkoutpage__form">
      <h3>عنوان الشحن</h3>

      <div className="formgroup">
        <form>
            <div className="row">
              <div className="col-sm-12 col-md-6 mb_20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="البلد/المنطقه*"
                />
            </div>
          </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 mb_20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="اسم الاسره*"
                />
              </div>
              <div className="col-sm-12 col-md-6 mb_20">
                <input type="text" className="form-control" placeholder="الاسم*" />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 mb_20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="رقم الجوال*"
                />
            </div>
          </div>

            <div className="row">
              <div className="col-sm-12 col-md-6 mb_20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="المدينه*"
                />
            </div>
              <div className="col-sm-12 col-md-6 mb_20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="الرمز البريدى*"
                />
              </div>
          </div>

            <div className="row">
              <div className="col-sm-12 mb_20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="تفاصيل العنوان*"
                />
              </div>
          </div>

          <div className="buttonsform">
            <NavLink to={`/payment`} className="btn">
              حفظ
            </NavLink>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Confirmform;
