import { useState } from "react";
import { Header } from "./components/Header";
import { Dicerolling } from "./components/Dicerolling";
import { Board } from "./components/Board";

export const App = () => {
  const [loading, setLoading] = useState();

  return (
      <div>
          <Header />
      <Dicerolling />
      <Board />
    </div>
  );
};
