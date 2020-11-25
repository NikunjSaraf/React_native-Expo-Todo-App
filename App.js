import React, { useState } from 'react'
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Header from './components/Header'
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

const App = () => {

  const [todo, setTodo] = useState([
    {text:'Complete React Native',key:'1'},
    {text:'Buy me a coffee',key:'2'},
    {text:'Create an App',key:'3'},
    {text:'Play song on spotify',key:'4'},
  ])

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.key !== key)
    })
  }

  const submitHandler = (text) => {
    if (text.length>0) {
      setTodo((prevTodo) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodo
        ]
      })
    } else {
      Alert.alert('OOPS', 'Please Add Something To Todo',[
        { text: 'Understood' }
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}> 
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}  />
            )}
          />
        </View>
      </View>
  </View>
   
    </TouchableWithoutFeedback>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 50,
    flex:1
  },
  list: {
    flex:1,
    marginTop:20
  }
  
})
