import React from "react";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import fieldMapGenerator from "./fieldMapGenerator.js";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";

import { useState, useEffect, useRef } from "react";

import "./main.css";

export default function MainComponent() {
    //SETUP
    const [startup, setStartup] = useState(true);
    const [end, setEnd] = useState(false);
    const [fieldSize, setFieldSize] = useState("12");
    const [cardSet, setCardSet] = useState("dogs");
    const [playerCount, setPlayerCount] = useState("2");

    //Ingame Variables

    const [showArr, setShowArr] = useState([]);
    const [deletedArr, setDeletedArr] = useState([]);
    const [click, setClick] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(0);

    const clickBlock = useRef(false);
    const score = useRef([]);
    const mapArray = useRef([]);
    const winners = useRef([]);

    //Ingame Functions
    function scoreBuild() {
        let arr = [];
        for (let i = 0; i < playerCount; i++) {
            arr.push(0);
        }
        return arr;
    }
    function deleteArrBuild(){
        let arr = [];
        for (let i = 0; i < parseInt(fieldSize); i++){
            arr.push(true);
        }
        return arr;
    }
    function showArrBuild(){
        let arr = [];
        for (let i = 0; i < parseInt(fieldSize); i++){
            arr.push(false);
        }
        return arr;
    }

    function determineWinners(){
        const maxScore = Math.max(...score.current);
        let arr = [];
        for(let i in score.current){
            if(score.current[i] === maxScore){
                arr.push(parseInt(i));
            }
        }
        winners.current = arr;
    }

    function handleCardClick(cardId) {
        if (clickBlock.current === false && showArr[cardId] === false) {
            let tempArr = [...showArr];
            tempArr[cardId] = true;
            setShowArr(tempArr);
            setClick((click + 1) % 2);
            if (click === 1) {
                handlePlayerChange(tempArr);
            }
        }
    }
    function handlePlayerChange(tempArr) {
        let __temporary = [];
        let __deletedArr = [...deletedArr];
        clickBlock.current = true;
        setTimeout(function () {
            for (let i in tempArr) {
                if (tempArr[i] === true) {
                    __temporary.push(i);
                }
            }
            if (mapArray.current[__temporary[0]] === mapArray.current[__temporary[1]]) {
                __deletedArr[__temporary[0]] = false;
                __deletedArr[__temporary[1]] = false;
                setDeletedArr(__deletedArr);
                score.current[currentPlayer] = score.current[currentPlayer] + 1;
            }
            setCurrentPlayer((currentPlayer + 1) % playerCount);
            clickBlock.current = false;
            setShowArr(showArrBuild());
        }, 1000);
    }

    useEffect(() => {
        if (deletedArr.length !== 0 && deletedArr.indexOf(true) === -1) {
            determineWinners();
            setEnd(true);
        }
    }, [deletedArr]);

    return (
        <>
        {startup && !end &&(
          <h2 className="Header">Matching Game</h2>)
          }
        {!startup && !end &&
        (<h2 className="Header">{`Player ${currentPlayer+1}`}</h2>
        )}
        {!startup && end &&
        (<h2 className="Header">Score</h2>
        )}
            <div className="Container">
                {startup && !end &&(
                    <>
                        <Grid container spacing={5}>
                            <Grid item xs={6} sm={3}>
                                <div className="RadioComponent">
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend" className="RadioHeader">
                                            Field Size
                                        </FormLabel>
                                        <RadioGroup
                                            value={fieldSize}
                                            onChange={(event) => setFieldSize(event.target.value)}
                                        >
                                            <FormControlLabel
                                                value={"12"}
                                                control={<Radio />}
                                                label="3x4"
                                            />
                                            <FormControlLabel
                                                value={"16"}
                                                control={<Radio />}
                                                label="4x4"
                                            />
                                            <FormControlLabel
                                                value={"20"}
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
                                        <FormLabel component="legend" className="RadioHeader">
                                            Cards Set
                                        </FormLabel>
                                        <RadioGroup
                                            value={cardSet}
                                            onChange={(event) => setCardSet(event.target.value)}
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
                                        <FormLabel component="legend" className="RadioHeader">
                                            Number of Players
                                        </FormLabel>
                                        <RadioGroup
                                            value={playerCount}
                                            onChange={(event) => setPlayerCount(event.target.value)}
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
                            color="secondary"
                            variant="contained"
                            className="StartGameButton"
                            // style={{ marginTop: "50px", marginLeft: "50px", minWidth: "300px" }}
                            style={{ marginTop: "70px", marginLeft: "100px", minWidth: "400px" }}
                            onClick={() => {
                                // setDeletedArr(deleteArrBuild());
                                setDeletedArr(deleteArrBuild());
                                setShowArr(showArrBuild());
                                score.current = scoreBuild();
                                setCurrentPlayer(0);
                                mapArray.current = fieldMapGenerator(parseInt(fieldSize));
                                setStartup(false);}}
                        >
                            Start Game
                        </Button>
                    </>
                )}
                {!startup && (
                    <>
                        <Grid container spacing={5}>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[0] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(0);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[0]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[0] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[1] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(1);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[1]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[1] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[2] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(2);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[2]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                              mapArray.current[2] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[3] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(3);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[3]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[3] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={5}>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[4] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(4);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[4]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[4] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[5] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(5);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[5]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[5] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[6] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(6);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[6]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                              mapArray.current[6] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[7] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(7);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[7]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[7] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={5}>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[8] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(8);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[8]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[8] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[9] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(9);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[9]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[9] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[10] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(10);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[10]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                              mapArray.current[10] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[11] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(11);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[11]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[11] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                        </Grid>
                        {(fieldSize === "16"||fieldSize=== "20")&&(<Grid container spacing={5}>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[12] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(12);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[12]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[12] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[13] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(13);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[13]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[13] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[14] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(14);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[14]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                              mapArray.current[14] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[15] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(15);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[15]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[15] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                        </Grid>)}
                        {fieldSize === "20"&&(<Grid container spacing={5}>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[16] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(16);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[16]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[16] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[17] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(17);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[17]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[17] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[18] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(18);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[18]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                              mapArray.current[18] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {deletedArr[19] && (
                                    <Card className="Card">
                                        <CardActionArea>
                                            <CardMedia
                                                onClick={() => {
                                                    handleCardClick(19);
                                                }}
                                                component="img"
                                                height="140"
                                                image={
                                                    showArr[19]
                                                        ? `${
                                                              process.env.PUBLIC_URL
                                                          }/assets/images/${cardSet}/${
                                                            mapArray.current[19] + ".jpg"
                                                          }`
                                                        : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                                                }
                                            />
                                        </CardActionArea>
                                    </Card>
                                )}
                            </Grid>
                        </Grid>)}
                    </>
                )}
                {end && (
                    <>
                    <h1 className = "endingText">{`Player 1 : ${score.current[0]}`}</h1>
                    {playerCount > 1 && (<h1 className = "endingText">{`Player 2 : ${score.current[1]}`}</h1>)}
                    {playerCount > 2 && (<h1 className = "endingText">{`Player 3 : ${score.current[2]}`}</h1>)}
                    {playerCount > 3 && (<h1 className = "endingText">{`Player 4 : ${score.current[3]}`}</h1>)}
                    <h1 className = "endingCongratulations">Congratulations</h1>
                    {winners.current.length === 1 && (
                            <h1 className = "endingCongratulations">
                            {`Player ${winners.current[0]+1}`}
                            </h1> 
                    )}  
                    {winners.current.length === 2 && (
                            <h1 className = "endingCongratulations">
                            {`Player ${winners.current[0]+1} and ${winners.current[1]+1}`}
                            </h1> 
                    )}  
                    {winners.current.length === 3 && (
                            <h1 className = "endingCongratulations">
                            {`Player ${winners.current[0]+1}, ${winners.current[1]+1} and ${winners.current[1]+1}`}
                            </h1> 
                    )}  
                    {winners.current.length === 4 && (
                            <h1 className = "endingCongratulations">
                            Everybody
                            </h1> 
                    )}  
                    {winners.current.length === 1?(<h1 className = "endingCongratulations">wins</h1>):(<h1 className = "endingCongratulations">win</h1>)}
                    <Button
                            color="secondary"
                            variant="contained"
                            className="StartGameButton"
                            style={{ marginTop: "50px", marginLeft: "200px", minWidth: "500px" }}
                            // className = "endingButton"
                            onClick={() => {setStartup(true);
                            setEnd(false)}}
                        >
                            Play Another Game
                        </Button>
                    </>
                    

                )}
            </div>
        </>
    );
}
  
  
  
  
  
  
  
  
  
  
  
  
