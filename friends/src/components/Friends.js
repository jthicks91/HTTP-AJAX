import React from "react";
import "./friends.css";
// import axios from "axios";
// import styled from "styled-components";

// const FriendsWrapperStyle = styled.div`
//   border: 1px solid black;
//   margin: 20px auto;
//   width: 500px;
// `;

function Friends(props) {
  return (
    <div className="friends-wrapper">
      {props.friends.map(friend => {
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

export default Friends;
