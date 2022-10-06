import * as React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from 'react';

const TaskModal = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    return (
    <div>
        <Button size="small" onClick={handleOpen}  variant='contained'>Add Task</Button>
            <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={{ flexGrow: 1 }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
         </Modal>
    </div>
    );
}
export default TaskModal;