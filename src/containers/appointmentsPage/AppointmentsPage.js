import React, {useState, useEffect} from "react";

import { TileList } from "../../components/tileList/TileList";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [alert, setAlert] = useState('');
  const defaultListValue = 'No contact selected';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.onAddAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
    document.getElementById('contact-list').value = defaultListValue;
  };

  useEffect(() => {
    for(const appointmentItem of props.appointments) {
      if(appointmentItem.date === date && appointmentItem.time === time) {
        setAlert('This date and time is already booked');
      } else {
        setAlert('');
      }
    }
  }, [props.appointments, date, time]);

  return (
    <div>
      <section className="appointment">
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={title}
          setTitle={setTitle}
          contacts={props.contacts}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          alert={alert}
          defaultListValue={defaultListValue} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList object={props.appointments}/>
      </section>
    </div>
  );
};