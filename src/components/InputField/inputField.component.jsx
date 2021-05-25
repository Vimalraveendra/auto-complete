import React from 'react';
import "./inputField.css"

const InputField = ({inputText,changeText,users,})=>{
  users = users.sort((a,b)=>a.name.localeCompare(b.name));
  console.log('users',users)
    return(

        <div className="input-container">
         <input
          type='text'
           value={inputText} 
           placeholder="Name" 
           onChange={changeText} />
           {
             users.length>0?
             <ul>
             {
             users.map(user=>
               <li key={user.id}>{user.name}</li>
             )}
            </ul>:null
           
           }
          
        </div>
    )
}


export default InputField;