import React from "react";
import axios from "axios";
import HistoryInput from "HistoryInput";
export default class History extends React.Component {

  state = {
    persons: [],
  };

  componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
          console.log(res);
          this.setState({ persons: res.data});
      });
  }

  render() {
      return (
        <ul>
            { this.state.persons.map(person => (
            <li key={person.id}>{person.name}</li>
            ))}
        </ul>
      );
  }
}
