import React, {useState, useEffect} from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!isDuplicate) {
      props.onAddContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    let isDuplicate = false;
    for(const contactItem of props.contacts) {
      if(contactItem.name === name) {
        isDuplicate = true;
        setAlert('Contact is already on the list');
        break;
      } 
    } if(!isDuplicate) {
      setAlert('');
    }   
  }, [props.contacts, name])

  return (
    <div>
      <section className="contact">
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          isDuplicate={isDuplicate}
          alert={alert}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
          <TileList 
            object={props.contacts}
          />
      </section>
    </div>
  );
};
