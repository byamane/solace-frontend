import { Link } from 'react-router-dom'
import './JournalCard.css'

const JournalCard = ({journal}) => {

  const journalDate = new Date(`${journal.date} EST`).toLocaleDateString()

  const emojiIndex = ["🥺", "😐", "🙂", "😄", "🤩"]

  return ( 
    <Link 
      to={`/journal/${journal.id}`} 
      className="journal-card-container"
      state={journal}
      style={{textDecoration: 'none'}}  
    >
      <div id="journal-card">
        <h2 id="journal-card-title">{journal.name}</h2>
        <p>{emojiIndex[journal.mood]}</p>
        <p>{journalDate}</p>
      </div>
    </Link>
   );
}
 
export default JournalCard;