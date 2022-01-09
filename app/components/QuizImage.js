import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';

import error_image_not_found from "../../assets/error_image_not_found.jpg";

export default function Author(props) {
    const ERROR_IMAGE = Image.resolveAssetSource(error_image_not_found).uri;
    return (
        <View>{
            <Image style={{ height: 300 }}
                // uri={props.image ? props.image.url : require("../../assets/error_image_not_found.jpg")} 
                // source={{ uri: props.image.url }}
                source={{ uri: props.image ? props.image.url : ERROR_IMAGE }}
            />
        }</View>

    );

}