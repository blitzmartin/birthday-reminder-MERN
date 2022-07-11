import React from "react";
import Card from "react-bootstrap/Card";

export default function ListWithAll({ people }) {

  return (
    <>
      {people.map((person) => {
        return (
          <Card
            key={person._id}
            className="person"
            style={{
              width: "18rem",
              border: "none",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
            }}
          >
            <Card.Img src={person.image} alt={person.name} />
            <div>
              <Card.Title>{person.name}</Card.Title>
              <Card.Subtitle>{person.bday.slice(0, 2)}/{person.bday.slice(-2)}</Card.Subtitle>
            </div>
          </Card>
        );
      })}
    </>
  );
}
