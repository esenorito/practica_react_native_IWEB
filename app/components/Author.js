import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
export default function Author(props) {
    return (
        <View>
            <Text>{props.author.username}</Text>
        </View>

    );
}