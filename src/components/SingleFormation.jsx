import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleFormation = (props) => {
  return (
    <div>
      <Card className="langCard">
        <Card.Img variant="top" src={props.data.image} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>

          <button className="checkOneFormation">Voir Plus</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleFormation;
