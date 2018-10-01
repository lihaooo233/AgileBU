import React, { Component } from 'react'
import './RMenu.css'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardTitle from './CardTitle.js'

export default class RMenu extends Component {
    render() {
        return (
            <div className="App">
                <sidebar className="App-sidebar">
                    <Grid container direction="column" justify="flex-start"
                          alignItems="stretch" className="App-sidegrid" wrap="nowrap">
                        <CardTitle />
                        <Card item className="App-chatbox">
                        </Card>
                    </Grid>
                </sidebar>
            </div>
        )
    }
}