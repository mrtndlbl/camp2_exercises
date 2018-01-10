import React, { Component } from 'react';

function Row(props) {
  return (
    <tr>
      <td>{props.decathlon_id}</td>
      <td>{props.title}</td>
      <td>{props.price}</td>
    </tr>
  )
}

export default Row;
