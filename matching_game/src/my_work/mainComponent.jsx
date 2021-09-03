import React from 'react';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import fieldMapGenerator from './fieldMapGenerator.js';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useState, useEffect } from 'react';

import './main.css';
import { Button } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
  
import CardsComponent from './CardsComponent.jsx';
  

export default function MainComponent(){

  //SETUP
  const [startup, setStartup] = useState(true);
  const [loading, setLoading] = useState(false);
  const[ending, setEnding] = useState(false);

  const [fieldSize, setFieldSize] = useState("small");
  const [cardSet, setCardSet] = useState("dogs");
  const [playerCount, setPlayerCount] = useState("2");
  const [showArr,setShowArr] = useState([0,0,0,0]);
 
  const[click,setClick] = useState(false);

  const test1 = "2";
  const testArr = [2,1,1,2]

  // function handleClickTest(){
  //     console.log(`${process.env.PUBLIC_URL}/assets/images/${cardSet}/${test1+'.jpg'}`);
  //     setClick(!click);
  // }

  function handleCardClick(cardId){
    let tempArr = showArr;
    if (tempArr[cardId] === 0){
      tempArr[cardId] = 1;
      setShowArr(tempArr);
      console.log(showArr);
    }
  }

  function setCardImage(cardId){
    if(showArr[cardId] === 1){
      return(`${
        process.env.PUBLIC_URL
    }/assets/images/${cardSet}/${
        testArr[cardId] + ".jpg"
    }`);
    }else{ return(`${process.env.PUBLIC_URL}/assets/images/background.jpg`)}
  }

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
          <CardsComponent
            cardSet ={cardSet}
          />
         {/* <Grid item xs={6} sm={3}>
       <Card className="Card">
      <CardActionArea
       onClick = {()=>{handleClickTest()}}
      >
        <CardMedia
          component="img"
          height="140"
          image={click?`${process.env.PUBLIC_URL}/assets/images/${cardSet}/${test1+'.jpg'}`: `${process.env.PUBLIC_URL}/assets/images/background.jpg`}
        />
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={6} sm={3}>
       <Card className="Card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={click?`${process.env.PUBLIC_URL}/assets/images/${cardSet}/${test1+'.jpg'}`: `${process.env.PUBLIC_URL}/assets/images/background.jpg`}
        />
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={6} sm={3}>
       <Card className="Card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${process.env.PUBLIC_URL}/assets/images/background.jpg`}
        />
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={6} sm={3}>
       <Card className="Card">
      <CardActionArea
       onClick = {()=>{handleClickTest()}}
      >
        <CardMedia
          component="img"
          height="140"
          image={click?`${process.env.PUBLIC_URL}/assets/images/${cardSet}/${test1+'.jpg'}`: `${process.env.PUBLIC_URL}/assets/images/background.jpg`}
        />
      </CardActionArea>
    </Card>
    </Grid> */}
        </>
    )}
    </div>
    
</>
  )
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
