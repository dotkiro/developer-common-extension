import React from 'react'
import { render } from 'react-dom'
import App from './App'


const root = document.createElement('div')

render(<App />, root)

document.body.appendChild(root)
 console.log(23)