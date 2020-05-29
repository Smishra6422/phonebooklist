import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PhonebookLists from "./component/phonebook-lists/phonebook-lists.component";
import { Switch, Route } from "react-router-dom";
import Header from "./component/header/header.component";
import AddPhonebookList from "./component/add-phonebook/add-phonebook.component";
import UpdatePhonebookList from "./component/update-phonebook/update-phonebook.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PhonebookLists} />
        <Route exact path="/addphonebook" component={AddPhonebookList} />
        <Route exact path="/addphonebook/:id" component={UpdatePhonebookList} />
      </Switch>
    </div>
  );
}

export default App;
