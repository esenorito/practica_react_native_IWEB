import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Actionbar from './Actionbar';
import Author from './Author';
import QuizImage from './QuizImage';
import Question from './Question';
import Answer from './Answer';
import { quizzes } from "../../assets/mock-data";
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     NavLink
//   } from "react-router-dom";
// import error_image_not_found from "./images/error_image_not_found.jpg"


export default function Quiz(props) {
    var mapButtonsDisabledInit = new Map();
    mapButtonsDisabledInit.set("Anterior", true);
    mapButtonsDisabledInit.set("Siguiente", false);
    mapButtonsDisabledInit.set("Submit", false);

    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [quizzes, setQuizzes] = useState([...quizzes]);
    const [mapButtonsDisabled, setMapButtonsDisabled] = useState(mapButtonsDisabledInit);
    const [answers, setAnswers] = useState(new Array(quizzes.length).fill(""));


    // TODO: Cambiar h1 y h3 por Text. Buscar el style correspondiente para
    // mostrar cada uno con su tamaño correspondiente.

    if (quizzes.length == 0) {
        return (
            <View>
                <h3>FATAL ERROR!! El array de quizzes está vacío.</h3>
            </View>
        )
    }

    const quiz = quizzes[currentQuiz]

    if (finished) {
        return (
            <h1>El Score del juego es: {score}</h1>
        )
    }

    return (
        <View>
            <nav>
                <li><NavLink to='quiz'>Quiz</NavLink></li>
                <li><NavLink to='tictactoe'>TicTacToe</NavLink></li>
            </nav>
            <Question quiz={quiz} />
            <QuizImage image={quiz.attachment} />
            <Answer answer={answers[currentQuiz]} changeAnswer={this.changeAnswer} />
            <Author author={quiz.author} />
            <Actionbar textos={["Anterior", "Siguiente", "Submit"]}
                changeQuiz={this.changeQuiz}
                mapButtonsDisabled={mapButtonsDisabled}
                computeScore={this.computeScore} />
        </View>

    );


    function changeQuiz(keyword) {

        var nuevoQuiz;

        switch (keyword) {
            case "Anterior":
                nuevoQuiz = currentQuiz - 1;
                break;
            case "Siguiente":
                nuevoQuiz = currentQuiz + 1;
                break;
        }

        var newMapButtonsDisabled = new Map();
        newMapButtonsDisabled.set('Anterior', nuevoQuiz == 0);
        newMapButtonsDisabled.set('Siguiente', nuevoQuiz == quizzes.length - 1);
        newMapButtonsDisabled.set('Submit', false);

        this.setState({ currentQuiz: nuevoQuiz, mapButtonsDisabled: newMapButtonsDisabled });
    }

    function changeAnswer(answer) {
        const currentQuiz = currentQuiz;
        var nuevasSoluciones = JSON.parse(JSON.stringify(answers));
        nuevasSoluciones[currentQuiz] = answer;

        this.setState({ answers: nuevasSoluciones });
    }

    function computeScore() {
        const newFinished = true;
        var newScore = 0;
        var answers = JSON.parse(JSON.stringify(answers));

        for (let i = 0; i < answers.length; i++) {
            if (answers[i] == quizzes[i].answer) {
                newScore = newScore + 1;
            }
        }

        this.setState({
            finished: newFinished,
            score: newScore
        });
    }
}



// TODO: Añadir estilos en general a la práctica
// TODO: Configurar la petición al servidor para conseguir los Quizzes
// TODO: Configurar la página de Home y los links a las distintas
// páginas web de la aplicación (Routers)
// TODO: Revisar los ficheros en los que aparezca el tag "nav" y "li"