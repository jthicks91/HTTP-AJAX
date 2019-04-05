import React from "react";

class EachFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEmail: "",
      currentAge: "",
      currentName: "",
      edit: false
    };
  }

  componentDidMount() {
    this.setState({
      currentName: this.props.friend.name,
      currentAge: this.props.friend.age,
      currentEmail: this.props.friend.email
    });
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  editHandlerFalse = (id, name, age, email) => {
    this.props.editPost(id, name, age, email);
    this.setState({ edit: false });
  };

  editHandlerTrue = () => {
    this.setState({ edit: true });
  };

  render() {
    if (this.state.edit === false) {
      return (
        <div>
          <h2>{this.props.friend.id}</h2>
          <p>{this.props.friend.name}</p>
          <p>{this.props.friend.age}</p>
          <p>{this.props.friend.email}</p>
          <div className="button-container">
            <button className="edit-button" onClick={this.editHandlerTrue}>
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => this.props.deletePost(this.props.friend.id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <form
          onSubmit={() =>
            this.editHandlerFalse(
              this.props.friend.id,
              this.state.currentName,
              this.state.currentAge,
              this.state.currentEmail
            )
          }
        >
          <h2>Name:</h2>
          <input
            type="text"
            placeholder="Enter name...."
            name="currentName"
            onChange={this.inputHandler}
            value={this.state.currentName}
          />
          <h2>Age:</h2>
          <input
            type="text"
            placeholder="Enter age...."
            name="currentAge"
            onChange={this.inputHandler}
            value={this.state.currentAge}
          />
          <h2>Email:</h2>
          <input
            type="text"
            placeholder="Enter email...."
            name="currentEmail"
            onChange={this.inputHandler}
            value={this.state.currentEmail}
          />
          <div>
            <button type="submit"> Finish Edit</button>
          </div>
        </form>
      );
    }
  }
}

export default EachFriend;
