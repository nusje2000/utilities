import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {Camera, useCameraDevices} from "react-native-vision-camera"

const App = () => {
    Camera.getAvailableCameraDevices().then(console.log);
    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back

    if (device == null) {
        return <Text>Loading Camera</Text>
    }

    return <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
    />

}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
})

export default App
