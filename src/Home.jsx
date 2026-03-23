import { Link } from "react-router-dom"
function Home() {
  return (
  <div>Home Page 
    <br />
   <Link to="/Login">login</Link>
   <Link to="/About">About</Link>
   <Link to="/product/1">product1</Link>
   <Link to="/product/2">product2</Link>
   <Link to="/product/3">product3</Link>
  
  </div>
  )
}

export default Home