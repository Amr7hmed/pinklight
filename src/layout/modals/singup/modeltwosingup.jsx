import React from "react";

function ModeltwoSingup() {
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
                  id="recipient-name"
                />
                <button className="btn send">أرسال</button>
              </div>
                <span className="btn button-login mb-5"
              data-bs-target="#singupModal3"
              data-bs-toggle="modal">المتابعه</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModeltwoSingup;
