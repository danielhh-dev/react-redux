import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { getCharacters } from "../redux/actions";

class CardsClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <div>
        <h1>Card Class</h1>
        <div>
          {this.props.characters.map((cha) => (
            <Card id={cha.id} name={cha.name} key={cha.id} />
          ))}
        </div>
        {console.log(this.props.characters)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => {
      dispatch(getCharacters());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsClass);
