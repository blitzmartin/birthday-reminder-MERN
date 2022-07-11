import React, { useEffect, useState } from "react";
import ListWithAll from "../components/ListWithAll";

export default function Contacts() {
  const [people, setPeople] = useState([]);

  function getPeople() {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
    return;
  }

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      <div className="pink-box">
        <div className="header">
          <h1>Birthday Reminder</h1>
        </div>
        <div className="white-box-lg">
            <ListWithAll people={people} />
        </div>
      </div>
    </div>
  );
}
