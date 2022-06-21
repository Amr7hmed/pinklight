import React from 'react';
import PostCategorie from "../../components/posts/postcategories.jsx";
import PostForm from '../../components/posts/postform.jsx';

function Posts() {
  return (
    <section className="post">
      <div className="container">
        <div className="post__header">
        <h4>أنشر إعلانك</h4>
        </div>

        <PostCategorie/>
        <PostForm/>
        </div>
    </section>
  )
}

export default Posts;