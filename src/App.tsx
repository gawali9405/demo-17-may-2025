import { useState } from 'react' 
import './App.css'
import Login from './Login'
import Register from './Register'

function App() {
  const [count, setCount] = useState(0)
  const [dataFromChild,setDataFromChild] = useState({})

  return (
    <>
   <div>
    <p>{count}</p>
     <h2> Data from Child : {JSON.stringify(dataFromChild)}</h2>
      <Login setDataFromChild={setDataFromChild} setCount ={setCount}/>
    </div> 

    <div>
      <Register setDataFromChild={setDataFromChild}/>
    </div>
    </>
  )
}

export default App
