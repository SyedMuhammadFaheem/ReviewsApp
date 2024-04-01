import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function Homepage() {
    const {data, loading, error}= useFetch('http://localhost:1337/api/reviews')
    if(loading) return <p>Loading ...</p>
    if(error) return <p>{error} 🥺</p>
  return (
    <div>
      {data.map(review=>(
        <div key={review.id} className="review-card">
            <div className="rating">
                {review.attributes.rating}
            </div>
            <h2>{review.attributes.title}</h2>
            <small>console list</small>
            <p>{review.attributes.body.substring(0,200)}</p>
            <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}

export default Homepage
