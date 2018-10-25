import React from 'react'
import Card from '@material-ui/core/Card';
import CardTitle from './CardTitle.js'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
    sidebar: {
        position:'absolute',
        top:60, bottom:0, right:0,
        width:300,
        background:'#E6E6E6',
    },
    disc: {
        item:true,
        background: '#848484',
        height: '40%',
    },
});

function RMenu(props) {
    const { classes } = props;

    return (
        <div>
            <sidebar className={classes.sidebar}>
                <CardTitle />
                <Card className={classes.disc}>
                    DiscussionBoard
                </Card>
            </sidebar>
        </div>
    )
}

RMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RMenu)