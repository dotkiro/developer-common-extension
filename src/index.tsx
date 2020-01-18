import React from 'react'
import { render } from 'react-dom'
import App from './App'
import c from './manifest.json'
console.log(c)

const root = document.createElement('div')

render(<App />, root)

document.body.appendChild(root)
