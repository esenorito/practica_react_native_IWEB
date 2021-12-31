import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Answer(props) {
    return (
        // TODO: - Revisar cómo se comporta el código ahora con la modificación
        // y comprobar la compatibilidad del id en el componente View.
        // 
        // - Revisar el parámetro "type" del componente TextInput => según 
        // la documentación, debería funcionar bien.
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