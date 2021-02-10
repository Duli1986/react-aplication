import PeopleList from "./components/PeopleList";
import React from "react";
import PeopleTable from "./components/PeopleTable";
import {Container} from "reactstrap";

function App() {
  return (
    <div className="container">
      <Container />
      <PeopleTable />
    </div>
  );
}

export default App;
