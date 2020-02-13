import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreater from './store/action/actions';

class App extends Component {
  render() {
    return (
      <div>
        <p> Student Marks: {this.props.marks1} || {this.props.marks2} </p>
        <button onClick = {() => this.props.incrementMarks1(this.props.marks2)}> Add Student Marks </button>
        <button onClick = {() => this.props.incrementMarks2(this.props.marks1)}> Add Student Marks </button>
      </div>
    ) 
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    marks1: state.student1.marks1,
    marks2: state.student2.marks2
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementMarks1: (marks2) => dispatch(actionCreater.marksIncrement1(marks2)),
    incrementMarks2: (marks1) => dispatch(actionCreater.marksIncrement2(marks1))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);