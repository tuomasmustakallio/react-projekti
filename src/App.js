import { useEffect, useState } from 'react';
import 'react-traning-sample-api/styles.css';
import { getPosts } from 'react-traning-sample-api';
import './App.css';
import { PostList } from './Components/PostList';

function App() {

  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(function () {

    getPosts().then(function(res){
      console.log(res);
      setPosts(res);
      setLoading(false);
    });
  });

  function selectPost(post){
    setSelectedPost(post);
  }

  if (loading) {
    return <div className="posts-app">Ladataan</div>
  }

  return <div className="posts-app">
    <PostList posts={posts} onPostSelected={selectPost} />
    <div className="single-post">
      {selectedPost ? <>
      <h1>{selectedPost.title}</h1>
      <p>{selectedPost.body}</p>
      </> : "Ei valittua viestiä"}
    </div>
  </div>
}

export default App;
