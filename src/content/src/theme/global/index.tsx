import { Global } from '@emotion/react'
import { createGlobalStyle } from 'styled-components'
import GlobalCSS from '!raw-loader!./index.css'

const GlobalCSSForChakra = () => <Global styles={`${GlobalCSS}`} />

const GlobalCSSForEditor = createGlobalStyle`${GlobalCSS}`

export { GlobalCSSForEditor, GlobalCSSForChakra }
