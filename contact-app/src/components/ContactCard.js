import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../images/user.jpg";
import DeleteModal from "./DeleteModal";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    setShowModal(false);
    props.clickHandler(id);
  };

  const handleUpdate = () => {
    navigate(`/update/${id}`, { state: { contact: props.contact } }); // ✅ Pass contact data
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={user}
              alt="User Avatar"
              className="rounded-circle me-3"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <div>
              <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
                <h6 className="mb-1">{name}</h6>
                <small className="text-muted">{email}</small>
              </Link>
            </div>
          </div>
          <div className="d-flex gap-1">
            {/* Delete Button */}
            <button
              className="btn btn-outline-danger btn-sm"
              style={{
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setShowModal(true)}
              aria-label="Delete Contact"
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
            {/* Edit Button */}
            <button
              className="btn btn-outline-dark btn-sm"
              style={{
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleUpdate} // ✅ Navigate to update page with state
              aria-label="Edit Contact"
            >
              <ion-icon name="create-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>

      {/* Render the DeleteModal Component */}
      <DeleteModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ContactCard;
