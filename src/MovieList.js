import React from 'react';

const Posts = ({ posts }) => {
  

  return (
    <table className='table'>
    <th>Id</th>
    <th>title</th>
      {posts.map(post => (
        <tr key={post.id}>
         <td>
          {post.id}
        </td>
        <td>
          {post.title}
        </td>
        </tr>
      ))}
    </table>
  );
};

export default Posts;