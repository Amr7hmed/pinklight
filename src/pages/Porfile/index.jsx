import React from "react";
import ProfileForm from "../../components/porfile/profileform";

function Porfile() {
  return (
    <section className="porfile__user">
      <div className="container">
        <div className="profile__header">
          <h3>الملف الشخصى</h3>
        </div>

        <div className="profile__content">

          <ProfileForm/>
        </div>
      </div>
    </section>
  );
}

export default Porfile;
