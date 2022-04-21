import React from "react";

const Contact = ({ item }) => {
  return (
    <>
      <h2>
        {item.firstName} {item.lastName} {item.email}
      </h2>
    </>
  );
};

export default Contact;
