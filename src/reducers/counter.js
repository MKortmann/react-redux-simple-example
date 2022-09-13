// REDUCER -> Check what to do and update the store
export const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + action.payload
		case 'DECREMENT':
			return state - action.payload
		default:
			return state
	}
}
