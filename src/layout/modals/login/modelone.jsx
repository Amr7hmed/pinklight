import React from "react";

function Modelone() {
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
            <form>
              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  رقم الهاتف/ البريد الإلكترونى
                </label>
                <input type="text" className="form-control" id="recipient-name" />
              </div>
              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  كلمة المرور
                </label>
                <input type="password" className="form-control" id="recipient-name" />
              </div>

              <div className="forget_password">
              <span 
              className="btn"
              data-bs-target="#exampleModalToggle2"
              data-bs-toggle="modal">هل نسيت كلمة المرور؟</span>
              
              </div>

              
              <button className="btn button-login">
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
