import NavBarBot from "../../components/NavBarBot/NavBarBot";
import SleepCard from "../../components/SleepCard/SleepCard"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import * as sleepService from '../../services/sleepService'

const SleepList = (props) => {
  console.log('props', props)

  useEffect(() => {
    const fetchData = async () => {
      const data = await sleepService.getAll()
      console.log('data', data)
      props.setSleepLogs(data)
    }
    fetchData()
  }, [])
  
  return (  
    <>
      <h1>Sleep List!</h1>
      <Link to='/sleep/new'>
        <button>
          Add Sleep
        </button>
      </Link>
      {props.sleepLogs.length ? 
        <div>
          {props.sleepLogs.map((sleep, idx) => 
            <SleepCard key={idx} sleep={sleep}/>
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