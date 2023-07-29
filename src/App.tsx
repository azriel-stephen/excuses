import { useState } from 'react';
import './App.css'
import Axios from 'axios'
type ExcuseType  = {
  excuse: string
}
type ExcuseReason = 'Office' | 'Family' | 'Party';
function App() {
  const [excuse, setExcuse] = useState<string | undefined>(undefined);
  const handleExcuse = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(e.target.innerHTML)
    const text = e.currentTarget.innerHTML as ExcuseReason;
    getExcuse(text)
  }
  const getExcuse = (arg: ExcuseReason) => {
      Axios.get<ExcuseType[]>(`https://excuser-three.vercel.app/v1/excuse/${arg.toLowerCase()}`).then(res => (
        // console.log(res.data[0].excuse)
        setExcuse(res.data[0].excuse)
      ))
  }
  return (
    <>
      <h1>Generate an Excuse:</h1>
      <h2>Reasons:</h2>
      <button onClick={handleExcuse}>Party</button>
      <button onClick={handleExcuse}>Family</button>
      <button onClick={handleExcuse}>Office</button>
      <br />
      {excuse && <p>{excuse}</p>}
    </>
  )
}

export default App
