// import React from 'react';

// class EachFriend extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentEmail: "",
//             currentAge: "",
//             currentName: "",
//             edit: false
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             currentName: this.props.friends.name,
//             currentAge: this.props.friend.age,
//             currentEmail: this.props.friend.email
//         });
//     }

//     inputHandler = event => {
//         this.setState({ [event.target.name]: event.target.value});
//     };

//     editHandlerFalse = (id, name, age, email) => {
//         this.props.editPost(id, name, age, email);
//         this.setState({ edit: false });
//     };

//     editHandlerTrue = () => {
//         this.setState({edit: true});
//     };

//     render() {
//         if (this.state.edit === false) {
//             return (
//                 <div>
//                     <h2>{this.props.friend.id}</h2>
//                     <p>{this.props.friend.name}</p>
//                     <p>{this.props.friend.age}</p>
//                     <p>{this.props.friend.email}</p>
//                 </div>
//     }
// }
