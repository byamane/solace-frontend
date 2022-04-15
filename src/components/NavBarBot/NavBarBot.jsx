import { Link } from 'react-router-dom'
import './NavBarBot.css'

const NavBarBot = (props) => {
  return (
    <>
      <nav className="navbar-bottom">
          <Link to='/home' className="navbar-links">
            <i 
              className='material-icons bot-nav-icon' 
              id='home-btn'
            >
              home
            </i>
          </Link>
          <Link to='/sleep' className="navbar-links">
            <i 
              className='material-icons bot-nav-icon' 
              id='bedtime'
            >
              bedtime
            </i>
          </Link>
          <Link to='/journal' className="navbar-links">
            <i 
              className='material-icons bot-nav-icon dropup-toggle' 
              id='menu-book'
            >
              menu_book
            </i>
          </Link>
          <Link to='/meditation' className="navbar-links">
            <i 
              className='material-icons bot-nav-icon' 
              id='self-improve'
            >
              self_improvement
            </i>
          </Link>
          <Link to='/' className="navbar-links">
            <i 
              onClick={props.handleLogout} 
              className='material-icons bot-nav-icon'
            >
              logout
            </i>
          </Link>
      </nav>
    </>
  )
}

export default NavBarBot
