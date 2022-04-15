import JournalInput from "../../components/JournalInput/JournalInput";
import Header from "../../components/Header/Header";
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./JournalForm.css"

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
      <Header />
      <div id="journal-form-title">
        {id ?
          <h1>Edit Journal</h1>
        :
          <h1>Add Journal</h1>
        }
      </div>
      <form onSubmit={handleSubmit}>
        <div id="journal-form-input-container">
          <JournalInput 
            form={form}
            handleChange={handleChange}
          />
          <div id="add-journal-btn-container">
            <button
              type="submit"
              id="add-journal-change-btn"
            >
              {id ? 
                'Update'
              :
                'Add'
              }
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
 
export default JournalForm;