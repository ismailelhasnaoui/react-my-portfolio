import React from "react";
import "./Services.css";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaSearch, FaCode } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <AiOutlineThunderbolt />,
    title: "Fast Performance",
    description:
      "Building fast and optimized web applications with improved loading speed, optimized assets and best practices for Core Web Vitals.",
  },
  {
    id: 2,
    icon: <FaSearch />,
    title: "Technical SEO",
    description:
      "Implementing technical SEO best practices including semantic HTML, meta tags, indexing optimization and SEO-friendly architecture.",
  },
  {
    id: 3,
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "Writing clean, maintainable and scalable code following best practices and modern development standards.",
  },
];

function Services() {
  return (
    <section className="services " id="services">
      <div className="container top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="cards-services">
          {services.map((service) => (
            <div key={service.id} className="card-service">
              {/* ✅ icon as component */}
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
