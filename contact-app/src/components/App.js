import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header.js";
import Footer from "./Footer.js";
import AddContact from "./AddContact.js";
import ContactList from "./ContactList.js";
import ContactDetail from "./ContactDetail.js";
import api from "../api/contacts.js";
import ContactUpdate from "./ContactUpdate";

function App() {
  const [contacts, setContacts] = useState([]);

  // Retrieve Contacts from API
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  // Add Contact
  const AddContactHandler = async (contact) => {
    const request = { id: uuidv4(), ...contact };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  // Remove Contact
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  // **Update Contact**
  const updateContactHandler = async (updatedContact) => {
    const response = await api.put(
      `/contacts/${updatedContact.id}`,
      updatedContact
    );
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? response.data : contact
      )
    );
  };

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact AddContactHandler={AddContactHandler} />}
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route
            path="/update/:id"
            element={
              <ContactUpdate updateContactHandler={updateContactHandler} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
