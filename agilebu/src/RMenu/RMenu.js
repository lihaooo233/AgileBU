import React, { Component } from 'react'
import './RMenu.css'
import Grid from '@material-ui/core/Grid';

export default class RMenu extends Component {
    render() {
        return (
            <div className="App">
                <sidebar className="App-sidebar">
                    <Grid container direction="column" justify="center"
                          alignItems="stretch" className="App-sidegrid" wrap="nowrap">
                        <cardbox item className="App-cardbox">
                            <Grid container direction="column" justify="center"
                                  alignItems="stretch" className="App-cardgrid" wrap="nowrap">
                                <taskname className="App-taskname">
                                </taskname>
                                <taskdesc className="App-taskdesc">
                                </taskdesc>
                                <completecrit className="App-completecrit">
                                </completecrit>
                                <taskpoints className="App-taskpoints">
                                </taskpoints>
                                <assignee className="App-assignee">
                                </assignee>
                            </Grid>
                        </cardbox>
                        <chatbox item className="App-chatbox">
                        </chatbox>
                    </Grid>
                </sidebar>
            </div>
        )
    }
}