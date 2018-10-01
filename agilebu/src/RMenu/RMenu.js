import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardTitle from './CardTitle.js'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
    sidebar: {
        position:'absolute',
        top:40, bottom:0, right:0,
        width:300,
        background:'#E6E6E6',
    },
    grid: {
        container:true,
        direction:"column",
        justify:"flex-start",
        alignItems:"stretch",
        wrap:"nowrap",
        position:'absolute',
        top:0, bottom:0, right:0,
        background:'#E6E6E6',
    },
    card: {
        background: '#848484',
        height: '40%',
    },
});

function RMenu(props) {
    const { classes } = props;

    return (
        <div>
            <sidebar className={classes.sidebar}>
                <Grid className={classes.grid}>
                    <CardTitle />
                    <Card className={classes.card}>
                        DiscussionBoard
                    </Card>
                </Grid>
            </sidebar>
        </div>
    )
}

RMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RMenu)