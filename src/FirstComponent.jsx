// import { useEffect, useState } from 'react';

// function FirstComponent() {

//   let [product, setProduct] = useState([]);
//   let [count, setCount] = useState(0);

//   async function rani() {
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     setProduct(data.products); // correct key
//   }

//   useEffect(() => {
//     rani(); // calling function
//     console.log("Data fetched");
//   }, []);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//         Click me {count}
//       </button>

//       <h2>Product List</h2>

//       {
//         product.map((item) => (
//           <div key={item.id}>
//             <h3>{item.title}</h3>
//             <p>Price: ₹{item.price}</p>
//           </div>
//         ))
//       }

//     </div>
//   );





    
// //     let [num, setNum] = useState(0);
// //     function increase(){
// //         setNum(num + 1)
     
// // }
// // useEffect(()=>{console.log("geda")  
    
// //     }, [])
// //     function decrese(){
// //         setNum(num - 1);
// //          console.log("anikita")
    
// //     }

// //     function reseat(){
// //         setNum(0);
// //         console.log("rani")
// //     }

// //     return (
// //         <div>
// //             <h1>num is {num}</h1>
// //             <button onClick={increase}>Increase</button>
// //             <button onClick={decrese}>decerse</button>
// //             <button onClick={reseat}>resest</button>

// //         </div>
// //     )


// //      const [name, setName] = useState("");

// //   function handleChange(event) {
// //     setName(event.target.value);
// //   }

// //   return (
// //     <div>
// //       <input type="text" value={name} onChange={handleChange} placeholder="Type your name..."/>
// //       <p>📝 Your name: {name}</p>
// //     </div>
// //   );
// // let info = [
// //     {
// //       "id": 1,
// //       "todo": "Do something nice for someone you care about",
// //       "completed": false,
// //       "userId": 152
// //     },
// //     {
// //       "id": 2,
// //       "todo": "Memorize a poem",
// //       "completed": true,
// //       "userId": 13
// //     },
// //     {
// //       "id": 3,
// //       "todo": "Watch a classic movie",
// //       "completed": true,
// //       "userId": 68
// //     },
// //     {
// //       "id": 4,
// //       "todo": "Watch a documentary",
// //       "completed": false,
// //       "userId": 84
// //     }]

// //     let newarray = info.map((s)=>{
// //         return<div key={s.id}>
// //         <p>{s.todo}</p>
// //         <p>Status: {s.completed ? "Done" : "Pending"}</p>
// //       </div>
// //     });
// //     return (
// //         <div>
// //             <h1>React js day 03</h1>
// //             {newarray}
// //         </div>
// //     )
// }
// export default FirstComponent;



// // when we use arrray or list by map then use unque key
//   // unidirsection flow of data in react
//   //state :
// //it is a value ,which can change // when it change then update the coponent automatice //  state is rerender 
// // state is memory of component
// //rerender is expensive operation