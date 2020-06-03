import React from "react";
import { connect } from "react-redux";

function CounterComponent (props) {
  return (
    <div>
      <p>Counter: {props.counter}</p>
      <button onClick={props.addOne}>+ 1</button>
      <button onClick={props.removeOne}>- 1</button>
      <button onClick={props.addTen}>+ 10</button>
      <button onClick={props.removeTen}>- 10</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  )
};

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  addOne: () => dispatch({ type: "ADD-ONE" }),
  removeOne: () => dispatch({ type: "REMOVE-ONE" }),
  addTen: () => dispatch({ type: "ADD-TEN" }),
  removeTen: () => dispatch({ type: "REMOVE-TEN" }),
  reset: () => dispatch({ type: "RESET" })
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);