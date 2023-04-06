import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const defaultContacts = [
    {
      name: 'John Smith',
      phone: '333-333-3333',
      email: 'johnsmith@gmail.com'
    }, 
    {
      name: 'Serena Smith',
      phone: '324-332-3333',
      email: 'serenasmith@gmail.com'
    }
  ]

  const defaultAppointments = [
    {
      title: 'School',
      contact: 'John Smith',
      dateTime: '10.10.2023, 10:00'
    },
    {
      title: 'Home',
      contact: 'Serena Smith',
      dateTime: '11.11.2023, 08:00'
    }
  ]

  const [contacts, setContacts] = useState(defaultContacts);
  const handleAddContact = (name, phone, email) => {
    setContacts((prev) => {
      return [...prev, {name: name, phone:phone, email:email}];
    });
  }

  const [appointments, setAppointments] = useState(defaultAppointments);
  const handleAddAppointment = (title, contact, date, time) => {
    setAppointments((prev) => {
      return [...prev, {title: title, contact: contact, date: date, time:time }];
    });
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
              contacts={contacts} 
              onAddContact={handleAddContact}
              />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
              appointments={appointments}
              onAddAppointment={handleAddAppointment}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
