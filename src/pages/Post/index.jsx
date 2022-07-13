import React from "react";
import { useState } from "react";
import PostCategorie from "../../components/posts/postcategories.jsx";
import Form from "../../components/posts/forms/Form.jsx";

function Posts() {
  const [showformdress, setShowformdress] = useState(true);

  return (
    <section className="post">
      <div className="container">
        <div className="post__header">
          <h4>أنشر إعلانك</h4>
        </div>

        <PostCategorie setShowformdress={setShowformdress}/>
        <Form showformdress={showformdress}/>
      </div>
    </section>
  );
}

export default Posts;
