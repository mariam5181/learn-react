import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, TOGGLE_CHECK } from "../actions/actionTypes";

const initialState = {
  	tasks: []
};

export default function (state=initialState, action) {
	switch (action.type) {
		case ADD_LIST_ITEM: {
			return {
				...state,
				tasks: [
	                ...state.tasks,
	                {
	                    id: Date.now(),
	                    title: action.payload, /* input value must be here */
	                    done: false,
	                }
	            ]
			};
		}
		case TOGGLE_CHECK: {
			return state.tasks.map( (i) => {
	            if(i.id === action.payload.id) { /* array must be here with id and done keys */
	                return {
	                    ...i,
	                    done: !action.payload.done,
	                };
	            }
	            return i;
	        });
		}
		case REMOVE_LIST_ITEM: {
			return state.tasks.filter(currentItem => {
	            if(currentItem.id !== action.payload.id) { /* array must be here with id and done keys */
	                return true;
	            }

	            return false;
	        });
		}
		default:
			return state;
	}
}
