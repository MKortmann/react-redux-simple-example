import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, signIN } from './actions'
import { useEffect } from 'react'

function App({ store }) {
	const counter = useSelector((state) => state.counter)
	const isLogged = useSelector((state) => state.isLogged)

	// DISPATCH -> Execute an action to the REDUCER
	const dispatch = useDispatch()

	useEffect(() => {
		store.subscribe(() => {
			console.log(store.getState())
		})
	}, [])

	return (
		<div className='App'>
			<h1>Counter: {counter}</h1>
			{isLogged ? (
				<h3>Valuabe Information I shouldn't see</h3>
			) : (
				<h3>You are not logged</h3>
			)}

			<button onClick={() => dispatch(increment(5))}>+</button>
			<button onClick={() => dispatch(decrement(5))}>-</button>
			<button onClick={() => dispatch(signIN())}>
				{isLogged ? 'Log OUT' : 'Log IN'}
			</button>
		</div>
	)
}

export default App
