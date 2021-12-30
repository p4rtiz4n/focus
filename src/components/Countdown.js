import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from "react-native"

import {font, spacing} from "../utils/Sizes";
import {colors} from "../utils/Colors";


const minToMill = (min) => 1000 * 60 * min
const formatTime = (time) => time < 10 ? `0${time}` : time

export const Countdown = ({
    minutes = 1,
    isPaused = false,
    onProgress,
}) => {

    const [mills, setMills] = useState(minToMill(minutes))
    const interval = React.useRef(null)
    const countDown = () => {
        setMills((time) => {
            if (time === 0) {
                // do something
                return time
            }
            return time - 1000
        })
    }

    useEffect(() => {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current)
            return
        }
        interval.current = setInterval(countDown, 1000)
        return () => clearInterval(interval.current)
    }, [isPaused])

    useEffect(() => {
        onProgress(1 - mills / minToMill(minutes))
    }, [mills])

    const mins = Math.floor(mills / 1000 / 60) % 60
    const secs = Math.floor(mills / 1000) % 60

    return (
        <Text style={styles.text}>{formatTime(mins)}:{formatTime(secs)}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: font.xxxxl,
        fontWeight: 'bold',
        color: colors.text,
        padding: spacing.lg,
        backgroundColor: 'rgba(1, 1, 1, 0.1)',
        borderRadius: spacing.md,
        overflow: 'hidden',
    }
})