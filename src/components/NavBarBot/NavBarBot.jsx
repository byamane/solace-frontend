import { Link } from 'react-router-dom'
import './NavBarBot.css'

const NavBarBot = (props) => {
  return (
    <>
      <nav id='nav-bar-bottom' className="navbar fixed-bottom navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/home'>
            <i className='material-icons bot-nav-icon'>home</i>
          </Link>
          <Link to='/sleep'>
            <i className='material-icons bot-nav-icon'>bedtime</i>
          </Link>
          <Link to='/journal'>
            <i className='material-icons bot-nav-icon dropup-toggle'>menu_book</i>
          </Link>
          <Link to='/meditation'>
            <i className='material-icons bot-nav-icon'>self_improvement</i>
          </Link>
          <Link to='/'>
            <i className='material-icons bot-nav-icon'>logout</i>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBarBot
