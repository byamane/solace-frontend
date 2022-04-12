import NavBarBot from "../../components/NavBarBot/NavBarBot";
import JournalCard from "../../components/JournalCard/JournalCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as journalService from '../../services/journalService'

const JournalList = (props) => {
  console.log('props', props)
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await journalService.getAll()
      console.log('data', data)
      props.setJournalEntries(data)
    }
    fetchData()
  }, [])
  
  return (  
    <>
      <h1>Your Journal</h1>
      <Link to='/journal/new'>
        <button>
          Add Journal Entry
        </button>
      </Link>
      {props.journalEntries.length ? 
        <div id="journal-card-container">
          {props.journalEntries.map((journal, idx) => 
            <JournalCard key={idx} journal={journal}/>
          )}
        </div>
      :
        <></>
      }
    <NavBarBot/>
    </>
  );
}
 
export default JournalList;