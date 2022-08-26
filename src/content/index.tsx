import { createRoot } from 'react-dom/client'
import App from './App'

const willyContainer = document.createElement('willy-container')
// willyContainer.classList.add('willy-container')

document.body.append(willyContainer)

const root = createRoot(willyContainer)

root.render(<App />)
