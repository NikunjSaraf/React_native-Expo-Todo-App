import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <SafeAreaView style={styles.header} >
            <Text style={styles.title}>My Todos</Text>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor:'coral'
    },
    title: {
        textAlign: 'center',
        color:'white',
        fontSize: 25,
        fontWeight:'bold'
    }
})
