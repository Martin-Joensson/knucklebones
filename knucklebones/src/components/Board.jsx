import "./Board.css";

export const Board = () => {
  const columnArray = [null, null, null];

  return (
    <div className="board">
      <div className="player1 side">
        <div className="placeholder"></div>
        <div className="player1 side">
          <div className="column 1"></div>
          <div className="column 2"></div>
          <div className="column 3"></div>
        </div>
        <div className="info-holder">
          <div className="dice-tray">Dice-tray</div>
          <h2>Mr. Knuckles</h2>
        </div>
      </div>
      <div className="player2 side">
        <div className="info-holder">
          <h2>Player</h2>
          <div className="dice-tray">Dice-tray</div>
        </div>
        <div className="player2 side">
          <div className="column 1"></div>
          <div className="column 2"></div>
          <div className="column 3"></div>
          <div className="placeholder"></div>
        </div>
      </div>
    </div>
  );
};
