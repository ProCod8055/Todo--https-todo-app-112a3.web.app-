import React , {useState,useEffect} from 'react';
import db from './Firebase'
import './App.css';
import Todo from './Todo'
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import firebase from 'firebase';

function App() {
  const sum=(1+1);
  const[todos,setTodos]= useState([])
  const[input,setInput]=useState('')
 
useEffect(() => {
 db.collection("Todo").orderBy('timestamp','desc').onSnapshot(snapshot => {
   setTodos(snapshot.docs.map( doc =>
   ({ 
    id:doc.id,
    todo:doc.data().todo})
   ))})
   
 }, []);


 const AddTodo=(value)=>{
//setTodos([...todos ,input]);
setInput('');// clear up the input after hitting enter or button
value.preventDefault();// stop the refresh

db.collection("Todo").add({

  todo:input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
})

 }

  return (
    <div className="App">
     <h1>  Todo App  </h1>
     
     <form>
 
     <FormControl>
         <InputLabel >ADD TODOs here</InputLabel>
         <Input value={input}
          onChange={(value) => setInput(value.target.value)} />
      </FormControl>

      <Button disabled={!input} type='submit' onClick={AddTodo} variant="contained" color="primary">
          Add Todo
      </Button>

     </form>
    
    
     
       {todos.map((todo) => (
       <Todo todo={todo}/>
      // <li>{todo}</li>
       ))}

    
    </div>
  );
}

export default App;
