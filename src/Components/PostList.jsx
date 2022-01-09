import { useState } from "react";


export function PostList(props) {
    const [postsFilter, setPostsFilter] = useState("");
    const posts = props.posts;
    const onPostSelected = props.onPostSelected;

    function onFilterChange(e){
      setPostsFilter(e.target.value);
    }

    const visiblePosts = posts.filter(post => post.title.indexOf(postsFilter) > -1);

    return <div>
      <input type="text" value={postsFilter} onChange={onFilterChange}/>
      <ul calssName="post-list">
      {visiblePosts.length === 0 
      ? "Ei viestejä" :
      visiblePosts.map(post => 
      <li key={post.id}>
        <button onClick={() => onPostSelected(post)}>
          {post.title}
          </button>
        </li>)}
    </ul>
    <div className ="post-count">{visiblePosts.length} / {posts.length} viestiä</div>
  </div>
}