import { useState, useEffect } from 'react'
import song from "../../../assets/meditate.mp3"

const Timer = () => {
  const [seconds, setSeconds] = useState(300)
  const [isActive, setIsActive] = useState(false)
  
  let audio = new Audio(song)

  function toggle() {
    setIsActive(!isActive)
    if (isActive) {
      audio.play()
    } else {
      audio.pause()
    }
  }

  function reset() {
    setSeconds(300)
    setIsActive(false)
    audio.pause()
    audio.currentTime = 0
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 300) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60

  const result = `${minutes.toString().padStart(1, '0')}:${secs.toString().padStart(2, '0')}`


  return (
    <div className="app">
      <div className="time">
        {result}
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer