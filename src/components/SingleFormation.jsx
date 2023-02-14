import React,{useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleFormation = (props) => {

  useEffect(() => {
    console.log(props.data);
  },[]);
  return (
    <div>
    <Card className='cards' style={{ width: '18rem' ,height:'30rem'}}>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
       
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>    
    </div>
  )
}

export default SingleFormation
// <Card.Text>{props.data.description}</Card.Text>