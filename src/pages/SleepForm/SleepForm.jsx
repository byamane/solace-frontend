import NavBarBot from "../../components/NavBarBot/NavBarBot";
import SleepInput from "../../components/SleepInput/SleepInput";
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";

const SleepForm = (props) => {
  const { id } = useParams()
  const location = useLocation()
  // console.log(location.state)
  const sleep = location.state
  const navigate = useNavigate()
  const [form, setForm] = useState({})
  // console.log(props)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('this is a form test', form)
    id ? props.updateSleep(form) : props.addSleep(form)
    id ? navigate(`/sleep/${id}`, {state: form}) : navigate('/sleep')
    // navigate(`/sleep`)
    // console.log(form)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (id) {
      setForm({
        id: sleep.id,
        name: sleep.name,
        rating: sleep.rating,
        notes: sleep.notes
      })
    }
  }, [])

  return (  
    <>
      {id ? 
        <h1>Edit Sleep</h1>
      :
        <h1>Add Sleep</h1>
      }
      <form onSubmit={handleSubmit}>
        <SleepInput 
          form={form}
          handleChange={handleChange}
        />
        <div id="add-sleep-btn-container">
          <button
            type="submit"
            id="add-sleep-btn"
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
 
export default SleepForm;