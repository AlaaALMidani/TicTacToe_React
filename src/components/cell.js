/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import X from "./../x.svg";
import O from "./../o.svg";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }
  onClick(){

    this.props.onClick(this.props.ind)
    this.setState(()=>{})
  }
  render() {
    return (
      <div onClick={() =>this.onClick() } className="bg-slate-100 bg-opacity-15 m-1 w-32 h-32 rounded-3xl content-center z-1 cursor-pointer">
        {this.state.value !== "_" ? (

          <img
            src={this.state.value === "X" ? X : O}
            className="w-24 h-24 m-auto"
          />
        ) : (
          <div></div>
        )
        }
      </div>
    );
  }
}

export default Cell;
