import React from "react";
import "./App.css";

import PhonebookLists from "./component/phonebook-lists/phonebook-lists.component";
import { Switch, Route } from "react-router-dom";
import Header from "./component/header/header.component";
import AddPhonebookList from "./component/add-phonebook/add-phonebook.component";
import UpdatePhonebookList from "./component/update-phonebook/update-phonebook.component";
import FooterPage from "./component/footer/footer.component";
import AboutUsPage from "./component/aboutus/aboutUs.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PhonebookLists} />
        <Route exact path="/addphonebook" component={AddPhonebookList} />
        <Route exact path="/addphonebook/:id" component={UpdatePhonebookList} />
        <Route exact path="/about" component={AboutUsPage} />
      </Switch>
      <FooterPage />
    </div>
  );
}

export default App;
