import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'

import UsersList from './components/usersList/usersList.component'

function App() {
  const [usersList,setUsersList] = useState([]);

  useEffect(()=>{
    const fetchedUsers = async()=>{
     const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
     const data = await response;
     setUsersList(data.data)
    
    } 
    fetchedUsers();
   },[])

  return (
    <div className="App">
     <UsersList users={usersList} />
    </div>
  );
}

export default App;
