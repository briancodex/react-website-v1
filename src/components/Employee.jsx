import React from 'react'
import './Employee.css'
import Card from 'react-bootstrap/Card';

function Employee(props) {
  return (
    <div className="employee">
      <div className="employee-list mr-5 text-center">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/topi_miring.jpg" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.title}
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default Employee