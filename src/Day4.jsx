import React, { useState } from "react";

function  Day4(){
 
// const [isVisible, setIsVisible] = useState(true);

//   function toggleVisibility() {
//     setIsVisible(!isVisible);
//   }

//   return (
//     <div>
//       <button onClick={toggleVisibility}>
//         {isVisible ? "Hide" : "Show"} Text
//       </button>

//       {isVisible && <p>Hello, World!</p>}
//     </div>
//   );

  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
  
  const [search, setSearch] = useState("");

  let result = [];

  names.forEach((name, index) => {
    if (name.toLowerCase().includes(search.toLowerCase())) {
      result.push(<p key={index}>{name}</p>);
    }
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Names</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {result.length > 0 ? result : <p>No results found</p>}
    </div>
  );

}




export default Day4