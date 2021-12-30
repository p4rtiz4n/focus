import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from "react-native"
import {RoundedButton} from "../../components/RoundedButton";
import {font, spacing} from "../../utils/Sizes";
import {colors} from "../../utils/Colors";

export const Focus = ({addSubject}) => {

    const [currInput, setCurrInput] = useState(null)

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What would you like to focus on ?</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChange={({nativeEvent}) => {
                            setCurrInput(nativeEvent.text)
                        }}
                        onSubmitEditing={({nativeEvent}) => {
                            addSubject(nativeEvent.text)
                        }}
                    />
                    <RoundedButton
                        title="+"
                        size={48}
                        onPress={() => {
                            addSubject(currInput)
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        flex: 0.5,
        padding: spacing.md,
        justifyContent: 'center'
    },
    title: {
        color: colors.textAccent,
        fontSize: font.lg,
        fontWeight: 'bold',
        padding: spacing.sm,
        alignItems: 'flex-start'
    },
    inputContainer: {
        flexDirection: 'row',
        padding: spacing.sm
    },
    textInput: {
        flex: 1,
        backgroundColor: colors.text,
        fontSize: font.md,
        padding: spacing.sm,
        borderRadius: 4,
        marginRight: spacing.md
    }
})
