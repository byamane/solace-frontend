import { Link } from 'react-router-dom'
import './JournalCard.css'

const JournalCard = ({journal, journalImgs}) => {

  const journalDate = new Date(`${journal.date} EST`).toLocaleDateString()

  const emojiIndex = ["🥺", "😐", "🙂", "😄", "🤩"]

  const imgIdx = Math.floor(Math.random() * (journalImgs.length))

  const journalName = journal.name.length > 12 ? `${journal.name.substring(0,12)}...` : journal.name

  return ( 
    <Link 
      to={`/journal/${journal.id}`} 
      className="journal-card-container"
      state={journal}
      style={{textDecoration: 'none'}}  
    >
      <div 
        id="journal-card"
        style={{
          backgroundImage: `url(${journalImgs[imgIdx]})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <h2 id="journal-card-title">{journalName}</h2>
        <div id="journal-card-footer">
          <p id="journal-date">{journalDate}</p>
          <p id="journal-mood">{emojiIndex[journal.mood]}</p>
        </div>
      </div> 
    </Link>
  );
}
 
export default JournalCard;