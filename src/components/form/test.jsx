import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyInputField, MyTextField } from "../contact/MyField.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faMobileScreenButton,
  faTextWidth,
} from "@fortawesome/free-solid-svg-icons";
import IconImage from "../../images/icon/solid.png";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Name Is Required"),
  mobile: Yup.string()
    .min(10, "Too Short!")
    .max(12, "Too Long!")
    .required("Mobile Is Required"),
  email: Yup.string().email("Invalid email").required("Email Is Required"),
  title: Yup.string().required("Title Is Required"),
  message: Yup.string().required("Your Message Is Required"),
});

function FormContact() {
  return (
    <Formik
      initialValues={{
        name: "",
        mobile: "",
        title: "",
        email: "",
        message: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form>
          <div className="row g-3">
            <div className="col-md-12 fielddiv">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <MyInputField name="name" type="text" placeholder="Name" />
            </div>
            <div className="col-md-6 fielddiv">
              <span>
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </span>
              <MyInputField name="mobile" type="text" placeholder="Mobile" />
            </div>
            <div className="col-md-6 fielddiv">
              <span>
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </span>
              <MyInputField name="email" type="text" placeholder="Email" />
            </div>
            <div className="col-md-12 fielddiv">
              <span>
                <FontAwesomeIcon icon={faTextWidth} />
              </span>
              <MyInputField name="title" type="text" placeholder="Title" />
            </div>

            <div className="col-md-12 fielddiv" style={{ height: "201px" }}>
              <span>
                <FontAwesomeIcon icon={faTextWidth} />
              </span>
              <MyTextField
                name="message"
                type="textarea"
                placeholder="Your Message"
              />
            </div>

            <div className="col-12 buttonfield">
              <button type="submit" className="btn">
                  Submit
                  </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormContact;


import {ErrorMessage, useField } from "formik";

export const MyInputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
        <input
          {...field}
          {...props}
          className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
          autoComplete="off"
        />
        
         <ErrorMessage name={field.name} component="div" className="errorfiled"/>
    </>
  );
};


export const MyTextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
        <textarea 
          {...field}
          {...props}
          className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
          autoComplete="off"
        />
        
         <ErrorMessage name={field.name} component="div" className="errorfiled"/>
    </>
  );
};