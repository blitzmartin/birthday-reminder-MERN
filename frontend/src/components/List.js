import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();
const day = dd + mm;

export default function List({ people }) {
  const [counter, setCounter] = useState(0);
  const filtered = people.filter((person) => {
    return person.bday === day;
  });
  useEffect(() => {
    setCounter(filtered.length);
  }, [filtered, counter])

  return (
    <>
    <p>{counter} birthdays today</p>
      {filtered.map((person) => {
        const age = yyyy - person.bornYear;
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
              <Card.Subtitle>age {age}</Card.Subtitle>
            </div>
          </Card>
        );
      })}
    </>
  );
}
