import data from "./data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className="container">
        <h3 className="title">{people.length} Birthday today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          Clear all
        </button>
      </section>
    </main>
  );
};

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

const Person = ({ image, name, age }) => {
  return (
    <div className="person">
      <img src={image} alt="" />
      <h4>{name}</h4>
      <p>{age} years</p>
    </div>
  );
};

export default App;
