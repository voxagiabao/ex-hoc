import React, { Component } from "react";

export default function(WrappedComponent, grayscale = 0) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHovered: false
      };
    }

    onMouseEnter() {
      this.setState({
        isHovered: true
      });
    }

    onMouseLeave() {
      this.setState({
        isHovered: false
      });
    }

    render() {
      return (
        <div
          style={{ filter: `grayscale(${grayscale})` }}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
        >
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}
