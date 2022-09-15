import { Box, Text } from '@chakra-ui/react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { focusingState } from '../../atoms/focus.state'

export default function HelperButton() {
  const isFocusing = useRecoilValue(focusingState)
  const [, setIsFocusing] = useRecoilState(focusingState)

  const handleClick = () => {
    setIsFocusing(false)
  }
  return (
    <>
      {isFocusing && (
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
          onClick={handleClick}
          cursor={'pointer'}
        >
          <Text>Back to navigation</Text>
        </Box>
      )}
    </>
  )
}
