import './App.css';
import { useState,useEffect } from 'react';
export default function App() {
  const [posts, setPosts] = useState({});
  const [error, setError] = useState(null);
  useEffect(()=>{
    fetch('https://res-json-server.herokuapp.com/posts')
    .then(res=>res.json())
    .then(data=>{
      setPosts(data)
    })
    .catch(err=>{
      setError('unable to fetch posts')
    })
  },[])


  return (
    <div className="App">
      <h3>Testing</h3>
    </div>
  );
}

