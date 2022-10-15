import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../styles/TaskCard.css';
import {useState} from 'react';
import {ThemeProvider } from '@mui/material/styles';
import {headerTheme} from '../styles/Themes';
import Button from '@mui/material/Button';
import { setData, useDbUpdate } from '../utilities/firebase';


const TaskCard = ({due, id, title, checked}) =>{
    const [tasks, setTasks] = useState([]);
    const [update, result] = useDbUpdate(`/tasks/${id}`);
    // const [checked, setChecked] = useState(false);
    const remove=(evt)=>{
        // remove directly from db rather than using state
        const newState = tasks.filter(obj => obj != task);
        setTasks(newState);
        evt.preventDefault();
        update(state);
    }
    const changeChecked = ()=>{
        setData(`/tasks/${id}`, {
            id: id,
            title: title,
            due : due, 
            checked: !checked,
        }).catch(alert);
    }   
    return  (
        <div className="card-container" >
            <Card variant="outlined" sx={{width:1}}>
                <CardContent>
                    <div className={checked ? "card-content-check" : "card-content-uncheck" }>
                    <input type="checkbox" id="checkbox" name="vehicle1" checked={checked} onChange={() => changeChecked()}></input>
                    <ThemeProvider theme={headerTheme}>
                        <div className='task-wrapper'>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {due}
                        </Typography>
                        </div>
                        <Button size="small" onClick={(evt) => remove(evt)} variant='contained'>Remove</Button>
                        </ThemeProvider>
                    </div>
                </CardContent>
            </Card>
        </div>  
    ); 
}

export default TaskCard;