import React from 'react';
import {  Formik } from "formik";
import * as Yup from "yup";
import { MyInputField } from './inputs';

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


function FormInput() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            value={props.values.name}
            name="name"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
      </Formik>
    </div>
  )
}

export default FormInput;