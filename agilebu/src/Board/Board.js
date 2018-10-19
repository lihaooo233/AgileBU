// This code follows closely with the sample code provided by Atlassian's react-beautiful-dnd.
// For more information, see: https://github.com/atlassian/react-beautiful-dnd
// This code has added a couple of lines to allow functionality with three lists, instead of the original two.

import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Board.css'
import { connect } from 'react-redux';
import { boardChange } from '../actions/BoardAction'


const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  boardChange: (payload) => dispatch(boardChange(payload))
})

const fakeData = [{ id: `item-0`, content: 'create fake data\n\n', user: 'nwiebe@bu.edu' },{ id: `item-1`, content: 'Create a web application base using React.js\n\n', user: 'shimizu@bu.edu' }, { id: `item-2`, content: 'create three columns\n\n', user: '' }, { id: `item-3`, content: 'Something else\n\n', user: '' }, { id: `item-4`, content: '\n\n', user: '' },{ id: `item-5`, content: '\n\n', user: 'shimizu@bu.edu' },{ id: `item-6`, content: '\n\n', user: 'nwiebe@bu.edu' }]

const getItems = (count, offset = 0) =>
  fakeData.slice(count, count+offset)

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}% 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
});

class Board extends Component {
  state = {
    todo: getItems(0, 3),
    doing: getItems(3, 3),
    done: getItems(6, 2)
  };


  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    droppable: 'todo',
    droppable2: 'doing',
    droppable3: 'done'
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };
      if (source.droppableId === 'droppable') {
        state = {...this.state,
          todo: items};
      } else if (source.droppableId === 'droppable2') {
        state = {...this.state,
          doing: items};
      } else {
        state = {...this.state,
          done: items};
      }
      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      let listNames = Object.keys(this.id2List)
      let newlist = []
      listNames.forEach((n) => {
        if (!(n === source.droppableId || n === destination.droppableId)) {
          newlist.push(n)
        }
      })

      let newResult = {...result}
      newlist.forEach((list) => {
        newResult[list] = this.getList(list)
      })

      this.setState({
        todo: newResult.droppable,
        doing: newResult.droppable2,
        done: newResult.droppable3
      });

      this.props.boardChange({
        todo: newResult.droppable,
        doing: newResult.droppable2,
        done: newResult.droppable3
      })
    }
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div className='board'>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Grid container spacing={40}>
            <Grid item>
              <Droppable droppableId="droppable2">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    {this.state.doing.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}>
                            {item.content}
                            {item.user}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Grid>
            <Grid item>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    {this.state.todo.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}>
                            {item.content}
                            {item.user}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Grid>
            <Grid item>
              <Droppable droppableId="droppable3">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    {this.state.done.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}>
                            {item.content}
                            {item.user}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Grid>
          </Grid>
        </DragDropContext>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);