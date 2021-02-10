import React from "react";
import PeopleTable from "./components/PeopleTable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
      <div>
        <Router>
          <div className="container">
            <Header/>
            <div className="container">
              <Switch>
                <Route path="/" component = {PeopleTable}></Route>
                <Route path="/peoples" component = {PeopleTable}></Route>
              </Switch>
            </div>
            <Footer/>
          </div>
        </Router>
      </div>
  );
}

export default App;
