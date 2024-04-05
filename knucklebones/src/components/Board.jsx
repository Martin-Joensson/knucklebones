import "./Board.css";

export const Board = () => {
  return (
    <div className="board">
      ColumnButton
      <div className="player1 side">
        <div className="colum1">
          <div className="die-slot row1"></div>
          <div className="die-slot row2"></div>
          <div className="die-slot row3"></div>
        </div>
        <div className="colum2">
          <div className="die-slot row1"></div>
          <div className="die-slot row2"></div>
          <div className="die-slot row3"></div>
        </div>
        <div className="colum3">
          <div className="die-slot row1"></div>
          <div className="die-slot row2"></div>
          <div className="die-slot row3"></div>
        </div>
      </div>
      <div className="player2 side">
        <div className="colum1">
          <div className="die-slot row1"></div>
          <div className="die-slot row2"></div>
          <div className="die-slot row3"></div>
        </div>
        <div className="colum2">
          <div className="die-slot row1"></div>
          <div className="die-slot row2"></div>
          <div className="die-slot row3"></div>
        </div>
        <div className="colum3">
          <div className="die-slot row1"></div>
          <div className="die-slot row2"></div>
          <div className="die-slot row3"></div>
        </div>
      </div>
    </div>
  );
};
