import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    card: {
        background: '#848484',
        height: '60%',
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
        width: 200,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
});

class TextFields extends React.Component {
    state = {
        name: 'Import from button.',
        description: 'Also import.',
        criteria: 'From button.',
        points: '3',
        assignee: 'Namey McNameFace'
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
                    rows={7}
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
                    rows={6}
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
                <TextFields />
            </CardContent>
        </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);