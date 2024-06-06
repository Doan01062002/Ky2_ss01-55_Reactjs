import React from 'react'
import Button from 'react-bootstrap/Button';


export default function login() {
  return (
    <section className="vh-100">
  <div className="container-fluid">
    <div className="row">
    <div className="col-sm-6 px-0 d-none d-sm-block">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
          alt="Login image"
          className="w-100 vh-100"
          style={{ objectFit: "cover", objectPosition: "left" }}
        />
      </div>
      <div className="col-sm-6 text-black">
        <div className="px-5 ms-xl-4">
          <i
            className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
            style={{ color: "#709085" }}
          />
          <span className="h1 fw-bold mb-0">Login</span>
        </div>
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          <form style={{ width: "23rem" }}>
            <div data-mdb-input-init="" className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example18">
                E-email
              </label>
              <input
                type="email"
                id="form2Example18"
                className="form-control form-control-lg"
                placeholder='Placeholder content'
              />
            </div>
            <div data-mdb-input-init="" className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example28">
                Password
              </label>
              <input
                type="password"
                id="form2Example28"
                className="form-control form-control-lg"
                placeholder='Placeholder content'
              />
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
              <p></p>
              <b>Forgot password?</b>
            </div>
            <div className="pt-1 mb-4">
              <button
                style={{width:"100%"}}
                data-mdb-button-init=""
                data-mdb-ripple-init=""
                className="btn btn-info btn-lg btn-block"
                type="button"
              >
                Login
              </button>
            </div>
            <hr />
            <Button style={{width:"100%"}} variant="outline-dark">Register now</Button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
