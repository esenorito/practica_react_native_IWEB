import { StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import Quiz from "./Quiz";
import Tictactoe from './Tictactoe';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   NavLink
// } from "react-router-dom";
// import { AppRegistry } from 'react-native-web';

export default function App(props) {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, margin: 30 }}>
        {/* <nav>
        <li><NavLink to='quiz'> Quiz </NavLink></li>
        <li><NavLink to='tictactoe'> TicTacToe </NavLink></li>
      </nav> */}

        <Text>Selecciona un minijuego</Text>
        <Image style={styles.imgSize} source={require("../../assets/imagen_home.jpg")} />
        {/* <nav className="nav nav-tabs" role="tablist">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tictactoe">TicTacToe</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
        </nav> */}

        {/* 
        <Text>Hola</Text>
        <Quiz/>
        <Tictactoe/> */}
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  imgSize: {
    width: 500
    // resizeMode: 'stretch',
  },
});
