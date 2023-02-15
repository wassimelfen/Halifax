import React from "react";
import { langues } from "./DataLangue";
import CompleteFormation from "./CompleteFormation";

const AllLangue = () => {
  return (
    <div>
      {langues.map((item, index) => (
        <CompleteFormation key={index} data={item} />
      ))}
    </div>
  );
};

export default AllLangue;
