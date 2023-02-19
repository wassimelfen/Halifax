import React from "react";
import { langue } from "./DataAllLangue";
import CompleteFormation from "./CompleteFormation";

const AllLangue = () => {
  return (
    <div>
      {langue.map((item, index) => (
        <CompleteFormation key={index} data={item} />
      ))}
    </div>
  );
};

export default AllLangue;
