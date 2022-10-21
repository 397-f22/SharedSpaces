import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../styles/TaskCard.css';
import {useState} from 'react';
import {ThemeProvider } from '@mui/material/styles';
import {headerTheme} from '../styles/Themes';
import Button from '@mui/material/Button';
import { setData, useDbUpdate, removeData } from '../utilities/firebase';
import '../index.css';
import EditIcon from '@mui/icons-material/Edit';

const TaskCard = ({due, id, title, checked, assignedTo, show, setShow, setEditingCard}) =>{
    // const [tasks, setTasks] = useState([]);
    //console.log(id);
    const [update, result] = useDbUpdate(`/tasks/${id}`);
    // const [checked, setChecked] = useState(false);
    const remove=() =>{
        // remove directly from db rather than using state
        removeData(`/tasks/${id}`);
    }
    const changeChecked = ()=>{
        setData(`/tasks/${id}`, {
            id: id,
            title: title,
            due : due, 
            checked: !checked,
            assigned_to: assignedTo,
            assigned_from: "you",
        }).catch(alert);
    }
    const buttonStyleDone = {color:"whitesmoke", backgroundColor: "#556F7A", fontFamily: 'Ubuntu',
        '&:hover': {
            color: '#556F7A',
            backgroundColor: 'whitesmoke',
        },
        '&:active': {
            color: 'whitesmoke',
            backgroundColor: '#798086',
    }}
    const buttonStyleNotDone = {color:"#556F7A", backgroundColor: "whitesmoke", fontFamily: 'Ubuntu',
        '&:hover': {
            color: 'whitesmoke',
            backgroundColor: '#556F7A',
        },
        '&:active': {
            color: 'whitesmoke',
            backgroundColor: '#798086',
    }}
    function buttonSwitch(checked){
        if (checked){
            return buttonStyleDone
        } else{
            return buttonStyleNotDone
        }
    }

    return  (
        <div className="card-container">
            <Card variant="outlined" className={checked ? "cardChecked" : "cardUnchecked"} sx={{width:1, borderRadius: "15px", minHeight: '20%', maxHeight: '20%', margin: '0.2vw', fontFamily: 'Ubuntu'}}>
                <CardContent className={checked ? "cardChecked" : "cardUnchecked"}>
                    <div className="card-content-checkbox">
                        <div className='label-container'>
                            <input type="checkbox" id="checkbox" name="vehicle1" checked={checked} onChange={() => changeChecked()}></input>
                            <label className="assign"><Typography sx={{ fontSize: 22, flexGrow: 1, fontFamily: 'Ubuntu' }} className={checked ? "done1" : "not-done1"} gutterBottom>
                                    {assignedTo}
                                </Typography></label>
                        </div>
                        <ThemeProvider theme={headerTheme}>
                            <div className='task-wrapper'>
                                <div className='titleEdit'>
                                <Typography variant="h5" sx = {{flexGrow: 1, fontFamily: 'Ubuntu'}} component="div" className={checked ? "done1" : "not-done1"}>
                                    {title}
                                </Typography>
                                <EditIcon id="editButton" onClick={() => {setEditingCard(id); setShow(true)}} />
                                </div>
                                <Typography sx={{ fontSize: 16, flexGrow: 1, fontFamily: 'Ubuntu'}} gutterBottom className={checked ? "done2" : "not-done2"}>
                                    {due}
                                </Typography>
                            </div>
                            <Button sx={buttonSwitch(checked)} size="small" onClick={(evt) => remove()} variant='contained'>Remove</Button>
                        </ThemeProvider>
                    </div>
                </CardContent>
            </Card>
        </div>  
    ); 
}

export default TaskCard;