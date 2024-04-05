import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
} from "react-icons/fa";
import { DieObject } from "./DieObject";
import "./Dicerolling.css";

export const Dicerolling = (min, max) => {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const iconSet = (value) => {
    switch (value) {
      case 1:
        return <FaDiceOne className="dice"/>;
      case 2:
        return <FaDiceTwo className="dice" />;
      case 3:
        return <FaDiceThree className="dice" />;
      case 4:
        return <FaDiceFour className="dice" />;
      case 5:
        return <FaDiceFive className="dice" />;
      case 6:
        return <FaDiceSix className="dice" />;
    }
  };

  DieObject.value = randomNumber(1, 6);
    DieObject.icon = iconSet(DieObject.value);

  return (
    <div>
      Dicerolling
      <div>
        <FaDiceOne />
        <FaDiceTwo />
        <FaDiceThree />
        <FaDiceFour />
        <FaDiceFive />
        <FaDiceSix />
      </div>
      <div>{DieObject.value}</div>
      <div className={DieObject.player}>{DieObject.icon}</div>
    </div>
  );
};
