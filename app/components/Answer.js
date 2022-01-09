import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Answer(props) {
    return (
        <View id={props.id}>
            <TextInput style={styles.input} type="text" value={props.answer}
                onChangeText={(text) => { handleChangeAnswer(text) }} ></TextInput>
        </View>
    );
    function handleChangeAnswer(text) {
        // this.setState({ answer: event.target.value });
        props.changeAnswer(text);
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});