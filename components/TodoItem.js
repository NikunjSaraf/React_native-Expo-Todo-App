import React from 'react'
import {  Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({item,pressHandler}) => {
    return (
        <TouchableOpacity onPress={() => {
            pressHandler(item.key)
            Alert.alert('Todo Deleted')
        }}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={20} color="#333" />
                <Text style={styles.itemList}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection:'row'
    },
    itemList: {
        marginLeft:10
    }
})
