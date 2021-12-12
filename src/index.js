
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var elements = [
  <div className="row_1">
    <section className="yellow_B box"></section>
    <section className="yellow_B box"></section>
  </div>,
  <div className="row_2">
    <section className="pink_B box"></section>
  </div>,
  <div className="row_3">
    <section className="blue_B box"></section>
    <section className="blue_B box"></section>
    <section className="blue_B box"></section>
  </div>
];
ReactDOM.render(elements, document.getElementById("root"));