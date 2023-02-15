import React from "react";
import { formation } from "./DataFormation";
import CompleteFormation from "./CompleteFormation";

const AllFormation = () => {
  return (
    <div>
      {formation.map((item, index) => (
        <CompleteFormation key={index} data={item} />
      ))}
    </div>
  );
};

export default AllFormation;
