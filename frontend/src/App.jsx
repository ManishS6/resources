import './App.css';
import { useState,useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function App() {
  const [posts_react, setPostsReact] = useState({});
  const [posts_devOps, setPostsDevOps] = useState({});
  const [error, setError] = useState(null);
  useEffect(()=>{
    fetch('https://res-json-server.herokuapp.com/React.Js')
    .then(res=>res.json())
    .then(data=>{
      setPostsReact(data)
    })
    .catch(err=>{
      setError('unable to fetch posts_react')
    })
    fetch('https://res-json-server.herokuapp.com/DevOps')
    .then(res=>res.json())
    .then(data=>{
      setPostsDevOps(data)
    })
    .catch(err=>{
      setError('unable to fetch posts_devOps '+err)
    })
  },[])


  return (
    <div className="App">
      <h6>Note: This is a first draft made in a hurry</h6>
      {error 
      ?
      <h1>Resources: </h1>
      :
      <h1>⚠Check Backend</h1>
      }
      <h3>React.Js</h3>
      <div style={{display:'flex',margin:'2px',padding:'2px'}}>
        {posts_react &&
          Object.entries(posts_react).map(post=>(
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={post[1].img_url} />
              <Card.Body>
              <Card.Title>{post[1].post}</Card.Title>
              <Card.Text> </Card.Text>
              <a href={post[0].url} alt="butto"><Button variant="primary"> Visit </Button></a>
              </Card.Body>
            </Card>
          ))
        }
      </div>
      <h3>DevOps</h3>
      <div style={{display:'flex',margin:'2px',padding:'2px'}}>
        {posts_react &&
          Object.entries(posts_devOps).map(post=>(
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={post[1].img_url} />
              <Card.Body>
              <Card.Title>{post[1].post}</Card.Title>
              <Card.Text> </Card.Text>
              <a href={post[0].url} alt="butto"><Button variant="primary"> Visit </Button></a>
              </Card.Body>
            </Card>
          ))
        }
      </div>
      <h3>Made with ❤ by ManishS6.</h3>
    </div>
  );
}

