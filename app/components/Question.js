import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Question(props) {
    return (
        <View>{props.quiz.question}</View>
    );
}