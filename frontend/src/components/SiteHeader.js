import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function SiteHeader() {
    const {data, loading, error} = useFetch('http://localhost:1337/api/categories')
    if(loading) return <p>Loading ...</p>
    if(error) return <p>{error} 🥺</p>
    console.log(data)
  return (
    <div className="site-header">
      <Link to="/">
        <h1>Puskas Reviews</h1>
      </Link>
      <nav className="categories">
        <span>Filter reviews by category:</span>
        {data.map(category=>(
           <Link key={category.id} to={`/category/${category.id}`}>
            {category.attributes.name}
           </Link> 
        ))}
      </nav>
    </div>
  );
}

export default SiteHeader;
