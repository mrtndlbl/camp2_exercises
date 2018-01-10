import React, { Component } from "react";
import _ from "underscore";
import Row from "./Row";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: this.props.lines,
      sortedBy: "decathlon_id",
      reverseSort: false
    };

    this.filter = this.filter.bind(this);
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
        <TableHead filter={this.filter} />
        {sortedLines.map(Row)}
      </table>
    );
  }
}

export default Table;
