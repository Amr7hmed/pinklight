import React from 'react'

function ModelSingup() {
  return (
    
    <div
      className="modal fade"
      id="singupModal"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
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
          إنشاء حساب جديد
          </h5>
          <div className="modal-body">
            <form>
              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  رقم الهاتف/ البريد الإلكترونى
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  disabled
                />
              </div>

                <span className="btn button-login mb-5"
              data-bs-target="#singupModal2"
              data-bs-toggle="modal">المتابعه</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelSingup;