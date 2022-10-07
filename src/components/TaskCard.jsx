import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import '../styles/TaskCard.css';
import {useState} from 'react';


const task = {title:"dummy",due:"today"}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const TaskCard = () =>{
    const [checked, setChecked] = useState(false);

const handleChange = (event) => {
    setChecked(event.target.checked);
  };
    return  (
        <div className="card-container">
            <Card variant="outlined" sx={{width:1}}>
                <CardContent>
                    <div className="card-content">
                    <Checkbox checked={checked} onChange={handleChange} />
                        <Typography variant="h5" component="div">
                            {task.title}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {task.due}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div> 
    ); 
}

export default TaskCard;