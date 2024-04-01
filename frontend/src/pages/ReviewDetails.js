import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function ReviewDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/reviews/" + id
  );
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error} 🥺</p>;
  console.log(data);
  return (
    <div>
      <div key={data.id} className="review-card">
        <h2>{data.attributes.title}</h2>
        <small>console list</small>
        <p>{data.attributes.body}</p>
      </div>
    </div>
  );
}

export default ReviewDetails;
