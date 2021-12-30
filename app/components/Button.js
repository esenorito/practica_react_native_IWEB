import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Actionbar(props) {
    return (
        <View>
            <TouchableHighlight
                onPress={() => {
                    if (props.text == "Submit") {
                        props.computeScore();
                    } else {
                        props.changeQuiz(props.text);
                    }
                }}
                disabled={props.disabled}
            >{props.text}</TouchableHighlight>
        </View>
    );

}