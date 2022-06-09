import React from "react";

function ModelThreeSingup() {
  return (
    <div
      className="modal fade"
      id="singupModal3"
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
          أكمل بياناتك
          </h5>
          <div className="modal-body">
            <form>
              <div className="input_form">
                <label for="recipient-name" className="col-form-label">
                اسم المستخدم
                </label>
                <input type="text" className="form-control" id="recipient-name" />
              </div>



              <div className="input_form">
                <label for="recipient-name" className="col-form-label">
                البريد الالكترونى
                </label>
                <input type="email" className="form-control" id="recipient-name" />
              </div>


              <div className="input_form">
                <label for="recipient-name" className="col-form-label">
                ادخل كلمة المرور الجديده
                </label>
                <input type="password" className="form-control" id="recipient-name" />
              </div>

              <div className="input_form">
                <label for="recipient-name" className="col-form-label">
                إعد ادخال كلمة المرور الجديده
                </label>
                <input type="password" className="form-control" id="recipient-name" />
              </div>
              
              <button className="btn button-login mb-2">
              إنشاء الحساب
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelThreeSingup;
