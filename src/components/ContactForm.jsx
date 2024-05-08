import React from "react";

function ContactForm() {
  
  function validateText(){
    var messageField = document.getElementById("exampleFormControlTextarea1");
    var nameField = document.getElementById("exampleFormControlInput1");
    var emailField = document.getElementById("exampleFormControlInput1");
    var errorText = document.getElementById("errorText");
    //var x = document.forms["contactForm"]["messageText"].value;
    if (messageField.value == "" || nameField.value == "" || emailField.value == "") {
      errorText.innerHTML = "all fields must be filled";
    } else {
      errorText.innerHTML = ""; 
    }
  }

  return (
    <form name="contactForm">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Name:
        </label>
        <input
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          
          required
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
          onBlur={validateText}
          required
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Message:
        </label>
        <textarea
          className="form-control"
          name="messageText"
          id="exampleFormControlTextarea1"
          rows="3" 
          onBlur={validateText}
          required
        ></textarea>
      </div>
      <div id="errorText"></div>
      <button type="submit" class="btn btn-primary">Submit </button>
    </form>

  );
}

export default ContactForm;
