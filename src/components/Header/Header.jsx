import './Header.css'
import solace from '../../assets/solace_header1.png'

const Header = (props) => {
  return (  
    <>
      <div 
        id='header-title-container'
        style={{
          backgroundImage: `url(${solace})`
        }}
      >
      </div>
    </>
  );
}
 
export default Header;