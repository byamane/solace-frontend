// import NavBarBot from "../../components/NavBarBot/NavBarBot";
import SleepInput from "../../components/SleepInput/SleepInput";
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import './SleepForm.css'
import Header from '../../components/Header/Header'

const SleepForm = (props) => {
  const { id } = useParams()
  const location = useLocation()
  console.log(location.state)
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
        date: sleep.date,
        rating: sleep.rating,
        notes: sleep.notes
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (  
    <>
      <Header />
      <div id="sleep-form-title">
        {id ? 
          <h1>Edit Sleep</h1>
          :
          <h1>Add Sleep</h1>
        }
      </div>
      <form onSubmit={handleSubmit}>
        <div id="sleep-form-input-container">
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
        </div>
      </form>
      {/* <NavBarBot /> */}
    </>
  );
}
 
export default SleepForm;