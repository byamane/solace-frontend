import JournalCard from "../../components/JournalCard/JournalCard";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import * as journalService from '../../services/journalService'
import Header from "../../components/Header/Header";
import "./JournalList.css"

import journal1 from '../../assets/journal_1.png'
import journal2 from '../../assets/journal_2.png'
import journal3 from '../../assets/journal_3.png'
import journal4 from '../../assets/journal_4.png'
import journal5 from '../../assets/journal_5.png'
import journal6 from '../../assets/journal_6.png'
import journal7 from '../../assets/journal_7.png'
import journal8 from '../../assets/journal_8.png'

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
      <Header />
      <h1 id="journal-list-title">Reflect</h1>
      <Link to='/journal/new'>
        <button id="add-journal-btn">
          Add Journal Entry
        </button>
      </Link>
      {props.journalEntries.length ? 
        <div id="journal-card-container">
          {props.journalEntries.map((journal, idx) => 
            <JournalCard 
              key={idx} 
              journal={journal} 
              journalImgs={journalImgs}
            />
          )}
        </div>
      :
        <></>
      }
    </>
  );
}
 
export default JournalList;