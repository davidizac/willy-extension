import ReactDOM from 'react-dom'

import 'tailwindcss/tailwind.css'
import App from './App'
const container = document.createElement('div')
document.documentElement.prepend(container)

ReactDOM.render(<App />, container)
