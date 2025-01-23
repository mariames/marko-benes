import React from "react";

const services = [
  "Labels and Packaging",
  "Posters and Flyers",
  "Billboards & Roll Ups",
  "Vehicle Branding",
  "Promo Booths",
  "Shelves",
  "Logo",
  "T-shirts",
  "Video Animations",
];

const Services: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-gray-100 text-gray-800 font-semibold text-center p-6 h-32 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
        >
          {service}
        </div>
      ))}
    </div>
  );
};

export default Services;
