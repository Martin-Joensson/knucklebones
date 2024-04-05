import { useState } from "react";
import { Dicerolling } from "./components/Dicerolling";
import { Board } from "./components/Board";

export const App = () => {
  const [loading, setLoading] = useState();

  return (
    <div>
      <Dicerolling />
      <Board />
    </div>
  );
};
