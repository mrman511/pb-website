import { useState } from 'react'

export default function useVisualMode(initial, toggleLocalMode) {
  const [mode, setMode] = useState(initial);

  const transition = (newMode) => {
    setMode(newMode);
    if (toggleLocalMode){
      toggleLocalMode();
    }
  }

  return { mode, transition }
}