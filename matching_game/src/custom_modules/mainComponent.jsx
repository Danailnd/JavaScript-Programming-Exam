import React from 'react';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import fieldMapGenerator from './fieldMapGenerator.js';
// import { Container, Row, Col } from 'reactstrap';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useState } from 'react';

import './main.css';
import { Button } from '@material-ui/core';
  
  

export default function MainComponent(){

  //SETUP
  const [startup, setStartup] = useState(true);
  const [loading, setLoading] = useState(false);
  const[ending, setEnding] = useState(false);

  const [fieldSize, setFieldSize] = useState("small");
  const [cardSet, setCardSet] = useState("dogs");
  const [playerCount, setPlayerCount] = useState("2");
 
  return(
    <>
    <div className="Container">
    {startup && (
        <>
        <Grid container spacing={5}>
            <Grid item xs={6} sm={3}>
                <div className="RadioComponent">
                    <FormControl component="fieldset">
                        <FormLabel
                            component="legend"
                            className="RadioHeader"
                        >
                            Field Size
                        </FormLabel>
                        <RadioGroup
                            value={fieldSize}
                            onChange={(event) =>
                                setFieldSize(event.target.value)
                            }
                        >
                            <FormControlLabel
                                value="small"
                                control={<Radio />}
                                label="3x4"
                            />
                            <FormControlLabel
                                value="medium"
                                control={<Radio />}
                                label="4x4"
                            />
                            <FormControlLabel
                                value="large"
                                control={<Radio />}
                                label="5x4"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            </Grid>
            <Grid item xs={6} sm={3}>
                <div className="RadioComponent">
                    <FormControl component="fieldset">
                        <FormLabel
                            component="legend"
                            className="RadioHeader"
                        >
                            Cards Set
                        </FormLabel>
                        <RadioGroup
                            value={cardSet}
                            onChange={(event) =>
                                setCardSet(event.target.value)
                            }
                        >
                            <FormControlLabel
                                value="dogs"
                                control={<Radio />}
                                label="Dogs"
                            />
                            <FormControlLabel
                                value="cats"
                                control={<Radio />}
                                label="Cats"
                            />
                            <FormControlLabel
                                value="dinosaurs"
                                control={<Radio />}
                                label="Dinosaurs"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            </Grid>
            <Grid item xs={6} sm={3}>
                <div className="RadioComponent">
                    <FormControl component="fieldset">
                        <FormLabel
                            component="legend"
                            className="RadioHeader"
                        >
                            Number of Players
                        </FormLabel>
                        <RadioGroup
                            value={playerCount}
                            onChange={(event) =>
                                setPlayerCount(event.target.value)
                            }
                        >
                            <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="1 Player"
                            />
                            <FormControlLabel
                                value="2"
                                control={<Radio />}
                                label="2 Players"
                            />
                            <FormControlLabel
                                value="3"
                                control={<Radio />}
                                label="3 Players"
                            />
                            <FormControlLabel
                                value="4"
                                control={<Radio />}
                                label="4 Players"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            </Grid>
        </Grid>
        <Button
            color = "secondary"
            variant = "contained"
            className = "StartGameButton"
            style={{ marginTop: "50px", marginLeft: "50px", minWidth: "300px"}}
            onClick = {() =>
                setStartup(false)
            }
        >
            Start Game
        </Button>
        </>
    )}
    {!startup &&(
        <>
        <Paper
        elevation={3}
        className="Test1"
        variant="outlined" 
        square
        />
        </>
    )}
    </div>
    
</>
  )
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
