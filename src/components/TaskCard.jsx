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

const TaskCard = ({due, id, title, checked, assignedTo}) =>{
    // const [tasks, setTasks] = useState([]);
    console.log(id);
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

    return  (
        <div className="card-container">
            <Card variant="outlined" className={checked ? "cardChecked" : "cardUnchecked"} sx={{width:1, borderRadius: "15px", height: '6vw', margin: '0.2vw'}}>
                <CardContent className={checked ? "cardChecked" : "cardUnchecked"}>
                    <div className="card-content-checkbox">
                        <div className='label-container'>
                            <input type="checkbox" id="checkbox" name="vehicle1" checked={checked} onChange={() => changeChecked()}></input>
                            <label className="assign"><Typography sx={{ fontSize: 22, flexGrow: 1 }} className={checked ? "done1" : "not-done1"} gutterBottom>
                                    {assignedTo}
                                </Typography></label>
                        </div>
                        <ThemeProvider theme={headerTheme}>
                            <div className='task-wrapper'>
                                <Typography variant="h5" sx = {{flexGrow: 1}} component="div" className={checked ? "done1" : "not-done1"}>
                                    {title}
                                </Typography>
                                <Typography sx={{ fontSize: 14, flexGrow: 1}} gutterBottom className={checked ? "done2" : "not-done2"}>
                                    {due}
                                </Typography>
                            </div>
                            <Button sx={checked ? "save-done" : "save-not-done"} size="small" onClick={(evt) => remove()} variant='contained'>Remove</Button>
                        </ThemeProvider>
                    </div>
                </CardContent>
            </Card>
        </div>  
    ); 
}

export default TaskCard;