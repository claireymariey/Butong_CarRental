import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/post/')
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog Posts</h1>
        <div>
          {posts.map((obj, index) => (
            <div key={index} className="post-card">
              <h2>{obj.title}</h2>
              <p>{obj.content}</p>
              <p><strong>Author:</strong> {obj.author}</p>
            </div>
          ))}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
