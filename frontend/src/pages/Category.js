import React from "react";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

function Category() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/categories?populate=reviews&filters[id][$eq]=" +
      id
  );

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error} 🥺</p>;
  const refinedData = data[0] ? data[0].attributes.reviews.data : [];

  console.log(data[0].attributes.reviews.data);
  console.log(refinedData);
  return (
    <div>
      {refinedData.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          <small>console list</small>
          <p>{review.attributes.body.substring(0, 200)}</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}

export default Category;
