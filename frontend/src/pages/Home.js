import React, { useEffect, useState } from "react";
import data from "../data.js";
import Container from "react-bootstrap/Container";
import List from "../components/List";

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const day = dd + mm;

export default function Home() {
  const [people, setPeople] = useState(data);
  const [ counter, setCounter ] = useState(0)

  const countBdays = () => {
    let addOne = 0;
    for (let i = 0; i < data.length; i++){
        if (data[i].bday=== day) {
           addOne++;
        }
    }
    setCounter(addOne)
    return counter;
  }

  useEffect(() => {
    countBdays();
  }, [counter]);

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
