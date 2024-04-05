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
        return <FaDiceOne />;
      case 2:
        return <FaDiceTwo />;
      case 3:
        return <FaDiceThree />;
      case 4:
        return <FaDiceFour />;
      case 5:
        return <FaDiceFive />;
      case 6:
        return <FaDiceSix />;
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
