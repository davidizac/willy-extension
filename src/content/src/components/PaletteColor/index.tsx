import ColorPaletteCss from '!raw-loader!react-color-palette/lib/css/styles.css'
import { ColorPicker, useColor } from 'react-color-palette'
import CustomCss from '!raw-loader!../../popups/custom.css'

export const PaletteColor = () => {
  const [color, setColor] = useColor('hex', '#121212')
  return (
    <>
      <style>{ColorPaletteCss}</style>
      <style>{CustomCss}</style>
      <ColorPicker width={254} height={128} color={color} onChange={setColor} hideHSV dark />
    </>
  )
}
