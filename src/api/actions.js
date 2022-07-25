import axios from "axios";
import { Api } from "./index.js";

  export const FilterDataCategories = async (setPerpage,setProducts,value) => {
    const  options = {
      method: "get",
      url: `${Api}products?category=${value}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    await axios(options).then(function (response) {
     console.log("handle success");
     //setPerpage(response.data.products.current_page);
     console.log(response.data.products);
     setProducts(response.data.products.data)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
  };

  
  export const FilterDataBrands = async (setPerpage,setProducts,value) => {
    const  options = {
      method: "get",
      url: `${Api}products?brand=${value}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    await axios(options).then(function (response) {
     console.log("handle success");
     //setPerpage(response.data.products.current_page);
     console.log(response.data.products);
     setProducts(response.data.products.data)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
  };

  
  export const FilterDataStatus = async (setPerpage,setProducts,value) => {
    const  options = {
      method: "get",
      url: `${Api}products?status=${value}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    await axios(options).then(function (response) {
     console.log("handle success");
     //setPerpage(response.data.products.current_page);
     console.log(response.data.products);
     setProducts(response.data.products.data)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
  };

  
  export const FilterDataCity = async (setPerpage,setProducts,value) => {
    const  options = {
      method: "get",
      url: `${Api}products?city=${value}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    await axios(options).then(function (response) {
     console.log("handle success");
     //setPerpage(response.data.products.current_page);
     console.log(response.data.products);
     setProducts(response.data.products.data)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
  };

  
  export const FilterDataPrice = async (setPerpage,setProducts,minvalue,maxvalue) => {
    const  options = {
      method: "get",
      url: `${Api}products?min_price=${minvalue}&max_price=${maxvalue}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    await axios(options).then(function (response) {
     console.log("handle success");
     //setPerpage(response.data.products.current_page);
     console.log(response.data.products);
     setProducts(response.data.products.data)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
  };