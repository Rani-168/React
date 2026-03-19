import { useState } from 'react';
function FirstComponent(){
    let [num, setNum] = useState(0);
    function increase(){
        setNum(num + 1);
    }

    function decrese(){
        setNum(num - 1);
    }

    function reseat(){
        setNum(0);
    }

    return (
        <div>
            <h1>num is {num}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrese}>decerse</button>
            <button onClick={reseat}>resest</button>

        </div>
    )
// let info = [
//     {
//       "id": 1,
//       "todo": "Do something nice for someone you care about",
//       "completed": false,
//       "userId": 152
//     },
//     {
//       "id": 2,
//       "todo": "Memorize a poem",
//       "completed": true,
//       "userId": 13
//     },
//     {
//       "id": 3,
//       "todo": "Watch a classic movie",
//       "completed": true,
//       "userId": 68
//     },
//     {
//       "id": 4,
//       "todo": "Watch a documentary",
//       "completed": false,
//       "userId": 84
//     }]

    // let newarray = info.map((s)=>{
    //     return<div key={s.id}>
    //     <p>{s.todo}</p>
    //     <p>Status: {s.completed ? "Done" : "Pending"}</p>
    //   </div>
    // });
    // return (
    //     <div>
    //         <h1>React js day 03</h1>
    //         {newarray}
    //     </div>
    // )
}
export default FirstComponent;


// when we use arrray or list by map then use unque key
  // unidirsection flow of data in react
  //state :
//it is a value ,which can change // when it change then update the coponent automatice //  state is rerender 
