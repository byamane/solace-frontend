import './Header.css'
import solace from '../../assets/solace_header1.png'

const Header = (props) => {
  return (  
    <>
      <div id='header-title-container'
        style={{
          backgroundImage: `url(${solace})`
        }}
      >
        {/* <img 
          src={solace} 
          alt="Solace"
          id='header-title'
        
        /> */}
      </div>
      {/* <hr id='header-line-break' /> */}
      {/* <span id='header-title'>Solace</span> */}
    </>
  );
}
 
export default Header;