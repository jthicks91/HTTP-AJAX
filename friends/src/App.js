import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Friends from "./components/Friends.js";
// import styled from "styled-components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    console.log("CDM now running");
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
    // this.setState({ items: data })
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  addPost = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.age || !this.state.email) {
      console.log("Error, all 3 input fields must be filled.");
    } else {
      let newFriend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      };
      axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data, name:"", age:"", email: ""});
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <Friends {...props} friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default App;
