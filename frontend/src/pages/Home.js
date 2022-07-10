import React, { useEffect, useState } from "react";
//import data from "../data.js";
import axios from "axios";
import Container from "react-bootstrap/Container";
import List from "../components/List";

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const day = dd + mm;

export default function Home() {
  const [people, setPeople] = useState([]);
  const [counter, setCounter] = useState(0);

  function getPeople() {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data);
      })
      .catch((err) => console.log(err));
    return;
  }

  const countBdays = () => {
    let addOne = 0;
    for (let i = 0; i < people.length; i++) {
      if (people[i].bday === day) {
        addOne++;
      }
    }
    setCounter(addOne);
    return counter;
  };

  useEffect(() => {
    getPeople();
    countBdays();
  }, []);

  return (
    <div>
      <Container className="pink-box">
        <div className="header">
          <h1>Birthday Reminder</h1>
        </div>
        <div className="d-grid gap-2 white-box">
          <p>{counter} birthdays today</p>
          <List people={people} />
        </div>
      </Container>
    </div>
  );
}