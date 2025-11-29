import React from 'react'
import './Business.css';

function Business() {
  const business = {
    image: '#',
    name: 'Pizza',
    address: '111/222',
    city: 'Denver',
    state: 'Colorado',
    zipCode: '888765',
    category: 'Italian food',
    rating: '5 star',
    'review count': '80'
  }

  return (
    <React.StrictMode>
      <section id='restaurant'>
        <img src={business.image}/>
        <h2>{business.name}</h2>
        <detail className='res-into'>
          <address>
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state}</p>
          </address>
          <div className='additional'>
            <p className='category'>{business.category}</p>
            <p className='rating'>{business.rating}</p>
            <p className='review-count'>{business['review count']}</p>
          </div>
        </detail>
      </section>
    </React.StrictMode>    
  );
}

export default Business;
