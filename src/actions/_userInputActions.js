import { HENDLE_KEY_PRESS } from "./actionTypes";

export function handleKeyPress(inputValue) {
	return {
		type: HENDLE_KEY_PRESS,
		payload: inputValue,
	}
}
