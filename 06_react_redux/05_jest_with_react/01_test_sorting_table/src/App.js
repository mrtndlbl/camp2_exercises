import React, { Component } from "react";
import _ from "underscore";

function Row(props) {
  return (
    <tr key={props.decathlon_id}>
      <td>{props.decathlon_id}</td>
      <td className="title">{props.title}</td>
      <td className="price">{props.price}</td>
    </tr>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: this.props.lines,
      sortedBy: "decathlon_id",
      reverseSort: false
    };
  }

  filter(filterBy) {
    if (this.state.sortedBy === filterBy) {
      this.setState({reverseSort: !this.state.reverseSort});
    } else {
      this.setState({
        sortedBy: filterBy,
        reverseSort: false
      });
    }
  }

  render() {
    let sortedLines = _.sortBy(this.state.lines, this.state.sortedBy);
    if (this.state.reverseSort) {
      sortedLines.reverse();
    }
    return (
      <table>
        <thead>
          <tr>
            <th onClick={() => this.filter("decathlon_id")}>ID</th>
            <th className="titleHeader" onClick={() => this.filter("title")}>Title</th>
            <th className="priceHeader" onClick={() => this.filter("price")}>Price</th>
          </tr>
        </thead>
        <tbody>
          {sortedLines.map(Row)}
        </tbody>
      </table>
    );
  }
}

export default App;
