import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import React from 'react';
import default_user_image from '../../assets/default_user_image.png';

export default function Author(props) {
    // const DEFAULT_USER_IMAGE = Image.resolveAssetSource(default_user_image).uri;
    return (
        <View >
            <Text style={props.style}>{props.author ? props.author.username : "Author name is missing."}</Text>
            <Image style={{ height: 75, width: 75, alignSelf: 'flex-end' }} source={{ uri: (props.author && props.author.photo) ? props.author.photo.url : DEFAULT_USER_IMAGE }}></Image>
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
});