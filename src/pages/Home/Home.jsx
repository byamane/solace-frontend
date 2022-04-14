// import NavBarBot from "../../components/NavBarBot/NavBarBot";
import "./Home.css"
import ThemeSelect from "../../components/ThemeSelect/ThemeSelect";
import solaceTitle from '../../assets/solace_title3.png'

const Home = (props) => {
  // console.log(props)
  return (  
    <>
      <div>
        {/* <h1 className="hp-header">Solace</h1> */}
        <img src={solaceTitle} alt="Solace" id="home-title-img" 
        />
        <h4 className="hp-welcome">Welcome, {props.user.name}</h4>
        <h4 className="hp-message">Log your nightly sleep, reflect on your day in your journal, and practice mindfulness through meditation</h4>
        <div id="theme-select-container">
          <h3 id="select-theme-title">Select a Theme</h3>
          <div id="theme-card-container">
          {props.bgImg.map((img, idx) => 
            <ThemeSelect
            key={idx}
            img={img}
            idx={idx}
            handleBgChange={props.handleBgChange}
            />
            )}
          </div>
        </div>
        <h4 className="hp-footer">Click on one of the icons below to begin</h4>
        {/* <a href="/">GO BACK</a> */}
      </div>
      {/* <NavBarBot handleLogout={props.handleLogout}></NavBarBot> */}
    </>
  );
}
 
export default Home;