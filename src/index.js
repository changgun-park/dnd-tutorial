import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import { observe, moveKnight, canMoveKnight } from "./components/Game";

const root = document.getElementById("root");

observe((knightPosition) =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, root)
);
