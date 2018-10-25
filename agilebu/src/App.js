import React, { Component } from 'react'import Header from './Header/Header'import RMenu from './RMenu/RMenu'import Board from './Board/Board'import Grid from '@material-ui/core/Grid';class App extends Component {    render() {        return (            <Grid container>                <Grid item xs={12}>                    <Header />                </Grid>                <Grid item xs={8} md={9}>                    <Board />                </Grid>                <Grid item xs={4} md={3}>                    <RMenu />                </Grid>            </Grid>        )    }}export default App;