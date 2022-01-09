import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
export default function Actionbar(props) {
    return (
        <View style={styles.ButtonElements}>
            <Button
                style={styles.ButtonStyle}
                text={props.textos[0]}
                changeQuiz={props.changeQuiz}
                disabled={props.mapButtonsDisabled.get(props.textos[0])}
            />
            <Button text={props.textos[1]}
                style={styles.ButtonStyle}
                changeQuiz={props.changeQuiz}
                disabled={props.mapButtonsDisabled.get(props.textos[1])}
            />
            <Button
                text={props.textos[2]}
                style={styles.ButtonStyle}
                changeQuiz={props.changeQuiz}
                disabled={props.mapButtonsDisabled.get(props.textos[2])}
                computeScore={props.computeScore}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    h1Tag: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
    },
    ButtonElements: {
        // flex: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    ButtonStyle: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        backgroundColor: '#7FFFD4'
    }

});
