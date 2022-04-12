import NavBarBot from "../../components/NavBarBot/NavBarBot";
import JournalCard from "../../components/JournalCard/JournalCard";
import { Link } from "react-router-dom";

const JournalList = (props) => {
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