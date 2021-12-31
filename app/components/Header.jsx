import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(props) {
  return (
    <View>
      <Text style={styles.header}>Turn: {props.text}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 25,
    padding: 30
  }
});
