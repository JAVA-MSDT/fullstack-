import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";
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
      <div className="row">
        <AddContact />
      </div>
      <div className="row">
        {contacts.map((contact, index) => (
          <Contact key={index} item={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
