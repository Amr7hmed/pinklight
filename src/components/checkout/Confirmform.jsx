import React from "react";
import { NavLink } from "react-router-dom";

function Confirmform() {
  return (
    <section className="checkoutpage__form">
      <h3>عنوان الشحن</h3>

      <div className="formgroup">
        <form>
            <div class="row">
              <div class="col-sm-12 col-md-6 mb_20">
                <input
                  type="text"
                  class="form-control"
                  placeholder="البلد/المنطقه*"
                />
            </div>
          </div>
            <div class="row">
              <div class="col-sm-12 col-md-6 mb_20">
                <input
                  type="text"
                  class="form-control"
                  placeholder="اسم الاسره*"
                />
              </div>
              <div class="col-sm-12 col-md-6 mb_20">
                <input type="text" class="form-control" placeholder="الاسم*" />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 mb_20">
                <input
                  type="text"
                  class="form-control"
                  placeholder="رقم الجوال*"
                />
            </div>
          </div>

            <div class="row">
              <div class="col-sm-12 col-md-6 mb_20">
                <input
                  type="text"
                  class="form-control"
                  placeholder="المدينه*"
                />
            </div>
              <div class="col-sm-12 col-md-6 mb_20">
                <input
                  type="text"
                  class="form-control"
                  placeholder="الرمز البريدى*"
                />
              </div>
          </div>

            <div class="row">
              <div class="col-sm-12 mb_20">
                <input
                  type="text"
                  class="form-control"
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
