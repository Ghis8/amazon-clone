import React from  'react'
import ReactDOM from 'react-dom'
import App from './App'
import {StateProvider} from './StateProvider'
import reducer,{initialState} from './reducer.js'
import './index.scss'

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<StateProvider initialState={initialState} reducer={reducer}>
		<App/>
	</StateProvider>)