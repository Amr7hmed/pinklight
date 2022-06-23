import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Imagcover from "../../images/icon/input-img-avatar.png";
import Imagupload from "../../images/icon/input-img-upload.png";

export function InputImag(props) {
  const { HidePendingads, setItemimg, setInputimg } = props;
  return (
    <div className="input_contener">
      <div className="item_detils">
        <span>صوره شخصيه</span>
        <button
          className="btn"
          onClick={() => HidePendingads(setItemimg, setInputimg)}
        >
          إلغاء
        </button>
      </div>

      <div className="input-item">
        <div className="input">
          <div className="imageinput">
            <span className="imgcover">
              <img src={Imagcover} alt="" />
              <span className="imginput">
                <img src={Imagupload} alt="" />
              <input type="file" className="input-file" />
              </span>
            </span>
          </div>
          <div className="submitdiv">
            <button type="submit">حفظ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InputNameset(props) {
  const { HidePendingads, setItemname, setInputname, Valueinput } = props;
  return (
    <div className="input_contener">
      <div className="item_detils">
        <span> اسم المستخدم</span>
        <button
          className="btn"
          onClick={() => HidePendingads(setItemname, setInputname)}
        >
          إلغاء
        </button>
      </div>

      <div className="input-item">
        <div className="input">
          <Formik
            initialValues={{ name: Valueinput }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .min(2, "الأسم صغير جدا !")
                .max(15, "الأسم كبير جدا !")
                .required("هذا الحقل هام جدا"),
            })}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  placeholder={props.values.name}
                  name="name"
                  className={`form-control shadow-none input-fild ${
                    props.values.name === "" ? "is-invalid" : ""
                  }`}
                  autoComplete="off"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="errorfiled"
                />
                <div className="submitdiv">
                  <button type="submit">حفظ</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export function InputEmailset(props) {
  const { HidePendingads, setItememail, setInputemail, Valueinput } = props;
  return (
    <div className="input_contener">
      <div className="item_detils">
        <span>البريد الالكترونى</span>
        <button
          className="btn"
          onClick={() => HidePendingads(setItememail, setInputemail)}
        >
          إلغاء
        </button>
      </div>

      <div className="input-item">
        <div className="input">
          <Formik
            initialValues={{ email: Valueinput }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("بريد إلكتروني خاطئ")
                .required("هذا الحقل هام جدا"),
            })}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  placeholder={props.values.email}
                  name="email"
                  className={`form-control shadow-none input-fild input-fild-email text-left ${
                    props.values.email === "" ? "is-invalid" : ""
                  }`}
                  autoComplete="off"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="errorfiled"
                />
                <div className="submitdiv">
                  <button type="submit">حفظ</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export function InputPhoneset(props) {
  const { HidePendingads, setItemPhone, setInputPhone, Valueinput } = props;
  return (
    <div className="input_contener">
      <div className="item_detils">
        <span>رقم الجوال</span>
        <button
          className="btn"
          onClick={() => HidePendingads(setItemPhone, setInputPhone)}
        >
          إلغاء
        </button>
      </div>

      <div className="input-item">
        <div className="input">
          <Formik
            initialValues={{ mobile: Valueinput }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={Yup.object().shape({
              mobile: Yup.string()
                .min(2, "رقم الهاتف صغير جدا !")
                .max(15, "رقم الهاتف كبير جدا !")
                .required("هذا الحقل هام جدا"),
            })}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.mobile}
                  placeholder={props.values.mobile}
                  name="mobile"
                  className={`form-control shadow-none input-fild ${
                    props.values.mobile === "" ? "is-invalid" : ""
                  }`}
                  autoComplete="off"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="errorfiled"
                />
                <div className="submitdiv">
                  <button type="submit">حفظ</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export function InputPasswordset(props) {
  const { HidePendingads, setItemPassword, setInputPassword, Valueinput } =
    props;
  return (
    <div className="input_contener">
      <div className="item_detils">
        <span>كلمة المرور</span>
        <button
          className="btn"
          onClick={() => HidePendingads(setItemPassword, setInputPassword)}
        >
          إلغاء
        </button>
      </div>

      <div className="input-item">
        <div className="input">
          <Formik
            initialValues={{
              password: Valueinput,
              changepassword: "",
              confirmchangepassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={Yup.object().shape({
              password: Yup.string().required("This field is required"),
              changepassword: Yup.string().when("password", {
                is: (val) => (val && val.length > 0 ? false : true),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Both password need to be the same"
                ),
              }),

              confirmchangepassword: Yup.string().when("changepassword", {
                is: (val) => (val && val.length > 0 ? false : true),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Both password need to be the same"
                ),
              }),
            })}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <input
                  type="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  placeholder={props.values.password}
                  name="password"
                  className={`form-control shadow-none input-fild ${
                    props.values.password === "" ? "is-invalid" : ""
                  }`}
                  autoComplete="off"
                />

                <input
                  type="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.changepassword}
                  placeholder={props.values.changepassword}
                  name="changepassword"
                  className={`form-control shadow-none input-fild ${
                    props.values.changepassword === "" ? "is-invalid" : ""
                  }`}
                  autoComplete="off"
                />

                <input
                  type="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.confirmchangepassword}
                  placeholder={props.values.confirmchangepassword}
                  name="confirmchangepassword"
                  className={`form-control shadow-none input-fild ${
                    props.values.confirmchangepassword === ""
                      ? "is-invalid"
                      : ""
                  }`}
                  autoComplete="off"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="errorfiled"
                />
                <div className="submitdiv">
                  <button type="submit">حفظ</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export function InputLanguageset(props) {
  const { HidePendingads, setItemLanguage, setInputLanguage } = props;
  return (
    <div className="input_contener">
      <div className="item_detils">
        <span>اللغه</span>
        <button
          className="btn"
          onClick={() => HidePendingads(setItemLanguage, setInputLanguage)}
        >
          إلغاء
        </button>
      </div>

      <div className="input-item">
        <div className="input">
          <Formik
            initialValues={{
              language: "language",
              languagear: "العربيه",
              languageen: "الانجليزيه",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div
                  className="cheackpoxinputs"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                >
                  <label>
                    <input
                      type="radio"
                      value={props.values.languagear}
                      placeholder={props.values.language}
                      name={props.values.language}
                    />
                    العربيه
                  </label>

                  <label>
                    <input
                      type="radio"
                      value={props.values.languageen}
                      placeholder={props.values.language}
                      name={props.values.language}
                    />
                    الانجليزيه
                  </label>
                </div>
                <div className="submitdiv">
                  <button type="submit">حفظ</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
