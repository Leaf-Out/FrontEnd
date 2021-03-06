import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
import MoreRoundedIcon from '@material-ui/icons/MoreRounded';
import { Link } from 'react-router-dom';
import StyleIcon from '@material-ui/icons/Style';


const useStyles = makeStyles(theme => ({
    card: {
        height: window.innerHeight * 0.35,
        width: "100%"
    },
    image: {
        width: "100%",
        height: window.innerHeight * 0.25
    },
    icon: {
        color: theme.palette.primary.main
    }
}));

export default function UserParkCard(props) {
    const classes = useStyles()
    const images = [
        "https://cdn.pixabay.com/photo/2014/10/04/12/18/stone-arch-472976_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/10/12/06/24/allen-park-2843660_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/05/03/09/12/architecture-2280543_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/08/23/19/51/park-1615341_1280.jpg"
    ]
    const getImage = () => {
        return images[Math.floor(Math.random() * 4)]
    }
    const createAvg = () => {
        var sum = 0
        var prices = Object.values(props.park.prices)
        prices.forEach((price)=>{          
            sum = sum + price
        })        
        return sum / prices.length
    }
    return (
        <Paper elevation={0} className={classes.card}>
            <Grid container>
                <Grid xs={12}>
                    <CardMedia
                        className={classes.image}
                        image={getImage()}
                    />
                </Grid>
                <Grid xs={12} container>
                    <Grid xs={6} align="start">
                        <Typography variant="subtittle1" color="textSecondary">Park</Typography>
                    </Grid>
                    <Grid xs={6} container align="end">
                        <Grid xs={10} align="end">
                            <EcoRoundedIcon className={classes.icon} />
                        </Grid>
                        <Grid xs={2}>
                            <Typography>{props.park.feedback.rating}</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12} align="start">
                        <Typography ><StyleIcon className={classes.icon} />{props.park.name}</Typography>
                    </Grid>
                    <Grid xs={10} align="start">
                        <Typography >$ {createAvg()} <b>COP avg</b></Typography>
                    </Grid>
                    <Grid xs={2} align="end">
                        <Link style={{ textDecoration: 'none' }} to={`/park/${props.park.name}`}>
                            <IconButton variant="contained" color="primary">
                                <MoreRoundedIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );

}
