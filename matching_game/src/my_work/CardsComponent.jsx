import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useState, useRef} from 'react';




export default function CardsComponent({cardSet}){

    const [showArr,setShowArr] = useState([false,false,false,false]);;
    const testArr = [2,1,1,2];
    const [click, setClick] = useState(0);
    const clickBlock = useRef(false);
    

    function handleCardClick(cardId){
        if(clickBlock.current === false){
        let tempArr = [...showArr];
        tempArr[cardId] = !tempArr[cardId];
        setShowArr(tempArr);
        setClick((click+1)%2);
        if(click === 1){
            handlePlayerChange(tempArr);
        }
    }
            
      }
      function handlePlayerChange(tempArr){
        let __temporary = [];
        clickBlock.current = true;
        setTimeout(function()
        {
            for(let i in tempArr){
                if (tempArr[i] === true){
                    __temporary.push(i);
                }
            }
            if(testArr[__temporary[0]]===testArr[__temporary[1]]){
                console.log("IT WORKS!!!!!!")
            }
            clickBlock.current = false;
            setShowArr([false,false,false,false]);
                },1300);
      }
    return(
        <Grid container spacing={5}>
        <Grid item xs={6} sm={3}>
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
                                ? `${process.env.PUBLIC_URL}/assets/images/${cardSet}/${
                                      testArr[0] + ".jpg"
                                  }`
                                : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                        }
                    />
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
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
                                ? `${process.env.PUBLIC_URL}/assets/images/${cardSet}/${
                                      testArr[1] + ".jpg"
                                  }`
                                : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                        }
                    />
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
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
                                ? `${process.env.PUBLIC_URL}/assets/images/${cardSet}/${
                                      testArr[2] + ".jpg"
                                  }`
                                : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                        }
                    />
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
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
                                ? `${process.env.PUBLIC_URL}/assets/images/${cardSet}/${
                                      testArr[3] + ".jpg"
                                  }`
                                : `${process.env.PUBLIC_URL}/assets/images/background.jpg`
                        }
                    />
                </CardActionArea>
            </Card>
        </Grid>
    </Grid>




        // <Grid container spacing={5}>
        //     <Grid item xs={6} sm={3}>
        //         <Card className="Card">
        //             <CardActionArea
        //                 onClick={() => {
        //                   handleCardClick(0);
        //                 }}
        //             >
        //               {showArr[0] === 1 ? (<CardMedia
        //                     component="img"
        //                     height="140"
        //                     image={
        //                             `${
        //                                   process.env.PUBLIC_URL
        //                               }/assets/images/${cardSet}/${
        //                                   testArr[0] + ".jpg"
        //                               }`
                                    
        //                     }
        //                 />):(<CardMedia
        //                   component="img"
        //                   height="140"
        //                   image={
        //                            `${process.env.PUBLIC_URL}/assets/images/background.jpg`
        //                   }
        //               />)}
                        
        //             </CardActionArea>
        //         </Card>
        //     </Grid>
        // </Grid>
    )
} 