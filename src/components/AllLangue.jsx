import React from "react";
import { langue } from "./DataAllLangue";
import CompleteFormation from "./CompleteFormation";
import Navbar from "./Navbar";

const AllLangue = () => {
  return (
    <div>
      <Navbar />
      {langue.map((item, index) => (
        <CompleteFormation key={index} data={item} />
      ))}
    </div>
  );
};

export default AllLangue;
