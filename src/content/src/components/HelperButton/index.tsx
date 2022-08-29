import { Box, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { focusingState } from '../../atoms/focus.state'

export default function HelperButton() {
  const [showButton, setShowButton] = useState(false)
  const isFocusing = useRecoilValue(focusingState)

  useEffect(() => {
    if (isFocusing) setShowButton(true)
    else setShowButton(false)
  }, [isFocusing])

  return (
    <>
      {showButton && (
        <Box
          pos={'absolute'}
          margin='auto'
          top={'30px'}
          zIndex='4444'
          left={'45%'}
          display='flex'
          justifyContent={'center'}
          alignItems={'center'}
          height={'42px'}
          px={'20px'}
          borderRadius='20px'
          bg={'white'}
        >
          <Text>Back to navigation</Text>
        </Box>
      )}
    </>
  )
}
