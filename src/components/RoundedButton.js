import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import {Touchable} from "react-native-web";

export const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 125,
    ...props
}) => {
    return (
        <TouchableOpacity style={[styles(size).radius, style]}>
            <Text
                style={[styles(size).text, textStyle]}
                onPress={props.onPress}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = (size) => StyleSheet.create({
    radius: {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        backgroundColor: 'rgba(1, 1, 1, 0.1)'
    },
    text: {
        color: '#fff',
        fontSize: size / 3
    }

})