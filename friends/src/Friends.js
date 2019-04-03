import React from "react";
import "./friends.css";
import axios from "axios";

// import styled from "styled-components";

// const FriendsWrapperStyle = styled.div`
//   border: 1px solid black;
//   margin: 20px auto;
//   width: 500px;
// `;

class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
    // this.setState({ items: data })
  }

  render() {
    return (
      <div className="friends-wrapper">
        {this.state.friends.map(friend => {
          return (
            <div>
              <h2>{friend.id}</h2>
              <p>{friend.name}</p>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Friends;
