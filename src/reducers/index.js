// COMBINE REDUCERS -> Join all reducers together
import { counterReducer } from './counter'
import { loggedReducer } from './isLogged'

import { combineReducers } from '@reduxjs/toolkit'

export const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer,
})
