import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddContact = ({ AddContactHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError("All fields are mandatory!");
      return;
    }
    AddContactHandler({ name, email });
    setName("");
    setEmail("");
    setError("");
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          {/* Heading and Button */}
          <div className="d-flex align-items-center justify-content-between mt-3">
            <h2>Add Contact</h2>
            <Link to="/">
              <button className="btn btn-primary">All Contacts</button>
            </Link>
          </div>

          {/* Form */}
          <form onSubmit={add} className="mt-3">
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="emailInput">Email address</label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
