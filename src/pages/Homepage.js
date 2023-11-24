import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>Homepage

     <Link to={"/search-page"}><button>Search your next book</button></Link> 
    </div>
  )
}

export default Homepage