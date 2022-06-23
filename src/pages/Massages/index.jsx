import React from 'react'
import MassagesContent from '../../components/porfile/massagescontent';
import MassagesUsers from '../../components/porfile/massagesusers';
import Imguser from "../../images/icon/user.svg";

function Massages() {
  return (
    <section className="profile__massages">
      <div className="container">
        <div className="profile__header">
          <h3>رسائلى</h3>
        </div>

        <div className="profile__content">
          <div className="massages__container">
            <MassagesUsers Imguser={Imguser} Title={"ساره ابراهيم"}/>
            <MassagesContent Imguser={Imguser} Title={"ساره ابراهيم"}/>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Massages;


