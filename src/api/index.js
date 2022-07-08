import axios from "axios";
import { useState } from "react";

export const Api = "https://test.hawzen.sa/panklight/api/";

export const Signupemail = function (params) {
  const options = {
    method: "post",
    url: `${Api}signup/step1`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({
      email: params.email,
    }),
  };

  axios(options)
    .then(function (response) {
      // handle success
      console.log("handle success");
    })
    .catch(function (error) {
      // handle error
      console.log("handle error");
      console.log(error);
    });
};


export const Signupcode = function (params) {
  const options = {
    method: "post",
    url: `${Api}signup/step2`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: {
      email: JSON.parse(localStorage.getItem("email")),
      code: params.code,
    },
  };

  axios(options)
    .then(function (response) {
      // handle success
      console.log("handle success");
    })
    .catch(function (error) {
      // handle error
      console.log("handle error");
      console.log(error);
    });
};



      //localStorage.setItem("token", JSON.stringify(response.data.data.token));
     // window.location.pathname = "/";
     // Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
