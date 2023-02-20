import React from "react";
import { formation } from "./DataFormation";
import CompleteFormation from "./CompleteFormation";
import Navbar from "./Navbar";

const AllFormation = () => {
  return (
    <div>
      <Navbar />
      {formation.map((item, index) => (
        <CompleteFormation key={index} data={item} />
      ))}
    </div>
  );
};

export default AllFormation;
