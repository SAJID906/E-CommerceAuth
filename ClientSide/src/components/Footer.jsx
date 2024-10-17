import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid text-white  px-4 md:px-16 lg:px-24 space-x-2 mt-7">
      <div className=" bg-black py-8 px-2 rounded-sm mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">
            Code Encoder
          </h2>
          <p className="mb-4">
            Code Encoders offers IT services and consulting, including software,
            web, and mobile app development.
          </p>
          <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Consulting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                API
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:info@yourcompany.com"
                className="hover:text-white"
              >
                info@codeencoder.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-white">
                0306 9570169
              </a>
            </li>
            <li>
              Address: 2nd Floor, 102 Commercial Area, Sector Y DHA Phase 3,
              Lahore, Punjab
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
