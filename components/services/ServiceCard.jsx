import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="border-teal-400 border-2 p-[30px] rounded-[12px]">
      <h3 className="dark:text-white text-2xl mb-[8px] font-bold">{service.title}</h3>
      <p className="text-slate-400">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
