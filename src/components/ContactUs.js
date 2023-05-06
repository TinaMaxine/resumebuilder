import React, { useState } from 'react';

function ContactUs({ showContactUs, onCloseClick }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username: ", username);
    console.log("Email: ", email);
    console.log("Contact Number: ", contactNumber);
    console.log("Query: ", query);
  };

  const handleClose = () => {
    setShowForm(false);
  }

  return (
    showForm &&
    <div className={`form-container ${showContactUs ? "show" : ""}`}>
      <button className="close-btn" onClick={handleClose}>X</button>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-number">Contact Number</label>
          <input
            type="tel"
            id="contact-number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="query">Query</label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
