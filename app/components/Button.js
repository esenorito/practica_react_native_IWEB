import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Actionbar(props) {
    return (
        <View>
            <TouchableHighlight
                style={props.style}
                onPress={() => {
                    if (props.text == "Submit") {
                        props.computeScore();
                    } else {
                        props.changeQuiz(props.text);
                    }
                }}
                disabled={props.disabled}>
                <Text>{props.text}</Text>
            </TouchableHighlight>
        </View>
    );

}