
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Team: {team}</p>
          <p>Nationality: {nationality}</p>
          <p>Jersey Number: {jerseyNumber}</p>
          <p>Age: {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Player.defaultProps = {
//   name: 'Unknown Player',
//   team: 'Unknown Team',
//   nationality: 'Unknown Nationality',
//   jerseyNumber: 0,
//   age: 0,
//   imageUrl: 'default-image.jpg',
// };

export default Player;
