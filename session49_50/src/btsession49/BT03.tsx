import React from "react";

export default function BT03() {
  return (
    <div
      style={{
        width: "1000px",
        height: "700px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4>Login account</h4>
      <form>
        {/* Email input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>
        {/* Password input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>
        {/* Submit button */}
        <button
          type="button"
          data-mdb-button-init=""
          data-mdb-ripple-init=""
          className="btn btn-primary btn-block mb-4"
        >
          Login an account
        </button>
        {/* Register buttons */}
        <div className="text-center">
          <p>
            Already have an account? <a href="#!">Register</a>
          </p>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-facebook-f" />
          </button>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-google" />
          </button>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-twitter" />
          </button>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-github" />
          </button>
        </div>
      </form>
    </div>
  );
}
