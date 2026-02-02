import React from "react";
import io from "../Images/io_logo.jpg";

const Login = () => {
  return (
    <>
      <form 
        className="container my-5 border border-success rounded p-5"
        style={{ width: "60%" }}
      >
        <div className="mb-4">
          <h1 className="fw-bold text-center">Contact Us</h1>
          <h3 className="text-center">
            Code io{" "}
            <img
              src={io}
              height={40}
              alt="logo"
              className="border border-dark rounded-circle"
            />
          </h3>
        </div>

        {/* Email */}
        <div className="form-group mb-3">
          <label className="fw-bold">Email address</label>
          <input
            type="email"
            className="form-control border-dark"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group mb-4">
            <label className="fw-bold">phone  no :</label>
            <input type="tel" className="form-control border-dark" />

        </div>
        {/* Message */}
        <div className="form-group mb-4">
          <label className="fw-bold">Message</label>
          <textarea
            className="form-control border-dark"
            rows="4"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
