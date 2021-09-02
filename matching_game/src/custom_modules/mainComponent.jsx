import React from 'react';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
// import { Container, Row, Col } from 'reactstrap';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useState } from 'react';

import './main.css';
  
  

export default function MainComponent(){

  
  const [startup, setStartup] = useState(true);
  const[ending, setEnding] = useState(false);

  const [playerCount, setPlayerCount] = useState('1');
  const handleChange = (event) => {
    setPlayerCount(event.target.value);
  };
  return(
    <>
    <div className="Container">
       
    <Grid container spacing={5}>
    <Grid item xs={6} sm={3}>
    <div className="RadioComponent">
<FormControl component="fieldset">
    <FormLabel component="legend" className="RadioHeader">
        Number of Players
    </FormLabel>
    <RadioGroup
        aria-label="gender"
        name="gender1"
        value={playerCount}
        onChange={handleChange}
    >
        <FormControlLabel value="1" control={<Radio />} label="1 Player" />
        <FormControlLabel value="2" control={<Radio />} label="2 Players" />
        <FormControlLabel value="3" control={<Radio />} label="3 Players" />
        <FormControlLabel value="4" control={<Radio />} label="4 Players" />
    </RadioGroup>
</FormControl>
</div>
        </Grid>
        <Grid item xs={6} sm={3}>
        <div className="RadioComponent">
<FormControl component="fieldset">
    <FormLabel component="legend" className="RadioHeader">
        Number of Players
    </FormLabel>
    <RadioGroup
        aria-label="gender"
        name="gender1"
        value={playerCount}
        onChange={handleChange}
    >
        <FormControlLabel value="1" control={<Radio />} label="1 Player" />
        <FormControlLabel value="2" control={<Radio />} label="2 Players" />
        <FormControlLabel value="3" control={<Radio />} label="3 Players" />
        <FormControlLabel value="4" control={<Radio />} label="4 Players" />
    </RadioGroup>
</FormControl>
</div>
        </Grid>
        <Grid item xs={6} sm={3}>
        <div className="RadioComponent">
<FormControl component="fieldset">
    <FormLabel component="legend" className="RadioHeader">
        Number of Players
    </FormLabel>
    <RadioGroup
        aria-label="gender"
        name="gender1"
        value={playerCount}
        onChange={handleChange}
    >
        <FormControlLabel value="1" control={<Radio />} label="1 Player" />
        <FormControlLabel value="2" control={<Radio />} label="2 Players" />
        <FormControlLabel value="3" control={<Radio />} label="3 Players" />
        <FormControlLabel value="4" control={<Radio />} label="4 Players" />
    </RadioGroup>
</FormControl>
</div>
        </Grid>
      </Grid>
    </div>
</>

  )
}
  
  
  
  
  




{/* <div className="RadioComponent">
<FormControl component="fieldset">
    <FormLabel component="legend" className="RadioHeader">
        Number of Players
    </FormLabel>
    <RadioGroup
        aria-label="gender"
        name="gender1"
        value={playerCount}
        onChange={handleChange}
    >
        <FormControlLabel value="1" control={<Radio />} label="1 Player" />
        <FormControlLabel value="2" control={<Radio />} label="2 Players" />
        <FormControlLabel value="3" control={<Radio />} label="3 Players" />
        <FormControlLabel value="4" control={<Radio />} label="4 Players" />
    </RadioGroup>
</FormControl>
</div>
<div className="RadioComponent">
<FormControl component="fieldset">
    <FormLabel component="legend" className="RadioHeader">
        Number of Players
    </FormLabel>
    <RadioGroup
        aria-label="gender"
        name="gender1"
        value={playerCount}
        onChange={handleChange}
    >
        <FormControlLabel value="1" control={<Radio />} label="1 Player" />
        <FormControlLabel value="2" control={<Radio />} label="2 Players" />
        <FormControlLabel value="3" control={<Radio />} label="3 Players" />
        <FormControlLabel value="4" control={<Radio />} label="4 Players" />
    </RadioGroup>
</FormControl>
</div> */}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
