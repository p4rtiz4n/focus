import {StatusBar} from 'expo-status-bar';
import React, {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import {StyleSheet, View, Text} from 'react-native';
import {Focus} from "./src/features/focus/Focus";
import {Timer} from "./src/features/timer/Timer";
import {colors} from "./src/utils/Colors";

export default function App() {
    const [focusSubject, setFocusedSubject] = useState('');

    return (
        <LinearGradient
            colors={[colors.bgStart, colors.bgEnd]}
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 1.0}}
            style={styles.container}
        >
            <StatusBar style="auto"/>
            {
                focusSubject
                    ? <Timer focusSubject={focusSubject}/>
                    : <Focus addSubject={setFocusedSubject}/>
            }
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
