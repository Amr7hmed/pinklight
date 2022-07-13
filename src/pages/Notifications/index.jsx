import React from "react";
import Notificationsitem from "../../components/notifications/Notificationsitem";

function Mynotifications() {
  return (
    <section className="profile__mynotifications">
      <div className="container">
        <div className="profile__header">
          <h3>إشعاراتى</h3>
        </div>

        <div className="profile__content">
          <Notificationsitem />
        </div>
      </div>
    </section>
  );
}

export default Mynotifications;
