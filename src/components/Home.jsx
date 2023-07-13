import { View, Text, TextInput, StyleSheet, BackHandler, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Todos from './Todos';

const Home = () => {
    const [todo,setTodo]=useState()
    const [todos,setTodos]=useState([])
    
    const handleChange=(e)=>{
        setTodo(e)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setTodos([{id:Math.random(),value:todo},...todos])
        setTodo('')
    }
    const handleDelete=(id)=>{
       const updatedTodos=todos.filter((i)=>i.id!==id)
       setTodos([...updatedTodos])
    }
  return (
    <ImageBackground style={styles.container} source={require('../Assets/TodoBg.jpg')}>
      <Text style={styles.header}>ToDo App</Text>
      <View style={styles.InputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={todo}
        placeholder="Enter Todo"
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}><Text>Submit</Text></TouchableOpacity>
      </View>
      <Todos data={todos} handleDelete={handleDelete}/>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width:'100%'
      },
    input: {
      height: 30,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:5
    },
    InputContainer:{
        flexDirection:'column',
        alignItems: 'center',
    },
    header:{
        fontSize:30,
        fontWeight:700,
        color:'#000066'
    },
    submitBtn:{
        backgroundColor:'green',
        padding:3,
        borderRadius:3,
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: {
          height: 2,
          width: 2
        }
    }
  });
  
export default Home