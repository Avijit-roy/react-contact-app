import React, { useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  // Filter contacts based on search input
  const filteredContacts = props.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderContactList = filteredContacts.length ? (
    filteredContacts.map((contact) => (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    ))
  ) : (
    <p className="mt-4 text-center text-muted">No contacts found.</p>
  );

  return (
    <div className="container mb-5">
      <div className="row justify-content-md-center mb-5">
        <div className="col col-lg-6 mb-5">
          {/* Header Section */}
          <div className="d-flex align-items-center justify-content-between mt-3">
            <h2>All Contacts</h2>
            <Link to="/add">
              <button className="btn btn-primary" aria-label="Add Contact">
                Add Contact
              </button>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Rendered Contact List */}
          <div className="mt-3">{renderContactList}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
