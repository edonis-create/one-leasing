import React from "react";
import "./Map.css";

const ContactUsMap = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=21.40885%2C41.99535%2C21.41585%2C42.00465&layer=mapnik"
        loading="lazy"
        title="Map of Skopje, North Macedonia"
      />
    </div>
  );
};

export default ContactUsMap;
