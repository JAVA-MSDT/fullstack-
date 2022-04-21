import React, { createRef, useRef } from "react";

const AddContact = () => {
  const firstNameRef = createRef("");
  const lastNameRef = createRef("");
  const emailRef = createRef("");

  const submitContact = (event) => {
    event.preventDefault();
    let contact = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
    };
    alert("Submit contact");
    alert(JSON.stringify(contact));
    fetch("http://localhost:8080/api/contacts", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));

    window.location.reload();
  };
  return (
    <>
      <div className="row">
        <form className="col s12" onSubmit={submitContact}>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Placeholder"
                id="first_name"
                type="text"
                className="validate"
                ref={firstNameRef}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="last_name"
                ref={lastNameRef}
                type="text"
                className="validate"
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                ref={emailRef}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <button
              className="waves-effect waves-light btn"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddContact;
