import React from "react";
import "./friends.css";
import EachFriend from "./EachFriend";

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
          <EachFriend
            friend={friend}
            editPost={props.editPost}
            deletePost={props.deletePost}
            inputHandler={props.inputHandler}
            name={props.name}
            age={props.age}
            email={props.email}
          />
        );
      })}
    </div>
  );
}

export default Friends;
