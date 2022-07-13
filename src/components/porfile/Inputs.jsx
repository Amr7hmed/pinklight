import React, { useState } from "react";
import Imagcover from "../../images/icon/input-img-avatar.png";
import Imagupload from "../../images/icon/input-img-upload.png";

export function InputImag(props) {
  const { HidePendingads, setItemimg, setInputimg } = props;

  const [file, setFile] = useState(null);
  //const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setFile(value);
    //setMessage("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
  };

  return (
    <div className="input_contener">
      <div className="item_detils">
        <span>صوره شخصيه</span>
        <button
          className="btn"
          onClick={() => HidePendingads(setItemimg, setInputimg)}
        >
          إلغاء
        </button>
      </div>

      <div className="input-item">
        <form className="input" onSubmit={handleSubmit}>
          <div className="imageinput">
            <span className="imgcover">
              <img src={Imagcover} alt="" />
              <span className="imginput">
                <img src={Imagupload} alt="" />
                <input type="file" className="input-file"
                  onChange={handleChange} />
              </span>
            </span>
          </div>
          <div className="submitdiv">
            <button type="submit">حفظ</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function InputNameset(props) {
  const { HidePendingads, setItemname, setInputname, Valueinput } = props;
  const [name, setName] = useState(Valueinput);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    setMessage("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    HidePendingads(setItemname, setInputname)
  };

  return (
    <div className="input_contener">
      <div className="item_detils">
        <span> اسم المستخدم</span>
        <button
          className="btn"
          onClick={() => HidePendingads(setItemname, setInputname)}
        >
          إلغاء
        </button>
      </div>

      <div className="input-item">

        <form className="input" onSubmit={handleSubmit}>

          <input type="text"
            className="form-control shadow-none input-fild"
            value={name}
            name="name"
            onChange={handleChange} />


          <span className="errorfiled">{message}</span>

          <div className="submitdiv">
            <button type="submit">حفظ</button>
          </div>
        </form>

      </div>
    </div>
  );
}

export function InputEmailset(props) {
  const { HidePendingads, setItememail, setInputemail, Valueinput } = props;
  const [email, setEmail] = useState(Valueinput);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setMessage("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    HidePendingads(setItememail, setInputemail)
  };

  return (
    <div className="input_contener">
      <div className="item_detils">
        <span>البريد الالكترونى</span>
        <button className="btn" onClick={() => HidePendingads(setItememail, setInputemail)}>
          إلغاء
        </button>
      </div>

      <div className="input-item">
        <form className="input" onSubmit={handleSubmit}>
          <input type="text"
            className="form-control shadow-none input-fild"
            value={email}
            name="email"
            onChange={handleChange} />
          <span className="errorfiled">{message}</span>
          <div className="submitdiv">
            <button type="submit">حفظ</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function InputPhoneset(props) {
  const { HidePendingads, setItemPhone, setInputPhone, Valueinput } = props;
  const [phone, setPhone] = useState(Valueinput);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setMessage("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(phone);
    HidePendingads(setItemPhone, setInputPhone)
  };
  return (
    <div className="input_contener">
      <div className="item_detils">
        <span>رقم الجوال</span>
        <button
          className="btn"
          onClick={() => HidePendingads(setItemPhone, setInputPhone)}
        >
          إلغاء
        </button>
      </div>

      <div className="input-item">
        <form className="input" onSubmit={handleSubmit}>
          <input type="tel"
            className="form-control shadow-none input-fild"
            value={phone}
            name="phone"
            pattern="[0-9]{11}"
            onChange={handleChange} />
          <span className="errorfiled">{message}</span>
          <div className="submitdiv">
            <button type="submit">حفظ</button>
          </div>
        </form>

      </div>
    </div>
  );
}

export function InputPasswordset(props) {
  const { HidePendingads, setItemPassword, setInputPassword } = props;

  const [state, setState] = useState({
    password: "",
    password_confirmation: "",
    password_confirmation_2: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });

    setMessage("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
    HidePendingads(setItemPassword, setInputPassword)
  };

  return (
    <div className="input_contener">
      <div className="item_detils">
        <span>كلمة المرور</span>
        <button
          className="btn"
          onClick={() => HidePendingads(setItemPassword, setInputPassword)}
        >
          إلغاء
        </button>
      </div>


      <div className="input-item">
        <form className="input" onSubmit={handleSubmit}>

          <input type="password"
            className="form-control shadow-none input-fild"
            name="password"
            onChange={handleChange} />

          <input type="password"
            className="form-control shadow-none input-fild"
            name="password_confirmation"
            onChange={handleChange} />

          <input type="password"
            className="form-control shadow-none input-fild"
            name="password_confirmation_2"
            onChange={handleChange} />


          <span className="errorfiled">{message}</span>

          <div className="submitdiv">
            <button type="submit">حفظ</button>
          </div>

        </form>

      </div>
    </div>
  );
}

export function InputLanguageset(props) {
  const { HidePendingads, setItemLanguage, setInputLanguage } = props;

  const [state, setState] = useState({
    language: "",
    languagear: "العربيه",
    languageen: "الانجليزيه",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      language: value,
    });

    setMessage("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state.language);
    HidePendingads(setItemLanguage, setInputLanguage)
  };


  return (
    <div className="input_contener">
      <div className="item_detils">
        <span>اللغه</span>
        <button
          className="btn"
          onClick={() => HidePendingads(setItemLanguage, setInputLanguage)}
        >
          إلغاء
        </button>
      </div>


      <div className="input-item">
        <form className="input" onSubmit={handleSubmit}>
          <div className="cheackpoxinputs">
            
          <label>
            <input type="radio" value={state.languagear} name="language" onChange={handleChange} />
            العربيه
          </label>

          <label>
            <input type="radio" value={state.languageen} name="language" onChange={handleChange} />
            الانجليزيه
          </label>
          </div>
          <span className="errorfiled">{message}</span>
          <div className="submitdiv">
            <button type="submit">حفظ</button>
          </div>
        </form>

      </div>

    </div>
  );
}
