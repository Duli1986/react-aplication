import React from "react";
import PeopleTable from "./components/PeopleTable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PeopleList from "./components/PeopleList";

function App() {
  return (
      <div>
        <Router>
          <div className="container">
            <Header/>
            <div className="container">
              <Switch>
                <Route path="/" component = {PeopleList}></Route>
                <Route path="/peoples" component = {PeopleList}></Route>
              </Switch>
            </div>
            <Footer/>
          </div>
        </Router>
      </div>
  );
}

export default App;
