import React from "react";
import Modelone from "./modelone.jsx";
import ModelonePassword from "../password/ModelonePassword.jsx";
import ModeltwoPassword from "../password/ModeltwoPassword.jsx";
import ModelthreePassword from "../password/ModelthreePassword.jsx";
import ModelSingup from "../singup/modelsingup.jsx";
import ModeltwoSingup from "../singup/modeltwosingup.jsx";
import ModelThreeSingup from "../singup/modelthreesingup.jsx";

function Login() {
  return (
    <>
      <Modelone/>
      <ModelonePassword/>
      <ModeltwoPassword/>
      <ModelthreePassword/>
      <ModelSingup/>
      <ModeltwoSingup/>
      <ModelThreeSingup/>
    </>
  );
}

export default Login;
