import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Friends from "./components/Friends.js";
// import styled from "styled-components";

// const FriendFormStyle = styled.div`
//   border: 1px solid black;
//   width: 500px;
//   margin: 0 auto;
//   button {
//     margin: 18px
//     width: 100px;
//     height: 40px;
//     background: lawngreen;
//     &:hover {
//       background: lightgrey;
//     }
//   }
// `;

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
          this.setState({ friends: res.data, name: "", age: "", email: "" });
        })
        .catch(err => console.log(err));
    }
  };

  editPost = (id, updatedName, updatedAge, updatedEmail) => {
    let newFriend = {
      name: updatedName,
      age: updatedAge,
      email: updatedEmail
    };
    axios
      .put(`http://localhost:5000/friends/${id}`, newFriend)
      .then(res => {
        this.setState({ freinds: res.data });
      })
      .catch(err => console.log(err));
  };

  deletePost = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        {/* <FriendFormStyle> */}
        <form onSubmit={this.addPost}>
          <h2>Name:</h2>
          <input
            type="text"
            placeholder="Enter name...."
            name="name"
            onChange={this.inputHandler}
            value={this.state.name}
          />
          <h2>Age:</h2>
          <input
            type="text"
            placeholder="Enter age...."
            name="age"
            onChange={this.inputHandler}
            value={this.state.age}
          />
          <h2>Email:</h2>
          <input
            type="text"
            placeholder="Enter email...."
            name="email"
            onChange={this.inputHandler}
            value={this.state.email}
          />
          <div>
            <button type="submit">Add Friend</button>
          </div>
        </form>
        {/* </FriendFormStyle> */}
        <Route
          path="/"
          render={props => (
            <Friends
              {...props}
              friends={this.state.friends}
              editPost={this.editPost}
              deletePost={this.editPost}
              inputHandler={this.inputHandler}
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
