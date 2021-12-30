import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from "react-native"
import {font, spacing} from "../../utils/Sizes";
import {colors} from "../../utils/Colors";
import {Countdown} from "../../components/Countdown";
import {RoundedButton} from "../../components/RoundedButton";
import {ProgressBar} from "react-native-paper";

export const Timer = ({focusSubject}) => {

    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(0)

    const onProgress = (progress) => setProgress(progress)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Focusing on:</Text>
            <Text style={styles.task}>{focusSubject}</Text>
            <ProgressBar
                style={styles.progressBar}
                progress={progress}
                color={colors.textAccent}
            />
            <Countdown
                style={styles.countdown}
                isPaused={!isStarted}
                onProgress={onProgress}
            />
            <View style={styles.buttonWrapper}>
                {
                    isStarted
                        ? <RoundedButton title="stop" onPress={() => setIsStarted(false)}/>
                        : <RoundedButton title="start" onPress={() => setIsStarted(true)}/>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        padding: spacing.md
    },
    title: {
        color: colors.textAccent,
        fontSize: font.lg
    },
    progressBar: {
        marginBottom: spacing.md,
    },
    task: {
        color: colors.text,
        fontSize: font.xxxl,
        paddingTop: spacing.sm,
    },
    countdown: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
