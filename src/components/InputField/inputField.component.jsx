import React from 'react';
import "./inputField.css"

const InputField = ({inputText,changeText,users,renderUsername})=>{
  users = users.sort((a,b)=>a.name.localeCompare(b.name));
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
               <li key={user.id} 
               onClick={()=>renderUsername(user.name)}>
               {user.name}
               </li>
             )}
            </ul>:null
           
           }
          
        </div>
    )
}


export default InputField;