import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';


function App() {

  //let name = "talk:D";
  let[name, setName] = useState("talk:D");

  let [num,setNum] = useState(1);
  console.log(num);

  //setTimeout(() => {setNum(num+=1)}, 5000);

  const [numList, setNumList] = useState([]);
  function numRecording() {
    setNumList([...numList, num]);
    setNum(0);
  }

  const [posts, setPosts] = useState([]);
  

  return (
    
    <div className="App">
      <header className="App-header">
        <div style ={{backgroundColor:"red"}}>{name}</div>
        <div className="number">{num}</div>
        <button onClick={() => {setNum(num+=1)}}>숫자 증가</button>
        <button onClick={() => {setNum(num-=1)}}>숫자 감소</button>
        <button onClick={(numRecording)}>숫자 기록</button>
        <h1>저장된 숫자</h1>
        <ul>
          {numList.map((num)=> (
            <li>{num}</li>
          ))}
        </ul>
      </header>
    </div>
  
  );
}

export default App;
