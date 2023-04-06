import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  alert
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />

      <input
        id="phone-input"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        pattern="\d{3}-\d{3}-\d{4}"
        required
      />

      <input
        id="email-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        required
      />
      <input type="submit" disabled={alert ? true : false}/>
      <p className="alert">{alert}</p>
    </form>
  );
};
