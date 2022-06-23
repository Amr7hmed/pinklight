import React from "react";
import { useState } from "react";
import {
  InputImag,
  InputNameset,
  InputEmailset,
  InputPhoneset,
  InputPasswordset,
  InputLanguageset,
} from "./Inputs";

function ProfileForm() {
  const [itemimage, setItemimg] = useState("show");
  const [inputimage, setInputimg] = useState("hide");
  
  const [itemname, setItemname] = useState("show");
  const [inputname, setInputname] = useState("hide");

  const [itememail, setItememail] = useState("show");
  const [inputemail, setInputemail] = useState("hide");

  const [itemPhone, setItemPhone] = useState("show");
  const [inputPhone, setInputPhone] = useState("hide");

  const [itemPassword, setItemPassword] = useState("show");
  const [inputPassword, setInputPassword] = useState("hide");

  const [itemLanguage, setItemLanguage] = useState("show");
  const [inputLanguage, setInputLanguage] = useState("hide");

  const [Active, setActive] = useState("active");

  const ShowPendingads = (setDateItem, setDateInput) => {
    setDateItem("hide");
    setDateInput("show");
    setActive("notactive");
  };
  const HidePendingads = (setDateItem, setDateInput) => {
    setDateItem("show");
    setDateInput("hide");
    setActive("active");
  };

  return (
    <div className="profile__form">
      <div className="item">
        <div className={itemimage}>
          <div className={"item_detils " + Active}>
            <span>صوره شخصيه</span>
            <button
              className="btn"
              onClick={() => ShowPendingads(setItemimg, setInputimg)}
            >
              تعديل
            </button>
          </div>
        </div>

        <div className={inputimage}>
          <div className="item_inputimg">
            <InputImag
              HidePendingads={HidePendingads}
              setItemimg={setItemimg}
              setInputimg={setInputimg}
            />
          </div>
        </div>
      </div>

      <div className="item">
        <div className={itemname}>
          <div className={"item_detils " + Active}>
            <span>اسم المستخدم</span>
            <button
              className="btn"
              onClick={() => ShowPendingads(setItemname, setInputname)}
            >
              تعديل
            </button>
          </div>
        </div>

        <div className={inputname}>
          <div className="item_inputimg">
            <InputNameset
              HidePendingads={HidePendingads}
              setItemname={setItemname}
              setInputname={setInputname}
              Valueinput={"ساره ابراهيم"}
            />
          </div>
        </div>
      </div>

      <div className="item">
        <div className={itememail}>
          <div className={"item_detils " + Active}>
            <span>البريد الالكترونى </span>
            <button
              className="btn"
              onClick={() => ShowPendingads(setItememail, setInputemail)}
            >
              تعديل
            </button>
          </div>
        </div>

        <div className={inputemail}>
          <div className="item_inputimg">
            <InputEmailset
              HidePendingads={HidePendingads}
              setItememail={setItememail}
              setInputemail={setInputemail}
              Valueinput={"sara@gmail.com"}
            />
          </div>
        </div>
      </div>

      <div className="item">
        <div className={itemPhone}>
          <div className={"item_detils " + Active}>
            <span>رقم الجوال</span>
            <button
              className="btn"
              onClick={() => ShowPendingads(setItemPhone, setInputPhone)}
            >
              تعديل
            </button>
          </div>
        </div>

        <div className={inputPhone}>
          <div className="item_inputimg">
            <InputPhoneset
              HidePendingads={HidePendingads}
              setItemPhone={setItemPhone}
              setInputPhone={setInputPhone}
              Valueinput={"0555671979"}
            />
          </div>
        </div>
      </div>

      <div className="item">
        <div className={itemPassword}>
          <div className={"item_detils " + Active}>
            <span>كلمة المرور</span>
            <button
              className="btn"
              onClick={() => ShowPendingads(setItemPassword, setInputPassword)}
            >
              تعديل
            </button>
          </div>
        </div>

        <div className={inputPassword}>
          <div className="item_inputimg">
            <InputPasswordset
              HidePendingads={HidePendingads}
              setItemPassword={setItemPassword}
              setInputPassword={setInputPassword}
              Valueinput={"amr"}
            />
          </div>
        </div>
      </div>

      <div className="item">
        <div className={itemLanguage}>
          <div className={"item_detils " + Active}>
            <span>اللغه</span>
            <button
              className="btn"
              onClick={() => ShowPendingads(setItemLanguage, setInputLanguage)}
            >
              تعديل
            </button>
          </div>
        </div>

        <div className={inputLanguage}>
          <div className="item_inputimg">
            <InputLanguageset
              HidePendingads={HidePendingads}
              setItemLanguage={setItemLanguage}
              setInputLanguage={setInputLanguage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
