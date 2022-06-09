import React from "react";

function ModelthreePassword() {
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

              <button className="btn button-login mb-5">
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
