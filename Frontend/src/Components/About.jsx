import React from "react";
import { Form, Link } from "react-router-dom";
import "../Components/About.css";
function About() {
  return (
    <>
      {/* this is comments  */}
      <div className="about-us-container">
        <div className="about-us">
          <div className="container">
            <div className="about-us-content">
              <h2>About Us</h2>
              <p>
                Welcome to RevWave, where passion meets innovation. We are
                committed to delivering the best automobile experience to our
                customers. With a rich heritage of craftsmanship and
                engineering, our vehicles are designed to inspire and elevate
                every journey.
              </p>
              <h3>Our Mission</h3>
              <p>
                To revolutionize the automotive industry with sustainable,
                reliable, and cutting-edge vehicles that cater to the needs of
                modern-day drivers.
              </p>
              <h3>Our Vision</h3>
              <p>
                To be a global leader in automotive excellence, setting the
                standard for innovation, quality, and customer satisfaction.
              </p>
              <h3>Our Values</h3>
              <ul>
                <li>
                  Innovation: Continuously pushing the boundaries of technology
                  and design.
                </li>
                <li>
                  Quality: Committed to delivering the highest standards in
                  every vehicle.
                </li>
                <li>
                  Customer Focus: Understanding and exceeding customer
                  expectations.
                </li>
                <li>
                  Sustainability: Reducing our environmental footprint through
                  green practices.
                </li>
                <li>
                  Integrity: Upholding the highest ethical standards in
                  everything we do.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
