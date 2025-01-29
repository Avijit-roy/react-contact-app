import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start d-flex justify-content-center align-items-center text-white"
      style={{
        backgroundColor: "#212529", // Dark background
        height: "50px",
      }}
    >
      <div>
        © 2025 Copyright:{" "}
        <a className="text-white" href="https://github.com/Avijit-roy">
          visit our GitHub profile
        </a>
      </div>
    </footer>
  );
};

export default Footer;
