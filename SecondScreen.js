import React, { useEffect, useLayoutEffect } from "react";
import {StyleSheet, View, Text, BackHandler} from 'react-native';

export default function SecondScreen({route,navigation}) {
    useEffect(() => {
        if (route.params?.message) {
            alert(route.params.message);
        }
        BackHandler.addEventListener('hardwareBackPress',close);
        return() => {
            BackHandler.removeEventListener('hardwareBackPress',close);
        }
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'f0f0f0'
            }
        })
    }, [])

    return (
        <View styles={style.container}>
            <Text>Second screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});