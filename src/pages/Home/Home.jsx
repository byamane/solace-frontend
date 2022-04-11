import NavBarBot from "../../components/NavBarBot/NavBarBot";

const Home = (props) => {
  // console.log(props)
  return (  
    <>
      <div>
        <h2>Home page!</h2>
        <h4>Hello, {props.user.name}</h4>
        {/* <a href="/">GO BACK</a> */}
      </div>
      <NavBarBot handleLogout={props.handleLogout}></NavBarBot>
    </>
  );
}
 
export default Home;