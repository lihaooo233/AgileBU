import React, { Component } from 'react'
import logo from '../bulogo.png'
import './Header.css'
import Login from '../GLogin/Login'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const styles = ({
    header: {
        background:'#111111',
    },
});

function Header(props) {
    const { classes } = props;

    return (
        <div className="App">
            <Card className={classes.header}>
                <Grid container spacing={24} alignItems="center">
                    <Grid item xs={7} sm={8} md={9} lg={10}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Grid>
                    <Grid item xs={5} sm={4} md={3} lg={2}>
                        <Login />
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default withStyles(styles)(Header)