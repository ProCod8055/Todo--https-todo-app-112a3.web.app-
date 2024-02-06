import React,{useState} from 'react'
import {List,ListItem,ListItemText,ListItemAvatar,Modal,Button} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './Firebase'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {

  const classes = useStyles()
  const[open,setOpen]=useState(false);
  const[input,setInput]=useState('')


  const updateTodo=() => {
    db.collection("Todo").doc(props.todo.id).set({
    todo:input,
    },{merge:true});
     setOpen(false);
  }

    return (
        <>
<Modal  
   open={open}
   onClose={e =>setOpen(true)}
  >
 <div className={classes.paper} >
   <h1>MODAL</h1>
   <input  value={input}
    onChange={value => setInput(value.target.value)} />
   <Button onClick={updateTodo}>update</Button>
 </div>
</Modal>

           <List className="todo_list">
              
                <ListItem>
              <ListItemAvatar>
                 
                </ListItemAvatar> 
                <ListItemText
                    // primary="TODO"
                    // secondary={props.todo}

                        //OR
                    primary={props.todo.todo}
                    secondary="do it"
  
                  />
                  <Button onClick={e =>setOpen(true)} >Edit</Button>
                   <DeleteForeverIcon  onClick={() => db.collection('Todo').doc(props.todo.id).delete() }/>
                </ListItem>
               
              
            </List>
</>            
    )
}

export default Todo
