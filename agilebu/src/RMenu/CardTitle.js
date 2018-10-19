import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    card: {
        item:true,
        background: '#848484',
        height: '60%',
        overflow: 'auto',
    },
    title: {
        fontSize: 12,
    },
    pos: {
        marginBottom: 12,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    container: {
        item:true,
        display: 'flex',
        flexWrap: 'wrap',
    },
});

class TextFields extends React.Component {
    state = {
        name: '',
        description: '',
        criteria: '',
        points: '',
        assignee: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <form className={styles.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Name"
                    className={styles.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="dense"
                    autoFocus
                />
                <TextField
                    id="standard-name"
                    label="Description"
                    className={styles.textField}
                    value={this.state.description}
                    onChange={this.handleChange('description')}
                    margin="dense"
                    autoFocus
                    multiline
                    rows={5}
                />
                <TextField
                    id="standard-name"
                    label="Criteria"
                    className={styles.textField}
                    value={this.state.criteria}
                    onChange={this.handleChange('criteria')}
                    margin="dense"
                    autoFocus
                    multiline
                    rows={4}
                />
                <TextField
                    id="standard-name"
                    label="Points"
                    className={styles.textField}
                    value={this.state.points}
                    onChange={this.handleChange('points')}
                    margin="dense"
                    autoFocus
                />
                <TextField
                    id="standard-name"
                    label="Assignee"
                    className={styles.textField}
                    value={this.state.assignee}
                    onChange={this.handleChange('assignee')}
                    margin="dense"
                    autoFocus
                />
            </form>
        );
    }
}

function SimpleCard(props) {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <TextFields />
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" size="large">
                            Save
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" size="large">
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);