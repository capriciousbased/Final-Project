import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import FindActivity from "./components/pages/FindActivity";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Footer from "./components/Footer";
import EventDetails from "./components/EventDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/find-activity" component={FindActivity} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/events/:id">
          <EventDetails />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
