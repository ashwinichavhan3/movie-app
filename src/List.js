import React, {ReactDOM, useState, useEffect } from 'react';
import Pagination from './Pagination';
import MovieList from './MovieList.js';
import { initialMovies } from  "./movies.js";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    
      setPosts(initialMovies.movie1);
     
  });
 
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
console.log(currentPosts);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Movie List</h1>
     <MovieList posts={currentPosts}  />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;