import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-light mt-5 pt-4">
      <div className="row px-4">

        {/* Column 1 */}
        <div className="col-12 col-md-4 mb-3">
          <h5>About Us</h5>
          <p className="small">
            We build modern web applications with clean UI and great UX.
          </p>
        </div>

        {/* Column 2 */}
        <div className="col-12 col-md-4 mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-light text-decoration-none">Home</a></li>
            <li><a href="/about" className="text-light text-decoration-none">About</a></li>
            <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
            <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-12 col-md-4 mb-3">
          <h5>Contact</h5>
          <p className="small mb-1">📍 New York, USA</p>
          <p className="small mb-1">📧 info@example.com</p>
          <p className="small">📞 +1 234 567 890</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center py-3 border-top border-secondary mt-3">
        <small>© {new Date().getFullYear()} Your Company. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
