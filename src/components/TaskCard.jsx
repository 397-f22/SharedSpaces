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
        <div className="card-container" >
            <Card variant="outlined" sx={{width:1}}>
                <CardContent>
                    <div className="card-content-checkbox">
                        <div className='label-container'>
                            <input type="checkbox" id="checkbox" name="vehicle1" checked={checked} onChange={() => changeChecked()}></input>
                            <label className="assign"><Typography sx={{ fontSize: 22 }} color="gray" gutterBottom>
                                    {assignedTo}
                                </Typography></label>
                        </div>
                        <ThemeProvider theme={headerTheme}>
                            <div className='task-wrapper'>
                                <Typography variant="h5" component="div" className={checked ? "done" : ""}>
                                    {title}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className={checked ? "done" : ""}>
                                    {due}
                                </Typography>
                            </div>
                            <Button size="small" onClick={(evt) => remove()} variant='contained'>Remove</Button>
                        </ThemeProvider>
                    </div>
                </CardContent>
            </Card>
        </div>  
    ); 
}

export default TaskCard;