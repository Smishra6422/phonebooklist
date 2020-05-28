import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PhonebookLists from "./component/phonebook-lists/phonebook-lists.component";
import { Switch, Route } from "react-router-dom";
import Header from "./component/header/header.component";
import FormContainer from "./component/form/form.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PhonebookLists} />
        <Route exact path="/addphonebook" component={FormContainer} />
      </Switch>
    </div>
  );
}

export default App;
