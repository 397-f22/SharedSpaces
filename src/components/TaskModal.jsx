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

const style = {

    display: "flex",
    alignItems: "center",
    justifyContent: "center",


}
const boxStyle={ flexGrow: 1,height:"128px",width:"256px",bgcolor:"grey.700",display:"flex",flexDirection:"column",justifyContent:"center"
,alignItems:"center"
};
const textFieldStyle={width:"50%",color:"common.white"}

const TaskModal = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    
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
                    >
                        <Box sx={boxStyle}>
                        <TextField sx={textFieldStyle} id="standard-basic" label="Standard" variant="standard" defaultValue="chore name"/>
                        <TextField sx={textFieldStyle} id="standard-basic" label="Standard" variant="standard" defaultValue="due date"/>

                        </Box>
                    </Modal>
            </div>
        </ThemeProvider>
    );
}
export default TaskModal;