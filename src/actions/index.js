// ACTION INCREMENT: simple function that returns an object

export const increment = (value) => {
	return {
		type: 'INCREMENT',
		payload: value,
	}
}
export const decrement = (value) => {
	return {
		type: 'DECREMENT',
		payload: value,
	}
}

export const signIN = () => {
	return {
		type: 'SIGN_IN',
	}
}
