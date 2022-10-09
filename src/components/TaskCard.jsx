import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import '../styles/TaskCard.css';
import {useState} from 'react';
import {ThemeProvider } from '@mui/material/styles';
import {headerTheme} from '../styles/Themes';


const TaskCard = ({task}) =>{
    console.log(task);
    return  (
        <div className="card-container">
            <Card variant="outlined" sx={{width:1}}>
                <CardContent>
                    <div className="card-content">
                    <Checkbox />
                    <ThemeProvider theme={headerTheme}>
                        <Typography variant="h5" component="div">
                            {task.title}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {task.due}
                        </Typography>
                        </ThemeProvider>
                    </div>
                </CardContent>
            </Card>
        </div>  
    ); 
}

export default TaskCard;