import './SleepList.css'
import NavBarBot from "../../components/NavBarBot/NavBarBot";
import SleepCard from "../../components/SleepCard/SleepCard"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import * as sleepService from '../../services/sleepService'

import sleep1 from '../../assets/sleep1.png'
import sleep2 from '../../assets/sleep2.png'
import sleep3 from '../../assets/sleep3.png'
import sleep4 from '../../assets/sleep4.png'
import sleep5 from '../../assets/sleep5.png'
import sleep6 from '../../assets/sleep6.png'
import sleep7 from '../../assets/sleep7.png'
import sleep8 from '../../assets/sleep8.png'
import sleep9 from '../../assets/sleep9.png'

const SleepList = (props) => {
  // console.log('props', props)
  const sleepImgs = [sleep1, sleep2, sleep3, sleep4, sleep5, sleep6, sleep7, sleep8, sleep9]

  useEffect(() => {
    const fetchData = async () => {
      const data = await sleepService.getAll()
      console.log('data', data)
      props.setSleepLogs(data.reverse())
    }
    fetchData()
  }, [])
  
  return (  
    <>
      <h1 id="sleep-logs-title">Sleep Logs!</h1>
      <Link to='/sleep/new'>
        <button id='add-sleep-btn-sleep-list'>
          Add Sleep
        </button>
      </Link>
      {props.sleepLogs.length ? 
        <div id='sleep-card-sleep-list'>
          {props.sleepLogs.map((sleep, idx) => 
            <SleepCard key={idx} sleep={sleep} sleepImgs={sleepImgs}/>
          )}
        </div>
      :
        <></>
      }
      <NavBarBot />
    </>
  );
}
 
export default SleepList;