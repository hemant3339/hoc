
import './App.css';
import React,{ useState} from 'react';

function App() {
  return (
    <div className="App">
    <h1>HOC</h1>
    <HOCred cmp={Counter}></HOCred>
    <HOCblue cmp={Counter}></HOCblue>
    </div>
  );
}
function HOCred(p)
{
  return <h2 style={{backgroundColor:'red',width:100}}><p.cmp /></h2>
}
function HOCblue(p)
{
  return <h2 style={{backgroundColor:'blue',width:100}}><p.cmp /></h2>
}
function Counter()
{
  const [count,setCount]=useState(0)
  return<div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
}

export default App;
