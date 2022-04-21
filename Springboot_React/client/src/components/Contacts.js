import React, { useState, useEffect } from "react";
import Contact from "./Contact";

const Contacts = (props) => {
  //  const [contacts, setContacts] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/contacts", {
      method: "GET",
      headers: {
        Origin: "*",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setContacts(response._embedded.contacts);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {contacts.map((contact, index) => (
        <Contact key={index} item={contact} />
        /*       <div key={index}>
            <h2>{index} {c.firstName}</h2>
        </div> */
      ))}
    </div>
  );
};

export default Contacts;
