import React, { useState } from "react";

function Login({ showLogin, onCloseClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      setIsValid(true);
      console.log("Email: ", email);
      console.log("Password: ", password);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className={`form-container ${showLogin ? "show" : ""}`}>
      <button className="close-btn" onClick={onCloseClick}>
        X
      </button>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {!isValid && <p className="error-msg">Please enter valid email and password.</p>}
      </form>
    </div>
  );
}

export default Login;
