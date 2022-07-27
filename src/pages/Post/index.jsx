/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import PostCategorie from "../../components/posts/postcategories.jsx";
import Form from "../../components/posts/forms/Form.jsx";
import axios from "axios";
import { Api } from "../../api/index.js";
import Loading from "../../layout/loading/loading.jsx";

function Posts() {
  const [showformdress, setShowformdress] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);


  const options = {
    method: "get",
    url: `${Api}filters`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };


  useEffect(() => {

    axios(options).then(function (response) {
      console.log("handle success");
      // setPerpage(response.data.products.per_page);
      setData(response.data.categories)
      setLoading(true);
     console.log(response.data);
    })
      .catch(function (error) {
        console.log("handle error");
        console.log(error.response.data);
      });

  }, [loading]);


  return (
    <section className="post">
      <div className="container">
        <div className="post__header">
          <h4>أنشر إعلانك</h4>
        </div>
        <>
          {loading === false ? (
            <Loading />
          ) : (
            <>
              <PostCategorie setShowformdress={setShowformdress} />
              <Form showformdress={showformdress} Data={data}/>

            </>
          )}
        </>
      </div>
    </section>
  );
}

export default Posts;
