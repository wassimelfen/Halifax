import React from "react";

const CompleteFormation = (props) => {
  const descriptionWithLineBreaks = props.data.description.replace(
    /:/g,
    
    ":<br>"
  );
  return (
    <div className="container">
      <div className="row">
        
          <img src={props.data.image} alt="pic" className="langpic"></img>
       </div>

        <div className="row">
          <h1>{props.data.title}</h1>
          <p
            dangerouslySetInnerHTML={{ __html: descriptionWithLineBreaks }}
          ></p>
        </div>
      </div>
    
  );
};

export default CompleteFormation;
