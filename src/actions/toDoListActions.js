import { ADD_LIST_ITEM, TOGGLE_CHECK, REMOVE_LIST_ITEM } from "./actionTypes";

export function addListItem(inputValue) {
	return {
		type: ADD_LIST_ITEM,
		payload: inputValue,
	}
}

export function toggleCheck(item) {
	return {
		type: TOGGLE_CHECK,
		payload: {
			id: item.id,
			done: item.done,
		},
	}
}

export function removeListItem(item) {
	return {
		type: REMOVE_LIST_ITEM,
		payload: {
			id: item.id,
		},
	}
}
