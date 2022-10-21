import * as React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState,useEffect} from 'react';
import '../styles/TaskModal.css';
import {ThemeProvider } from '@mui/material/styles';
import {headerTheme} from '../styles/Themes';
import TextField from '@mui/material/TextField';
import { withTheme } from '@emotion/react';
import { purple } from '@mui/material/colors';
import './TaskModal.css'
import { inputLabelClasses } from "@mui/material/InputLabel";
import DatePicker from 'react-date-picker';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useJsonQuery } from '../utilities/firebase';
import '../index.css';
import {user_list} from '../utilities/userList';


import { setData,getUserInfo,useAuthState } from '../utilities/firebase';
import { display } from '@mui/system';

const style = {

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px"

};
const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    height: '90vw',
    paddingTop: '3%',
    paddingBottom: '3%',
    bgcolor: 'background.paper',
    border: '2px solid #2E6171',
    boxShadow: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "25px",
    display: 'grid'
};
  
const textFieldStyle={width:'auto',color:"#556F7A",padding:"5%", fontFamily: 'Ubuntu'}
const saveStyle = {color:"white", backgroundColor: "orchid", fontFamily: 'Ubuntu',
'&:hover': {
    color: 'white',
    backgroundColor: '#B79FAD',
  },
  '&:active': {
    color: 'white',
    backgroundColor: '#D4AFCD',
  },
    width:'auto'}
const TaskModal = ({show, setShow, editingCard, setEditingCard, data}) =>{
    useEffect(() => {
        console.log(editingCard);
        if (editingCard) {
            console.log("Ok new editing card!");
            setDate(reverseFormatDate(data.tasks[editingCard].due));
            setTitle(data.tasks[editingCard].title);
            setAssignedTo(data.tasks[editingCard].assigned_to);
        }
      }, [editingCard, show])
    
    //pushes new task json to database
    const Push = (date, title, assignedTo, assignedFrom) => {
        const check = editingCard ? data.tasks[editingCard].checked : false;
        const id = editingCard ? editingCard : Date.now();

        setData(`/tasks/${id}`, {
            id: id,
            title: title,
            due : formatDate(date), 
            checked: check,
            assigned_to: assignedTo,
            assigned_from: "you"
        }).catch(alert);
        setDate(new Date())
        handleClose()
    };

    // Takes in month/day and turns back into date object
    const reverseFormatDate=(dueString)=>{
        console.log(dueString);
        const monthDay = dueString.split("/");
        console.log(monthDay);
        console.log("Month");
        console.log(parseInt(monthDay[0])-1);
        console.log(parseInt(monthDay[1]));
        return new Date(2022, parseInt(monthDay[0])-1, parseInt(monthDay[1]));
    }

    const [title, setTitle] = useState(editingCard ? data.tasks[editingCard].title : "");
    const [date, setDate] = useState(editingCard ? reverseFormatDate(data.tasks[editingCard].due) : new Date());
    // const [assignedTo, setAssignedTo] = useState(editingCard ? data.tasks[editingCard].assigned_to : "");
    const [assignedTo, setAssignedTo] = useState("");
    const [user] = useAuthState();
    const [user_list, user_list_isLoading, user_list_error] = useJsonQuery('https://fast-woodland-19078.herokuapp.com/allUsers');
    if (user_list_error) return <h1>Error: {`${user_list_error}`}</h1>;
    if (user_list_isLoading) return <h1>Loading user data...</h1>;
    if (!user_list) return <h1>No user data found</h1>;
    let assigned_by;
        
    const handleClose = () => setShow(false);
    const handleOpen = () => {
        //get firebase user info
        if (user){
         assigned_by = getUserInfo();   
        }
        setShow(true);
        console.log(assigned_by);
    };


    //const saveValues = () => {
        // add straight to database
    //    const check = false;
    //    setTasks([...tasks, {title, due, check}]);
    //}

    const styles = {
        floatingLabelFocusStyle: {
            color: "black"
        }
    }
    const formatDate=(date)=> {  
        console.log(date);
        console.log(date.getMonth());
        console.log(date.getDay());
        const month = date.getMonth()+1;
        const day = date.getDate();
        const returnDate = month.toString() + "/" + day.toString(); 
        console.log(returnDate);
        setDate(date);
        return returnDate;
    }

    const addTask = () => {
        handleOpen();
        setEditingCard(null);
        setDate(new Date());
        setTitle("");
        setAssignedTo("");
    }
    

    
    
    return (
        <ThemeProvider theme={headerTheme}>
            <div className="task-modal">
                <Button sx = {{fontFamily: 'Ubuntu', color: "#556F7A"}} size="small" onClick={() => addTask()}  variant='contained'>Add Task</Button>
                    <Modal
                    open={show}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={style}
                    // hideBackdrop = "true"
                    >
                        <FormControl fullWidth>
                        <Box sx={boxStyle}>
                        <div className="task-assignment">
                            <TextField value={title} sx={textFieldStyle} id="standard-basic" label="Task" variant="standard" defaultValue="" onChange={(event) => setTitle(event.target.value)} InputLabelProps ={{sx: {
                                color: "#2E6171", [`&.${inputLabelClasses.shrink}`]: {
                                    color: "#2E6171"
                                }
                            }}}/>
                            <div className="task-assignment">
                                <InputLabel sx={textFieldStyle} id="demo-simple-select-label" InputLabelProps ={{sx: {
                                    color: "#2E6171", [`&.${inputLabelClasses.shrink}`]: {
                                        color: "#2E6171"
                                    }
                                }}}>Assign to</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={assignedTo}
                                    label="Assign To"
                                    onChange ={(event) => setAssignedTo(event.target.value)}>
                                    {
                                        Object.values(user_list.users).map((user, i) => (
                                            <MenuItem key={user.uid} value={user.displayName.split(" ")[0]}> {user.displayName.split(" ")[0]}</MenuItem>
                                        ))
                                            
                                    }
                                

                                </Select>
                            </div>
                        </div>
                        <label className="icon">
                            <DatePicker onChange={(value) => {formatDate(value)}} value={date} />
                        </label>
                        
                        <Button size="small" sx={saveStyle} onClick={() => Push(date, title, assignedTo)}>Save</Button>
                        </Box>
                        </FormControl>
                    </Modal>
            </div>
        </ThemeProvider>
    );
}
export default TaskModal;