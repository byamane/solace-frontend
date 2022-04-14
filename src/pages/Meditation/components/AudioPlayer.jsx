import { useState, useEffect, useRef } from 'react'
import AudioControls from './AudioControls'
import "./AudioPlayer.css"

const AudioPlayer = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0)
  const [trackProgress, setTrackProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Destructure for conciseness
  const { title, artist, image, audioSrc } = tracks[trackIndex]

  // Refs
  const audioRef = useRef(new Audio(audioSrc))
  const intervalRef = useRef()
  const isReady = useRef(false)

  // Destructure for conciseness
  const { duration } = audioRef.current;

  // Progress bar calc & styling (used in input section in return for "max" and "style")
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%"
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current)

    // Auto-plays next song if over otherwise sets track state to current time of song 
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack()
      } else {
        setTrackProgress(audioRef.current.currentTime)
      }
    }, [1000])
  }

  // Clear any timers already running and sets track state to current time upon a scrub
  const onScrub = (value) => {
    clearInterval(intervalRef.current)
    audioRef.current.currentTime = value
    setTrackProgress(audioRef.current.currentTime)
  }

  // If not already playing, start and run startTimer function to keep track of track state
  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true)
    }
    startTimer()
  }

  // Previous track functionality via tracks array
  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1)
    } else {
      setTrackIndex(trackIndex - 1)
    }
  }

  // Next track functionality via tracks array
  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1)
    } else {
      setTrackIndex(0)
    }
  }

  // if isPlaying is true, play the current song at specified volume, and run startTimer() to track song state --- else pause
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      audioRef.current.volume = 0.1
      startTimer()
    } else {
      audioRef.current.pause()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying])

  // Changing track functionality - pause prev song, change current audioRef to new song and set new track state
  useEffect(() => {
    audioRef.current.pause()
    audioRef.current = new Audio(audioSrc)
    setTrackProgress(audioRef.current.currentTime)

    if (isReady.current) {
      audioRef.current.play()
      // hardcode volume - volume slider for icebox in the future
      audioRef.current.volume = 0.1
      setIsPlaying(true)
      startTimer()
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex])

  useEffect(() => {
    // Pause and clear timer upon page render (ends song when you leave pages, etc.)
    return () => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="audio-player">
      <div className="track-info">
        <img
          className="artwork"
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </div>
    </div>
  );
}

export default AudioPlayer
