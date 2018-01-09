import React, { Component } from 'react';
import './App.css';
import _ from 'underscore';

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputProductTable : props.inputProductTable,
      order : "asc"
    }
  }

  sortMachine = filter =>
    this.state.order === "asc"
    ? this.setState({inputProductTable: _.sortBy(this.state.inputProductTable, filter), order : "des"})
    : this.setState({inputProductTable: _.sortBy(this.state.inputProductTable, filter).reverse(), order : "asc"});


  render() {
    return (
      <div>
        <table>
          <tr>
            <th onClick = {() => this.sortMachine("decathlon_id")}>Decathlon ID</th>
            <th onClick = {() => this.sortMachine("title")}>Title</th>
            <th onClick = {() => this.sortMachine("price")}>Price</th>
          </tr>
          {this.state.inputProductTable.map(productRow => <Row productRow={productRow} />)}
        </table>
      </div>
    );
  }
}

function Row(props) {
  console.log(props)
  return (
    <tr>
      <td>{props.productRow.decathlon_id}</td>
      <td>{props.productRow.title}</td>
      <td>{props.productRow.price}</td>
    </tr>
  )
}

export default Table;
