import React from "react";

export const ContactPicker = (props) => {
  const names = props.contacts.map((contact) => {
    return <option value={contact.name} key={contact.name}>{contact.name}</option>
  });

  return (
    <div>
      <select id="contact-list" onChange={props.onChange} required >
        <option value={props.defaultListValue} key="default">{props.defaultListValue}</option>
        {names}
      </select>
    </div>
  );
};





