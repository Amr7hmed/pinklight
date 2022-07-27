import React from "react";

export default function Inputsize(props) {
    const { setSizes ,sizes } = props;
   
  // with add & remove filter
  const CheckHandler = (e) => {
    const value = e.target.value;
    setSizes((prev) =>
      sizes.includes(value)
        ? prev.filter((cur) => cur !== value)
        : [...prev, e.target.value]
    );
  };

    return (
      <div className="form-group">
        <label> المقاسات المتاحه</label>
        <div className="size">
          <span>
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineRadio1"
              name="sizes"
              value="s"
              onClick={CheckHandler} />
            <label className="form-check-label" htmlFor="inlineRadio1">
              S
            </label>
          </span>
  
          <span>
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineRadio2"
              name="sizes"
              value="m"
              onClick={CheckHandler} />
            <label className="form-check-label" htmlFor="inlineRadio2">
              M
            </label>
          </span>
  
          <span>
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineRadio2"
              name="sizes"
              value="l"
              onClick={CheckHandler} />
            <label className="form-check-label" htmlFor="inlineRadio2">
              L
            </label>
          </span>
  
          <span>
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineRadio2"
              name="sizes"
              value="x-l"
              onClick={CheckHandler} />
            <label className="form-check-label" htmlFor="inlineRadio2">
              XL
            </label>
          </span>
        </div>
      </div>
  
    );
  }


  /*
import React, { Fragment, useState, useEffect } from "react";

export default function App() {
  const [sizes, setSizes] = useState([]);

  // const CheckHandler = (e) => {
  //   setSizes((prev) => [...prev, e.target.value]);
  // };

  // with add & remove filter
  const CheckHandler = (e) => {
    const value = e.target.value;
    setSizes((prev) =>
      sizes.includes(value)
        ? prev.filter((cur) => cur !== value)
        : [...prev, e.target.value]
    );
  };

  useEffect(() => {
    //Print data each time the checkbox is "checked" or "unchecked"
    console.log(sizes);
  }, [sizes]);

  return (
    <Fragment>
      <input
        type="checkbox"
        id="jane"
        name="jane"
        value="jane"
        onClick={CheckHandler}
      />
      <label htmlFor="jane">jane</label>
      <br />

      <input
        type="checkbox"
        id="Mike"
        name="Mike"
        value="Mike"
        onClick={CheckHandler}
      />
      <label htmlFor="Mike">Mike</label>
      <br />

      <input
        type="checkbox"
        id="board"
        name="board"
        value="board"
        onClick={CheckHandler}
      />
      <label htmlFor="board">board</label>
      <br />
    </Fragment>
  );
}

  */