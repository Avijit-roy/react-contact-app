import React from "react";

const DeleteModal = ({ showModal, onClose, onDelete }) => {
  if (!showModal) return null; // Don't render anything if modal is not visible

  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Delete Contact</h1>
            <button
              type="button"
              className="btn-close"
              onClick={onClose} // Close modal
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            Are you sure you want to delete this contact?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose} // Close modal
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onDelete} // Confirm delete
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
