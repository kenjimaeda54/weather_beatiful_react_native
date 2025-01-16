import { useEffect, useState } from "react"
import { KeyboardEvent, Keyboard } from "react-native"

interface IUseKeyboard {
  keyboardHeight: number
}


export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  useEffect(() => {
    function onKeyboardDidShow(event: KeyboardEvent) {
      setKeyboardHeight(event.endCoordinates.height)
    }

    function onKeyboardDidHide() {
      setKeyboardHeight(0)
    }

    const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow)
    const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide)

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }

  })


  return keyboardHeight
}