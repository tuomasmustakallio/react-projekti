import { useEffect, useState } from 'react';
import 'react-traning-sample-api/styles.css';
import { getPosts } from 'react-traning-sample-api';
import './App.css';


function App() {

  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(function () {

    getPosts().then(function(res){
      console.log(res);
      setPosts(res);
      setLoading(false);
    });
  });

  if (loading) {
    return <div className="posts-app">Ladataan</div>
  }

  return <div className="posts-app">
    <ul calssName="post-list">
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  </div>
}

export default App;
