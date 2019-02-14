import { HENDLE_KEY_PRESS } from "../actions/actionTypes";

const initialState = {value: ''};

export default function(state=initialState, action) {
	switch(action.type) {
		case HENDLE_KEY_PRESS: {
			if(action.payload.key === 'Enter'){ /* must be event in this case */
	            if(!state.value) return;

	            return {
					...state,
					value: ''
				};

	            // this.props.onSubmit(this.state.value);
	        }
	        break;
		}
		default:
			return state;
	}

	return state;
}