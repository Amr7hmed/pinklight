import React from "react";
import { useState } from "react";
import PostCategorie from "../../components/posts/postcategories.jsx";
import Form from "../../components/posts/forms/Form.jsx";

function Posts() {
  const [showformdress, setShowformdress] = useState(true);
  const [categoryid , setCategoryid]=useState(1);

  return (
    <section className="post">
      <div className="container">
        <div className="post__header">
          <h4>أنشر إعلانك</h4>
        </div>

        <PostCategorie setShowformdress={setShowformdress} setCategoryid={setCategoryid}/>
        <Form showformdress={showformdress} categoryid={categoryid}/>
      </div>
    </section>
  );
}

export default Posts;
