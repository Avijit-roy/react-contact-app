import React from "react";

const UpdateModel = ({ showModal, onClose, onUpdate }) => {
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
            <h1 className="modal-title fs-5">Update Contact</h1>
            <button
              type="button"
              className="btn-close"
              onClick={onClose} // Close modal
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            Are you sure you want to update this contact?
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
              onClick={onUpdate} // Confirm delete
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModel;
