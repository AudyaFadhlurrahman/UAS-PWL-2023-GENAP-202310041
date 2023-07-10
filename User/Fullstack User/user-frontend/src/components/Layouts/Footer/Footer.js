import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container nav-bg h-50px py-3 fixed-bottom">
      <div className="footer-border justify-content-center">
        <p className="d-flex justify-content-center footer-text text-white">
          &copy; Created by Muhammad Audya Fadhlurrohman. &middot;
          <a href="https://wa.me/087873654451" className="ms-1 footer-text" target="_blank" rel="noopener noreferrer">
            Contact Me
          </a>
        </p>
      </div>
    </footer>
  );
}
