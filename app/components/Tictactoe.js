import { View, Text } from 'react-native';

import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Reset from './Reset.jsx';
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     NavLink
//   } from "react-router-dom";

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

export default function Tictactoe(props) {
  const [turn, setTurn] = useState(PLAYERX);
  const [moves, setMoves] = useState(0);
  const [values, setValues] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ]);

  // Incluir el  useEffect() que hay en el código de ejemplo de la práctica
  // de Tictactoe para React Native??


  function appClick(rowNumber, columnNumber) {
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turn === PLAYERX ? 'X' : '0';
    valuesCopy[rowNumber][columnNumber] = newMovement;
    setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
    setValues(valuesCopy);
    setMoves(moves + 1);
  }

  function resetClick() {
    setTurn(PLAYERX);
    setMoves(0);
    setValues([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ]);
  }

  let text = "Turn of " + turn;

  return (
    <View style={{ flex: 1, margin: 30 }}>
      {/* <nav>
        <li><NavLink to='quiz'>Quiz</NavLink></li>
        <li><NavLink to='tictactoe'>TicTacToe</NavLink></li>
      </nav> */}
      <Header text={text} />
      <Board values={values} appClick={appClick} />
      <Text style={{ fontSize: 25, padding: 30, textAlign: 'center' }}>
        Number of moves: {moves}
      </Text>
      <Reset resetClick={resetClick}></Reset>
    </View>
  );


}