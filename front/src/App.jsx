import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://127.0.0.1:3000/api/meuble');
      const result = await response.json();

      setData(result);
    }
    fetchData();
  }, []);


  return (
    <ul>
      {data.map(meuble => (
        <li key={meuble.nom}>{meuble.nom}</li>
      ))}
    </ul>
  )
    
}

export default App
