import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, TOGGLE_CHECK } from "../actions/actionTypes";

const initialState = {
  	tasks: []
};

const addListItem = (state, action) => ({
	...state,
	tasks: [
        ...state.tasks,
        {
            id: Date.now(),
            title: action.payload,
            done: false,
        }
    ]
});

const toggleCheck = (state, action) => {
	const tasks = state.tasks.map( (i) => {
        if(i.id === action.payload.id) {
            return {
                ...i,
                done: !action.payload.done,
            };
        }
        return i;
    });

    return {...state, tasks};
};

const removeListItem = (state, action) => {
	const tasks = state.tasks.filter(currentItem => currentItem.id !== action.payload.id);
  return { ...state, tasks };
}

export default function (state=initialState, action) {
	switch (action.type) {
		case ADD_LIST_ITEM: return addListItem(state, action);
		case TOGGLE_CHECK: return toggleCheck(state, action);
		case REMOVE_LIST_ITEM: return removeListItem(state, action);
		default: return state;
	}
}
