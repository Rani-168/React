import { Link } from "react-router-dom"
function Home() {
  return (
  <div>Home Page 
    <br />
 <Link to="/login">Login</Link>
<Link to="/about">About</Link>
<Link to="/product/1">Product1</Link>
<Link to="/product/2">Product2</Link>
<Link to="/product/3">Product3</Link>
  
  </div>
  )
}

export default Home