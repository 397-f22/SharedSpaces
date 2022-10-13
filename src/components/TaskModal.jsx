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

const style = {

    display: "flex",
    alignItems: "center",
    justifyContent: "center",


};
const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const textFieldStyle={width:"30%",fontColor:"common.white",padding:"17px"}
const saveStyle = {color:"white", backgroundColor: "purple",
'&:hover': {
    color: 'white',
    backgroundColor: 'plum',
  }}
const TaskModal = ({tasks, setTasks}) =>{
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [due, setDue] = useState("");
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const saveValues = () => {
        const check = false;
        setTasks([...tasks, {title, due, check}]);
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
                        <Box sx={boxStyle}>
                        <TextField sx={textFieldStyle} id="standard-basic" label="Task" variant="standard" defaultValue="" onChange={(event) => setTitle(event.target.value)}/>
                        <TextField sx={textFieldStyle} id="standard-basic" label="Due Date" variant="standard" defaultValue="" onChange={(event) => setDue(event.target.value)}/>
                        <Button size="small" sx={saveStyle} onClick={() => saveValues()}>Save</Button>
                        </Box>
                    </Modal>
            </div>
        </ThemeProvider>
    );
}
export default TaskModal;