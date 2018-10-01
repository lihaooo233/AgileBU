import React, { Component } from 'react'
import './RMenu.css'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardTitle from './CardTitle.js'



export default class RMenu extends React.Component {
    render() {
        return (
            <div className="App">
                <sidebar className="App-sidebar">
                    <Grid className="App-grid">
                        <CardTitle />
                        <Card className="App-chatbox">
                        </Card>
                    </Grid>
                </sidebar>
            </div>
        )
    }
}