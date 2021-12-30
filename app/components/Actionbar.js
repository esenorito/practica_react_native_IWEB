import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
export default function Actionbar(props) {
    return (
        <View>
            <Button
                text={props.textos[0]}
                changeQuiz={props.changeQuiz}
                disabled={props.mapButtonsDisabled.get(props.textos[0])}
            />
            <Button text={props.textos[1]}
                changeQuiz={props.changeQuiz}
                disabled={props.mapButtonsDisabled.get(props.textos[1])}
            />
            <Button
                text={props.textos[2]}
                changeQuiz={props.changeQuiz}
                disabled={props.mapButtonsDisabled.get(props.textos[2])}
                computeScore={props.computeScore}
            />
        </View>

    );
}