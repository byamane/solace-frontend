const Home = (props) => {
  console.log(props)
  return (  
    <>
      <div>
        <h2>Home page!</h2>
        <h4>Hello, {props.user.name}</h4>
        <button onClick={props.handleLogout}>
          Logout
        </button>
        {/* <a href="/">GO BACK</a> */}
      </div>
    </>
  );
}
 
export default Home;