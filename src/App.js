import React, { useEffect, useState } from 'react';
import 'react-traning-sample-api/styles.css';
import { getPosts } from 'react-traning-sample-api';
import './App.css';
import { Skills } from './Components/Skills/skills';
import Image from './Components/Info/image';
// import Text from './Components/Info/text';
import { Projects } from './Components/Projects/projects' ;
import { Textarea } from './Components/Experience/textarea';

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
  <div><Image/></div>
  {/* <div><Text/></div> */}
  <div class="bottomleft"><Projects/></div>
  <div class="bottomcenter"><Textarea/></div>
  </>
}

export default App;
