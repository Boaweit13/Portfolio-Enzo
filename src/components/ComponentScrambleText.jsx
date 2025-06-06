import React from 'react'
import { useScramble } from "use-scramble"

function ComponentScrambleText({ text }) {
    const {ref} = useScramble({ 
        text: text
      })
  return (
    <p ref={ref} />
  )
}
export default ComponentScrambleText