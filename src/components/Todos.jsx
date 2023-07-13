import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Todos = ({ data,handleDelete }) => {
    const [completed,setCompleted]=useState([])
    const handleClick=(i)=>{
        setCompleted([{id:i.id,value:i.value},...completed])
        handleDelete(i.id)
    }
  return (
    <View style={styles.container}>
      <ScrollView >
        <View>
        {data?.map((i) => {
          return (
            <TouchableOpacity style={styles.todo} key={i.id} onPress={()=>handleClick(i)}>
              <View style={styles.todoVal}>
                <Text numberOfLines={1}>{i.value}</Text>
              </View>
              <TouchableOpacity onPress={()=>handleDelete(i.id)} style={styles.delete}>
                <Text>X</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
        </View>
        {completed && completed.length>0 && (
        <View style={styles.completedContainer}>
            <Text style={styles.completedHead}>Completed Todo's</Text>
        {completed?.map((i) => {
          return (
            <View style={styles.completedTodo} key={i.id}>
              <View style={styles.completedTodoVal}>
                <Text style={styles.completedText} numberOfLines={1}>{i.value}</Text>
              </View>
            </View>
          );
        })}
        </View>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  todo: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle:'dashed',
    alignItems: "center",
    margin: 10,
    flexDirection: "row",
    justifyContent:'space-between',
    shadowColor: '#52006A',
    padding:10,
    shadowOpacity: 0.9,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: 5
    }
  },
  completedTodo: {
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    margin: 10,
    justifyContent:'center',
    shadowColor: '#52006A',
    shadowOpacity: 0.9,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 3
    }
  },
  todoVal:{
    width:200,
  },
  completedTodoVal:{
    margin:10,
    width:200,
   alignItems:'center',
   justifyContent:'center'
  },
  completedContainer:{
    alignItems:'center',
    marginTop:10
  },
  completedText:{
    textDecorationLine:'line-through'
  },
  completedHead:{
    fontWeight:700,
    textDecorationLine:'underline'
  },
  delete:{
    backgroundColor:'red',
    padding:1,
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2
    },
    borderRadius:5
  }
});
export default Todos;
