import React from 'react'
import { useScramble } from "use-scramble"

function ComponentScrambleText({list}) {
 
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 8000);
    return () => clearInterval(interval);
  });

    const {ref} = useScramble({ 
        text: list[counter % list.length],
        speed: 0.6,
        tick: 2,
        scramble: 20,
      })
  return (
    <p ref={ref}/>
  )
}
export default ComponentScrambleText