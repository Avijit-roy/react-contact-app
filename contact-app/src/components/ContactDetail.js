import React from "react";
import user from "../images/user.jpg";
import { Link, useLocation } from "react-router-dom";

const ContactDetail = (props) => {
  const location = useLocation(); // Get the passed state
  const { name, email } = location.state.contact;
  return (
    <div>
      <div
        className="card text-center mx-auto mt-5"
        style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="bg-primary text-white py-4" />
        <img
          src={user}
          alt="Avatar"
          className="rounded-circle mx-auto mt-n5 border border-white"
          style={{ width: 100, height: 100 }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="text-muted mb-2">{email}</p>
          <Link to="/">
            <button className="btn btn-primary ms-auto">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ContactDetail;
