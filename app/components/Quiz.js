import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Actionbar from './Actionbar';
import Author from './Author';
import QuizImage from './QuizImage';
import Question from './Question';
import Answer from './Answer';
import { quizzesIn } from "../../assets/mock-data";
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     NavLink
//   } from "react-router-dom";
// import error_image_not_found from "./images/error_image_not_found.jpg"
const URL = "https://core.dit.upm.es/api/quizzes/random10wa?token=a83c791530fdc9bdc93a"

export default function Quiz(props) {
    var mapButtonsDisabledInit = new Map();
    mapButtonsDisabledInit.set("Anterior", true);
    mapButtonsDisabledInit.set("Siguiente", false);
    mapButtonsDisabledInit.set("Submit", false);

    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [quizzes, setQuizzes] = useState([...quizzesIn]);
    const [mapButtonsDisabled, setMapButtonsDisabled] = useState(mapButtonsDisabledInit);
    const [answers, setAnswers] = useState(new Array(quizzes.length).fill(""));

    // async function componentDidMount() {
    //     let response = await fetch(URL);
    //     let quizzesServidor = await response.json();
    //     setQuizzes(quizzesServidor);
    // }

    useEffect(async () => {
        let response = await fetch(URL);
        let quizzesServidor = await response.json();
        setQuizzes(quizzesServidor);
    }, []);

    if (quizzes.length == 0) {
        return (
            <View>
                <Text>FATAL ERROR!! El array de quizzes está vacío.</Text>
            </View>
        )
    }

    const quiz = quizzes[currentQuiz]

    if (finished) {
        return (
            <View>
                <Text>El Score del juego es: {score}</Text>
            </View>
        )
    }

    return (

        <View>
            {/* <nav>
                <li><NavLink to='quiz'>Quiz</NavLink></li>
                <li><NavLink to='tictactoe'>TicTacToe</NavLink></li>
            </nav> */}
            <Text style={styles.h1Tag}>Bienvenido al juego de preguntas.</Text>
            <Question quiz={quiz} />
            <QuizImage image={quiz.attachment} />
            <Answer answer={answers[currentQuiz]} changeAnswer={changeAnswer} />
            <Author style={styles.AuthorStyle} author={quiz.author} />
            <Actionbar
                textos={["Anterior", "Siguiente", "Submit"]}
                changeQuiz={changeQuiz}
                mapButtonsDisabled={mapButtonsDisabled}
                computeScore={computeScore} />
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
            default:
                return;
        }

        var newMapButtonsDisabled = new Map();
        newMapButtonsDisabled.set('Anterior', nuevoQuiz == 0);
        newMapButtonsDisabled.set('Siguiente', nuevoQuiz == quizzes.length - 1);
        newMapButtonsDisabled.set('Submit', false);

        setCurrentQuiz(nuevoQuiz);
        setMapButtonsDisabled(newMapButtonsDisabled);

    }

    function changeAnswer(answer) {
        var nuevasSoluciones = JSON.parse(JSON.stringify(answers));
        nuevasSoluciones[currentQuiz] = answer;
        setAnswers(nuevasSoluciones);
    }

    function computeScore() {
        const newFinished = true;
        var newScore = 0;
        var copiaAnswers = JSON.parse(JSON.stringify(answers));

        // var copiaAnswers = [];

        for (let i = 0; i < copiaAnswers.length; i++) {
            if (copiaAnswers[i] == quizzes[i].answer) {
                newScore = newScore + 1;
            }
        }
        setFinished(newFinished);
        setScore(newScore);
    }
}

const styles = StyleSheet.create({
    h1Tag: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
    },
    ButtonElements: {
        flex: 1,
        flexDirection: 'row',
    },
    AuthorStyle: {
        alignSelf: 'flex-end',
    }

});

// TODO: Añadir estilos en general a la práctica
// TODO: Configurar la página de Home y los links a las distintas
// páginas web de la aplicación (Routers)
// TODO: Revisar los ficheros en los que aparezca el tag "nav" y "li"