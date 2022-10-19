import * as React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from 'react';
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

import { setData,getUserInfo } from '../utilities/firebase';


const style = {

    display: "flex",
    alignItems: "center",
    justifyContent: "center"

};
const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: 'auto',
    paddingTop: '3%',
    paddingBottom: '3%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
};
  
const textFieldStyle={width:"80%",color:"common.black",padding:"5%"}
const saveStyle = {color:"white", backgroundColor: "purple",
'&:hover': {
    color: 'white',
    backgroundColor: 'plum',
  }}
const TaskModal = () =>{

    //pushes new task json to database
    const Push = (date, title, assignedTo, assignedFrom) => {
        const check = false;
        const id = Date.now()

        setData(`/tasks/${id}`, {
            id: id,
            title: title,
            due : date, 
            checked: false,
            assigned_to: assignedTo,
            assigned_from: "you"
        }).catch(alert);
    };

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [due, setDue] = useState("");
    const [date, setDate] = useState(new Date());
    const [assignedTo, setAssignedTo] = useState("");
    const handleClose = () => setShow(false);
    const handleOpen = () => {
        //get firebase user info
        getUserInfo();
        setShow(true)};


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
        setDue(returnDate);
        setDate(date);
    }

    

    
    
    return (
        <ThemeProvider theme={headerTheme}>
            <div className="task-modal">
                <Button size="small" onClick={handleOpen}  variant='contained'>Add Task</Button>
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
                        <TextField sx={textFieldStyle} id="standard-basic" label="Task" variant="standard" defaultValue="" onChange={(event) => setTitle(event.target.value)} InputLabelProps ={{sx: {
                            color: "purple", [`&.${inputLabelClasses.shrink}`]: {
                                color: "purple"
                            }
                        }}}/>
                        <TextField sx={textFieldStyle} id="standard-basic" label="Assign to" variant="standard" defaultValue="" onChange={(event) => setAssignedTo(event.target.value)} InputLabelProps ={{sx: {
                            color: "purple", [`&.${inputLabelClasses.shrink}`]: {
                                color: "purple"
                            }
                        }}}/>
                        </div>
                        {/* <TextField sx={textFieldStyle} id="standard-basic" label="Due Date" variant="standard" defaultValue="" onChange={(event) => setDue(event.target.value)}/> */}
                        <DatePicker onChange={(value) => {formatDate(value)}} value={date} />
                        <Button size="small" sx={saveStyle} onClick={() => Push(due, title, assignedTo)}>Save</Button>
                        </Box>
                        </FormControl>
                    </Modal>
            </div>
        </ThemeProvider>
    );
}
export default TaskModal;