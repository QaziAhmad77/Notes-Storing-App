import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const { showAlert } = props;
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:4000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json, "first");
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.token);
      // localStorage.setItem("token", JSON.stringify(data.token));
      // history.push("/");
      history("/");
      showAlert("Account created successfully", "success");
    } else {
      showAlert("Invalid Credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" onChange={onChange} id="exampleInputName" name="name" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" onChange={onChange} id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" onChange={onChange} id="password" name="password" minLength={5} required />
          </div>
          <div className="mb-3">
            <label htmlFor="cpasswordc" className="form-label">
              Confirm Password
            </label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" minLength={5} required />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
