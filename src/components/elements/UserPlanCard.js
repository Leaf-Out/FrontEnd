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
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';


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

export default function UserPlanCard(props) {
    const classes = useStyles()
    const images = [
        "https://cdn.pixabay.com/photo/2016/03/09/09/59/men-1245982_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/02/16/17/52/rafting-2071980_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/09/04/19/27/paraglider-1644986_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/07/23/50/climbing-2609319_1280.jpg"
    ]
    const getImage = () => {
        return images[Math.floor(Math.random() * 4)]
    }
    const createAvg = () => {
        var sum = 0
        var prices = Object.values(props.plan.prices)
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
                        <Typography variant="subtittle1" color="textSecondary">{!props.park ? "default": props.park}</Typography>
                    </Grid>
                    <Grid xs={6} container align="end">
                        <Grid xs={10} align="end">
                            <EcoRoundedIcon className={classes.icon} />
                        </Grid>
                        <Grid xs={2}>
                        <Typography>{props.plan.feedback.rating}</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12} align="start">
                        <Typography ><AccountTreeRoundedIcon className={classes.icon}/> {props.plan.name}</Typography>
                    </Grid>
                    <Grid xs={10} align="start">
                        <Typography >$ {createAvg()} <b>COP avg</b></Typography>
                    </Grid>
                    <Grid xs={2} align="end">
                            <Link style={{ textDecoration: 'none' }} to={`/plan/${props.plan.name}`}>
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
