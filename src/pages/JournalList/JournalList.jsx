// import NavBarBot from "../../components/NavBarBot/NavBarBot";
import JournalCard from "../../components/JournalCard/JournalCard";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import * as journalService from '../../services/journalService'
import "./JournalList.css"

import journal1 from '../../assets/journal1.png'
import journal2 from '../../assets/journal2.png'
import journal3 from '../../assets/journal3.png'
import journal4 from '../../assets/journal4.png'
import journal5 from '../../assets/journal5.png'
import journal6 from '../../assets/journal6.png'
import journal7 from '../../assets/journal7.png'
import journal8 from '../../assets/journal8.png'

const JournalList = (props) => {
  
  const journalImgs = [journal1, journal2, journal3, journal4, journal5, journal6, journal7, journal8]
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await journalService.getAll()
      console.log('data', data)
      props.setJournalEntries(data)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (  
    <>
      <h1>Reflect</h1>
      <Link to='/journal/new'>
        <button id="add-journal-btn">
          Add Journal Entry
        </button>
      </Link>
      {props.journalEntries.length ? 
        <div id="journal-card-container">
          {props.journalEntries.map((journal, idx) => 
            <JournalCard key={idx} journal={journal} journalImgs={journalImgs}/>
          )}
        </div>
      :
        <></>
      }
    {/* <NavBarBot/> */}
    </>
  );
}
 
export default JournalList;