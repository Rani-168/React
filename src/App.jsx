import FirstComponent from './FirstComponent'
import './App.css'


// function App() {
//    <FirstComponent> </FirstComponent>

//   return (
    
//    <div>
//    <h1>hiiiiiiiii</h1>
//    <p>hello</p> 
//   <FirstComponent> </FirstComponent>
//    </div>  

   

      
//   )
// }



function App() {
  let isLoggedIn = true;
  let isVisiable = false;
  return(
    <div>
      {isLoggedIn ? <p>Welcome Back</p> : <p>Login in</p>}
      {isVisiable && <div>thiss is div </div>}
    

      <hr />
      <TextCom text="my name is Ankita" city="Pune" age={56}></TextCom>
      <TextCom text="I live in Pune"></TextCom>
      <TextCom text="I love Video editing"></TextCom>
      </div>
  )
}

function TextCom(props){
  console.log("Something", props);
  return (
    <div>
      <p>{props.text}</p>
      <p>{props.city}</p>
      <p>{props.age}</p>
    </div>
  )
}
export default App

