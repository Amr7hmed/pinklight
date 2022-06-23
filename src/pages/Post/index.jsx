import React from "react";
import { useState } from "react";
import PostCategorie from "../../components/posts/postcategories.jsx";
import { AccessoriesForm, BigForm, DressForm, OuerForm } from "../../components/posts/postform.jsx";

function Posts() {
  const [showformdress, setShowformdress] = useState("show");
  const [showformbag, setShowformbag] = useState("hide");
  const [showformaccessories, setShowformaccessories] = useState("hide");
  const [showformouter, setShowformouter] = useState("hide");

  return (
    <section className="post">
      <div className="container">
        <div className="post__header">
          <h4>أنشر إعلانك</h4>
        </div>

        <PostCategorie
          showformdress={showformdress}
          setShowformdress={setShowformdress}
          showformbag={showformbag}
          setShowformbag={setShowformbag}
          showformaccessories={showformaccessories}
          setShowformaccessories={setShowformaccessories}
          showformouter={showformouter}
          setShowformouter={setShowformouter}
        />
        <div className={showformdress}>
        <DressForm/>
        </div>
        <div className={showformbag}>
        <BigForm/>
        </div>
        <div className={showformaccessories}>
        <AccessoriesForm/>
        </div>

        <div className={showformouter}>
          <OuerForm/>
        </div>
      </div>
    </section>
  );
}

export default Posts;
