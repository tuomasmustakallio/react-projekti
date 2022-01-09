import { useEffect, useState } from 'react';
import 'react-traning-sample-api/styles.css';
import { getPosts } from 'react-traning-sample-api';
import './App.css';
import { Skills } from './Components/Skills/skills';
import Image from './Components/Info/image';
import { Projects } from './Components/Projects/projects' ;

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(function () {

    getPosts().then(function(res){
      console.log(res);
      setLoading(false);
    });
  });

  if (loading) {
    return <div className="posts-app">Loading</div>
  }

  return <>
  <div class="right"><Skills/></div>
  <div class="image"><Image/></div>
  </>
}

export default App;
