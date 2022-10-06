import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const task = {title:"dummy",due:"today"}

const TaskCard = () =>{
    return  (
        <Card variant="outlined" sx={{height:128,width:256}}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {task.title}
        </Typography>
        <Typography variant="h5" component="div">
            {task.due}
        </Typography>
    </CardContent>

        
        </Card>
       
    ); 

}

export default TaskCard;