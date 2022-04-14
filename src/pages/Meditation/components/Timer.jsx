import { useState, useEffect } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(300)
  const [isActive, setIsActive] = useState(false)
  
  function toggle() {
    setIsActive(!isActive)
  }

  function reset() {
    setSeconds(300)
    setIsActive(false)
  }

  useEffect(() => {
    let interval = null
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
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
      <div className="timer-control-btns">
        <button className={`start-timer-btn button-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="reset-timer-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer