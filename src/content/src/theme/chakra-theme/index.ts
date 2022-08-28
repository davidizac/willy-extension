import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import 'focus-visible/dist/focus-visible'
import * as components from './components'
import * as foundations from './foundations'

const brandsColors = {
  orangePeel: {
    '50': '#FFF4E5',
    '100': '#FFE1B8',
    '200': '#FFCD8A',
    '300': '#FFBA5C',
    '400': '#FFA72E',
    '500': '#FF9300',
    '600': '#CC7600',
    '700': '#995800',
    '800': '#663B00',
    '900': '#331D00',
  },
  lightCyan: {
    '50': '#EAFAF9',
    '100': '#C5F1ED',
    '200': '#A0E9E2',
    '300': '#7BE0D7',
    '400': '#56D7CB',
    '500': '#30CFC0',
    '600': '#27A599',
    '700': '#1D7C73',
    '800': '#13534D',
    '900': '#0A2926',
  },
  tiffanyBlue: {
    '50': '#EAFAF9',
    '100': '#C5F2EE',
    '200': '#A0E9E4',
    '300': '#7AE0D9',
    '400': '#55D8CE',
    '500': '#30CFC3',
    '600': '#26A69C',
    '700': '#1D7C75',
    '800': '#13534E',
    '900': '#0A2927',
  },
  mellowApricot: {
    '50': '#FFF4E5',
    '100': '#FFE1B8',
    '200': '#FFCD8A',
    '300': '#FFB95C',
    '400': '#FFA62E',
    '500': '#FF9200',
    '600': '#CC7500',
    '700': '#995800',
    '800': '#663A00',
    '900': '#331D00',
  },
}
export const theme: Record<string, any> = extendTheme({
  ...foundations,
  components: { ...components },
  colors: { ...baseTheme.colors, ...brandsColors },
  space: {
    '4.5': '1.125rem',
  },
})
