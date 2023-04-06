import React from "react";
import paulseIcon from "../images/pattern-divider-mobile.svg";
import diceIcon from '../images/icon-dice.svg'


const Homepage = (props) => {
  return (
    <div className="advice-container">
      <p className="id-number">ADVICE #{props.newAdviceData.slip.id}</p>
      <p className="advice">"{props.newAdviceData.slip.advice}"</p>
      <img className="pause" src={paulseIcon} alt="" />
      <div className="dice-container">
      <img className="dice" src={diceIcon} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
