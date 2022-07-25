import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../api";
import Empty from "../../components/empty";
import Notificationsitem from "../../components/notifications/Notificationsitem";
import Imagrempity from "../../images/empty/msg_nodata-empty.png";
import Loading from "../../layout/loading/loading";

function Mynotifications() {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const options = {
      method: "post",
      url: `${Api}un-read-notification`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    axios(options).then(function (response) {
      setLoading(true);
      console.log("handle success");
      setData(response.data.notifications)
    })
      .catch(function (error) {
        console.log("handle error");
        console.log(error.response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  
  return (
    <section className="profile__mynotifications">
      <div className="container">
        <div className="profile__header">
          <h3>إشعاراتى</h3>
        </div>

        <div className="profile__content">
          <>
            {loading === false ? (
              <Loading />
            ) : Data.length === 0 ? <>
              <Empty Image={Imagrempity} Description="لا يوجد اى اشعارات لك حتى الان"
              />
            </>
              : (<>
                {Data.map(item =>
                 <Notificationsitem key={item.id} Text={item.note} Id={item.id} setLoading={setLoading}/>
                )}
              </>
              )}
          </>
        </div>
      </div>
    </section>
  );
}

export default Mynotifications;
