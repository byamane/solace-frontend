import NavBarBot from "../../components/NavBarBot/NavBarBot";
import JournalInput from "../../components/JournalInput/JournalInput";
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";

const JournalForm = (props) => {
  const { id } = useParams()
  const location = useLocation()
  console.log(location.state)
  const journal = location.state
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateJournal(form) : props.addJournal(form)
    navigate(`/journal`)
  }
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (id) {
      setForm({
        id: journal.id,
        name: journal.name,
        date: journal.date,
        mood: journal.mood,
        journal: journal.journal
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      {id ?
        <h1>Edit Journal</h1>
      :
        <h1>Add Journal</h1>
      }
      <form onSubmit={handleSubmit}>
        <JournalInput 
          form={form}
          handleChange={handleChange}
        />
        <div id="add-journal-btn-container">
          <button
            type="submit"
            id="add-journal-btn"
          >
            {id ? 
              'Update'
            :
              'Add'
            }
          </button>
        </div>
      </form>
      <NavBarBot />
    </>
   );
}
 
export default JournalForm;