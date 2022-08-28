import { createRoot } from 'react-dom/client'
import App from './App'

const willyContainer = document.createElement('willy-container')
willyContainer.id = 'willy-builder'

document.documentElement.append(willyContainer)

const root = createRoot(willyContainer)

root.render(<App />)
