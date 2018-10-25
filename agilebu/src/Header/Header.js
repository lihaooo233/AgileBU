import React, { Component } from 'react'
import logo from '../bulogo.png'
import './Header.css'
import Login from '../GLogin/Login'
import Grid from '@material-ui/core/Grid';

export default class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header" wrap="nowrap">
                    <Grid container spacing={24}>
                        <Grid item xs={7} sm={8} md={9} lg={10}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </Grid>
                        <Grid item xs={5} sm={4} md={3} lg={2}>
                            <Login />
                        </Grid>
                    </Grid>
                </header>
            </div>
        )
    }
}