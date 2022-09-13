import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { configureStore } from '@reduxjs/toolkit'
// Provider connects our global state (store) to our entire app
import { Provider } from 'react-redux'
import { allReducers } from './reducers'

/* eslint-disable no-underscore-dangle */
const store = configureStore({
	reducer: allReducers,
	option:
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__(),
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App store={store} />
		</Provider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
