import React from "react";

function ModelonePassword() {
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
            <form>
              <div className="input_form">
                <label for="recipient-name" className="col-form-label">
                  رقم الهاتف/ البريد الإلكترونى
                </label>
                <input type="text" className="form-control" id="recipient-name" />
              </div>

              <div className="modal-footer">
                <span className="btn button-login"
              data-bs-target="#exampleModalToggle3"
              data-bs-toggle="modal">المتابعه</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelonePassword;
