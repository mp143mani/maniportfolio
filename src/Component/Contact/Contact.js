import React from "react";
import './Contact.css'

function Contact() {
  return (
    <div>
      <div className="container-fluid col-10 c1 " id="contact">
        <h1 className="a1 a2">Contact</h1>
        <h5 className="a1">Any Query Meassage me</h5>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email the Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Please enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email the address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Please enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Meassage me!
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Send your Meassage"
            rows={3}
            defaultValue={""}
          />
        </div>
        <button className="btn btn-primary pt">Submit</button>
      </div>
    </div>
  );
}

export default Contact;
