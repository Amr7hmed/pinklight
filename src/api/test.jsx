import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = e => setTitle(e.target.value);
  const onBodyChange = e => setBody(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const data = { title, body };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
  };

  return (
      <div className="App">
        <form>
          <input  placeholder="Title" value={title}
            onChange={onTitleChange} required />
          <textarea placeholder="Body" value={body}
            onChange={onBodyChange} required />
          <button type="submit" onClick={handleSubmit}>
           Create Post
          </button>
        </form>
      </div>
  );
}

export default App;





// App.js

import './styles.css';
import axios from "axios";

const App = () => {
  const [state, setState] = useState({
    name: "",
    job: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: state.name,
      job: state.job
    };
    axios.post("https://reqres.in/api/users", userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
  };

  return (
    <div>
      <h1>Register or Create new account</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="job">
          Job
          <input
            type="text"
            name="job"
            value={state.job}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};