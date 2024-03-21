// Home page
import { Link } from "react-router-dom";

const Home = () => {
  return (
      <div className='home'>
        <h1>Welcome to the Best Tunr App</h1>
        <Link to="/songs"><p>Click to Begin!</p></Link>
      </div>
  )
}

export default Home;