import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

export const Header = () => {
  const rulesRef = useRef();

  const showRules = () => {
    rulesRef.current.classList.toggle("show-rules");
  };

  return (
    <header>
      <div className="title">
        <h1>Knucklebones</h1>
        <p>- a dice game</p>
      </div>
      <div>
        <button className="rule-button" onClick={showRules}>
          <FaBars />
        </button>
      </div>
      <div className="rules-container" ref={rulesRef}>
        <button className="close-rule-button rule-button" onClick={showRules}>
          <FaTimes />
        </button>
        <h2>Rules</h2>
        <p>Add dice to column. Get more points than your opponent.</p>
      </div>
    </header>
  );
};
