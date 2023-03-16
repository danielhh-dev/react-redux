import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Name:{this.props.name}</p>
        <p>ID:{this.props.id}</p>
      </div>
    );
  }
}

export default Card;
