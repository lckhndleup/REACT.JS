import './App.css';
import {useState} from "react";

function App() {
  const [name,setName] = useState("mehmet");
  const [age,setAge] = useState(29);
  const [friends,setFriends] = useState(["ahmet","mehmet"]);
  const [adress,setAdress] = useState({city:"Antalya",zip:37090})
  return (
    <div className="App">
      <h1>merhaba {name}</h1> 
      <h1>Yaşınız:{age}</h1>
      <button onClick={()=>{setName("mali")}}>ismi değiştir </button>
      
      <button onClick={()=>{setAge(23)}}>Yaşı değiştir</button>

      <h1>friends</h1>
      <button onClick={()=>setFriends([...friends,"mali"])}>add friend</button>
      {friends.map((friend,index)=>(
        <div key={index}>{index+1}-{friend}</div>
      ))}

      <br></br>
      <hr></hr>
      <h1>Adress</h1>
      <h4>city:{adress.city}--zipcode:{adress.zip}</h4>

      <button onClick={()=>(setAdress({...adress,city:"istanbul"}))}>change adress</button>

      


    </div>
  );
}

export default App;
