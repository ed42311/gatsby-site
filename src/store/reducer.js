import {
  INCREMENT,
  TASK_ONDRAGEND
} from './actionTypes';
import initialState from './initialState';

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ONDRAGEND:
      const { payload } = action;
      const { source, destination, draggableId } = payload;
      const column = state.columns[source.droppableId];
      const newTaskIds = [...column.taskIds];

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

    return {
      ...state,
      columns: {
      ...state.columns,
      [column.id]: {
          ...column,
          taskIds: newTaskIds
        }
      }
    };
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    default: return state;
  }
}