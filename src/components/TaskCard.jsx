import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import '../styles/TaskCard.css';
import {useState} from 'react';
import {ThemeProvider } from '@mui/material/styles';
import {headerTheme} from '../styles/Themes';
import Button from '@mui/material/Button';


const TaskCard = ({id, task, tasks, setTasks}) =>{
    console.log(task);
    
    const checkOnclick=()=>{
        const newState = tasks.filter(obj => obj != task);
        setTasks(newState);
    }
    
    return  (
        <div className="card-container">
            <Card variant="outlined" sx={{width:1}}>
                <CardContent>
                    <div className="card-content">
                    <input type="checkbox" id="checkbox" name="vehicle1"></input>
                    <ThemeProvider theme={headerTheme}>
                        <div className='task-wrapper'>
                        <Typography variant="h5" component="div">
                            {task.title}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {task.due}
                        </Typography>
                        </div>
                        <Button size="small" onClick={() => checkOnclick()} variant='contained'>Remove</Button>
                        </ThemeProvider>
                    </div>
                </CardContent>
            </Card>
        </div>  
    ); 
}

export default TaskCard;