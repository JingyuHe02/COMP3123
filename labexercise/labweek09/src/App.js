import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "Jingyu He",
      studentId: "101317215",
      course: "COMP3123 - Full Stack Development I",
      lab: "Lab Week 09 - React JS Basics",
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Welcome to React Lab 09</h1>
        <h2>{this.state.course}</h2>
        <p><b>Name:</b> {this.state.studentName}</p>
        <p><b>Student ID:</b> {this.state.studentId}</p>
        <p><b>Exercise:</b> {this.state.lab}</p>
      </div>
    );
  }
}

export default App;

