import React,{useState} from 'react'
import './home.scss'
import {bg,logo} from './Assets/icon'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
   borderRadius: 3, 
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    zIndex:"2", 
    width:"180px",


    


  },
  name:{
      zIndex:"2",
      height: 48,
      borderRadius: 3, 
      backgroundColor:"white",
      width:"250px",
      boxShadow: '0 1px 5px 2px grey',
     

  }  

});







export default function Home({setval,val,namee,setnamee}) {
    const classes = useStyles();
   const [name, setname] = useState('');
   
   const submit= ((e) =>{ 
    
    setname(e);
    setnamee(e);
  
   }
)

const start=(() =>{

  setval(!val);

  })

    return (
<>
      {!val ?     <div className="home">
            
    
     <div className="start">
     <img src={logo} alt="logo" style={{ height:"190px",marginBottom:"30px"}} />
     <div className="inbtn">
     <div style={{marginTop:"-10px"}}>
     
      <TextField  id="filled-basic" onChange={(e)=>{submit(e.target.value)}}  color="success" className={classes.name} label="Name*" style={{ marginTop:"40px",}} variant="filled" />

      </div>

      <div className="btnstart">
      {name ?   <Button className={classes.root}  variant="contained"  onClick={start} endIcon={<SendIcon />}>
      Start
      </Button>  : <Button className={classes.root} variant="contained"  disabled endIcon={<SendIcon />}>
      Start
      </Button>}

      


      </div>
      </div>

      </div>
     
     
        </div> : " "}
        </>
    
    )
}
