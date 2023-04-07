import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  defaultListValue,
  alert
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const today = getTodayString();

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        id="title-input"
        required
      />
      <ContactPicker 
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)}
        defaultListValue={defaultListValue}
      />
      <input 
        type="date"
        value={date}
        placeholder="Date"
        onChange={(e) => setDate(e.target.value)}
        id="date-input"
        min={today}
        required
      />
      <input 
        type="time"
        value={time}
        placeholder="Time"
        onChange={(e) => setTime(e.target.value)}
        id="time-input"
        required
      />
      <input type="submit" disabled={alert ? true : false} />
      <p className="alert">{alert}</p>
    </form>
  );
};
