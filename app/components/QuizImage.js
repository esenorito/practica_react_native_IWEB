import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';

import error_image_not_found from "../../assets/error_image_not_found.jpg";

export default function Author() {
    return (
        <View>{

            // TODO: Revisar si el componente Image está bien, sobre todo, la parte de source="".

            <Image style={{ height: "300" }}
                source={props.image ? props.image.url : require("../../assets/error_image_not_found.jpg")} />

        }</View>

    );

}