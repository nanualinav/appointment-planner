import React from "react";

export const AppointmentsPage = () => {
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section className="appointment">
        <h2>Add Appointment</h2>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Contact"/>
        <input type="datetime-local" placeholder="Date"/>
        <input type="submit"/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
