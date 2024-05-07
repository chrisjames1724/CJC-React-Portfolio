import React from "react";

function ContactForm() {
  return (
    <div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Name:
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address:
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Message:
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="button" class="btn btn-primary">Submit </button>
    </div>
  );
}

export default ContactForm;
