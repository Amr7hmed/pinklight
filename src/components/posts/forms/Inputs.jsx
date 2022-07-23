import React from "react";

export function InputType(props) {
  const { type, setType } = props;

  const handleVlaue = (e) => {
    const value = e.target.value;
    setType(value);
  };
  return (
    <div className="form-group selectbox">
      <label>اختر الفئه الفرعيه</label>
      <select className="form-control"
        value={type}
        onChange={handleVlaue} >
        <option value="noselect">النوع </option>
        <option value="one">النوع الاول</option>
        <option value="two">النوع الثاني</option>
        <option value="three">النوع الثالث</option>
      </select>
    </div>

  );
}

export function InputName(props) {
  const { handleChange } = props;
  return (<div className="form-group">
    <label>عنوان المنتج</label>
    <input
      type="text"
      className="form-control"
      placeholder="اكتب هنا اسم مميز للمنتج الذى تريد بيعه"
      name="title"
      onChange={handleChange} />
  </div>);
}

export function InputDes(props) {
  const { handleChange } = props;
  return (<div className="form-group">
    <label>وصف المنتج/ اختيارى </label>
    <textarea
      className="form-control"
      rows="3"
      placeholder="اكتب هنا اسم وصف مميز للمنتج الذى تريد بيعه"
      name="description"
      onChange={handleChange}
    ></textarea>
  </div>
  );
}

export function Inputstatus(props) {
  const { handleChange } = props;
  return (
    <div className="form-group">
      <div>
        <label> حالة المنتج</label>
      </div>

      <div className="form-check form-check-inline">
        <label className="form-check-label" htmlFor="inlineCheckbox1">
          <input
            className="form-check-input"
            type="radio"
            id="inlineCheckbox1"
            name="product_status"
            value="new"
            onChange={handleChange} />
          جديد
        </label>

        <label className="form-check-label" htmlFor="inlineCheckbox2">
          <input
            className="form-check-input"
            type="radio"
            id="inlineCheckbox2"
            name="product_status"
            value="used"
            onChange={handleChange} />
          مستعمل
        </label>

        <label className="form-check-label" htmlFor="inlineCheckbox3">
          <input
            className="form-check-input"
            type="radio"
            id="inlineCheckbox3"
            name="product_status"
            value="gift"
            onChange={handleChange} />
          هديه / تبرع
        </label>
      </div>
    </div>
  );
}

export function Inputprice(props) {
  const { handleChange } = props;
  return (
    <div className="form-group">
      <label>السعر</label>
      <div className="price">
        <input
          type="text"
          className="form-control"
          placeholder="اكتب هنا السعر"
          name="price"
          onChange={handleChange} />
        <span>ر.س</span>
        <div className="input-redio-price">
          <label className="form-check-label" htmlFor="inlineprice1">
            <input
              className="form-check-input"
              type="radio"
              id="inlineprice1"
              name="pricecase"
              value="negotiable"
              onChange={handleChange} />
            قابل للتفاوض
          </label>

          <label className="form-check-label" htmlFor="inlineprice1">
            <input
              className="form-check-input"
              type="radio"
              id="inlineprice1"
              name="pricecase"
              value="non-negotiable"
              onChange={handleChange} />
            غير قابل للتفاوض
          </label>
        </div>
      </div>
    </div>
  );
}


export function InputBrand(props) {
  const { handleChange } = props;
  return (
    <div className="form-group">
      <label> الماركه</label>
      <div className="price">
        <input type="text" className="form-control" placeholder="شى إن"
          name="brand"
          onChange={handleChange} />
      </div>
    </div>
  );
}

export function InputCity(props) {
  const { handleChange } = props;
  return (
    <div className="form-group">
      <label> المدينه / المنطقه</label>
      <div className="price">
        <input
          type="text"
          className="form-control"
          placeholder="الرياض"
          name="city"
          onChange={handleChange} />
      </div>
    </div>
  );
}


export function SalesDetails(props) {
  const { handleChange } = props;
  return (
    <div className="salesdetails">
      <h6>راجع التفاصيل الخاصه بك</h6>

      <div>
        <div className="form-group">
          <input type="tel" className="form-control" placeholder="رقم الجوال/اختيارى"
            pattern="[0-9]{11}"
            name="phoneuser"
            onChange={handleChange} />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="التوقيع"
            name="signature"
            onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}