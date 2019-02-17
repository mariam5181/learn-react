import { ADD_LIST_ITEM, HENDLE_KEY_PRESS } from "./actionTypes";

export function addListItem(input_value) {
	return {
		type: ADD_LIST_ITEM,
		payload: 'input_value',
	}
}

export function handleKeyPress(inputValue) {
	return {
		type: HENDLE_KEY_PRESS,
		payload: inputValue,
	}
}
