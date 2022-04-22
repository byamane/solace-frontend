import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './Confirmation.css'

const Confirmation = (props) => {
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const resource = props.deleteJournal ? 'journal' : 'sleep'

  const handleDelete = () => {
    props.deleteJournal ? (
      props.deleteJournal && props.deleteJournal(id)
    ) : (
      props.deleteSleep && props.deleteSleep(id)
    )
    navigate(`/${resource}`)
  }

  const delName = state.name.length > 75 ? `${state.name.substring(0,75)}...` : state.name

  return (
    <>
      <Header />
        <div className="page-header" id='delete-conf-title'>
          <h2>Delete Confirmation</h2>
        </div>
        <div id="yayaya">
        <div id='delete-conf-container'>
          <h2 id='delete-conf-msg'>Are you sure you want to delete: </h2>
          <br /> 
          <h4 id='delete-name'>{delName}</h4>
        </div>
        </div>
        <div id='delete-btns-container'>
          <button 
            onClick={handleDelete} 
            type="button"
            id='delete-conf-delete'
            >
            Yes - Delete!
          </button>
          <Link 
            className="btn submit" 
            to={`/${resource}/${id}`} 
            state={state}
          >
            <button 
              id='delete-conf-cancel'
            >
              Cancel
            </button>
          </Link>
        </div>
    </>
  )
}

export default Confirmation