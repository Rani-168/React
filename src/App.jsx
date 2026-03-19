
import  Day4 from './Day4'
import FirstComponent from './FirstComponent'
import './App.css'
import { useState } from 'react'




function App() {


  return (
    <div>
      
       <Day4></Day4>
    </div>
  )

  // let [nums, setNems] = useState([])
  // function Addunums(){
  //   setNems(...nums, 10);
  // }

  // return (
  //   <div>
  //   <button onClick={Addunums}>addnum</button>
  //   {}

  //   </div>
  // )
  

  
//   function sayHello(name) {
//     alert(`👋 Hello, ${name}!`);
//   }
// function SayHello(){
//    sayHello("Rani"); 
// }
//   return (
//     <button onClick={SayHello}>
//       Greet Me 🎉
//     </button>
//   );


  


  // const [name, setName] = useState("");

  // function handleChange(event) {
  //   setName(event.target.value);
  // }

  // return (
  //   <div>
  //     <input type="text" value={name} onChange={handleChange} placeholder="Type your name..."/>
  //     <p>📝 Your name: {name}</p>
  //   </div>
  // );







//    let [isVisiable, setisVisible] = useState(0);
//    function VisibleCheck() {
//       setisVisible(isVisiable + 1);
//    }

//     function VisibleCheck2() {
//       setisVisible(isVisiable + 5);
//    }
//  // 
//   return (

//        <div>  
//       <p>value {isVisiable}</p>
//     <button onClick={VisibleCheck}>answer</button>
//     <button onClick={VisibleCheck2}>increase 5</button>

   

   
//   <FirstComponent> </FirstComponent>
  
//    </div>  
      
//   )
}



// function App(){
//   let isLoggedIn = true;
//   let isVisiable = false;

//     let message;
//   if (isLoggedIn) {
//     message = <p>Welcome Back</p>;
//   } else {
//     message = <p>Please Login</p>;
//   }

//   return (
//     <div>
//       {isLoggedIn ? <p> Welcome Back</p> : <p>Login in</p>}
//         {isVisiable && <div>thiss is div </div>}
//         <hr />
//         <TextCom text="My name is Rani" city="Pune" age={21}></TextCom>
//         <TextCom text="I live in pune."></TextCom>
//         <TextCom text="I love to sketching"></TextCom>
//     </div>
//   )
// }

// function TextCom(props){
//   console.log("somthing", props)
//   return (
//     <div>
//       <p>{props.text}</p>
//       <p>{props.city}</p>
//       <p>{props.age}</p>
//       <FirstComponent> </FirstComponent>
      
//     </div>
//   )
// }

export default App

//how to extand value from  array