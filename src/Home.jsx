import { Link } from "react-router-dom"
function Home() {
  return (
  <div>Home Page 
    <br />
 <Link to="/login">Login</Link>
 <br />
<Link to="/about">About</Link>
<br />
<Link to="/product/1">Product1</Link>
<br />
<Link to="/product/2">Product2</Link>
<br />
<Link to="/product/3">Product3</Link>
  
  </div>
  )
}

export default Home

// OR by key = id

// import { Link } from "react-router-dom";

// function Home() {
//   const products = [1, 2, 3];

//   return (
//     <div>
//       <h2>Home Page</h2>

//       <Link to="/login">Login</Link> <br />
//       <Link to="/about">About</Link> <br />

//       {products.map((id) => (
//         <div key={id}>
//           <Link to={`/product/${id}`}>Product {id}</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;