import {
  INCREMENT,
  TASK_ONDRAGEND,
  LOGIN,
  LOGOUT,
  MODAL_CLOSE,
  MODAL_OPEN
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
    case LOGIN:
      return Object.assign({}, state, {
        authorized: true,
      })
    case LOGOUT:
      return Object.assign({}, state, {
        authorized: false,
      })
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    case MODAL_OPEN:
      return Object.assign({}, state, {
        isModalOpen: true
      })
    case MODAL_CLOSE:
      return Object.assign({}, state, {
        isModalOpen: false
      })
    default: return state;
  }
}