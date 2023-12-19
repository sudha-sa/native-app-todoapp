import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, FlatList, } from 'react-native';
import { Avatar } from 'react-native-paper';

const dummyData = [{
  id: '01',
  title: 'Wash Car',
},
{
  id: '02',
  title: 'Read a Book',
},
];

console.log(Date.now().toString())

const TodoScreen = () => {

  //init local state
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const [updatedTodoList, setUpdatedTodoList] = useState([])

//handle add Todo
const handleAddTodo =()=>{
setTodoList([...todoList, {id: Date.now().toString(), title: todo}])
setTodo('')
}

//handle delete todo
const handleDeleteTodo =(id) =>{
 const updatedTodoList = todoList.filter((todo)=> todo.id !== id)

 setTodoList(updatedTodoList)
setTodo('')
}

  //Render Todo
  const renderTodos = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor: 'blue',
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 12,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
      }}>

        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '800' }}>{item.title}</Text>
        <Avatar.Icon size={30} icon='pencil' iconColor='white' />
        {/* <Button icon="camera">
  Press me
</Button> */}
        <Avatar.Icon size={30} icon='trash-can' iconColor='white' onPress={()=>handleDeleteTodo(item.id)}/>

      </View>
    )
  }

  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text style={{ backgroundColor: 'skyblue', fontSize: 20, alignItems: 'center' }}>MY TODO</Text>

      <TextInput
        style={{
          borderWidth: 2,
          borderColor: 'blue',
          borderRadius: 6,
          paddingVertical: 6,
          paddingHorizontal: 16
        }}
        placeholder='Add a task'
        value={todo}
        onChange={(userText) => setTodo(userText)}
      />

      <TouchableOpacity
        style={{ backgroundColor: '#000', borderRadius: 6, paddingVertical: 12, marginTop: 34, alignItems: 'center' }}
      onPress={()=>handleAddTodo()}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Add</Text>
      </TouchableOpacity>

      {/* for render */}
      <FlatList data={todoList} renderItem={renderTodos} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default TodoScreen;
