import { HENDLE_KEY_PRESS } from "../actions/actionTypes";

const initialState = () => ({
	value: '',
});

const handleKeyPress = (state, action) => {
	return {
		...state,
		value: action.payload,
	}
}

export default function(state=initialState(), action) {
	switch(action.type) {
		case HENDLE_KEY_PRESS: return handleKeyPress(state, action);
		default: return state;
	}
}
