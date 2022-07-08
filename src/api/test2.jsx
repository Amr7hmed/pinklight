import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Signup } from "../../../api";

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
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(values) => {
                console.log(values);
                Signup(values)
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().required("هذا الحقل هام جدا"),
              })}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <div className="input_form">
                    <label htmlFor="recipient-name" className="col-form-label">
                      رقم الهاتف/ البريد الإلكترونى
                    </label>
                    <input
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.email}
                      placeholder={props.values.email}
                      name="email"
                      className={`form-control shadow-none input-fild`}
                      autoComplete="off"
                    />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="errorfiled"
                    />
                    <div className="submitdiv">
                      <button
                        type="submit"
                        className="btn button-login mb-5"
                        data-bs-target="#singupModal2"
                        data-bs-toggle="modal"
                      >
                        المتابعه
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelSingup;
