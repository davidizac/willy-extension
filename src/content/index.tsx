import ReactDOM from 'react-dom'
// eslint-disable-next-line node/no-unpublished-import
import 'tailwindcss/tailwind.css'
import { useInspector } from './src/components/Inspector'

import Content from './Content'

const container = document.createElement('div')
document.documentElement.prepend(container)

const Inspect = () => {
  const { startInspect, stopInspect } = useInspector()
  startInspect()
  return (
    <Content /> 
  )
}

ReactDOM.render(<Inspect />, container)
