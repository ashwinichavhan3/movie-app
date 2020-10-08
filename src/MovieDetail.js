import React from "react";

export default function MovieDetail(props) {
  console.log(props.details);
  return (
    <div>
      <h4>Movie Details</h4>
      <div>{props.details.description}</div>
      <img src={props.details.poster}/>
      <p>Related movies list.....</p>
      <p>Book ticket from here: book my show </p>
    </div>
  );
}

  