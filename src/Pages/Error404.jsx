// error page
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className='error'>
    <h1>Error: 404</h1>
    <Link to="/"><p>Go to Home</p></Link>
    </div>
  )
}

export default Error404;