import React from 'react'
import './Business.css';

const Business = async () => {
  //Fetching data under this line

  //Restaurant data object
  const business = {
    image: ['#'],
    name: ['Pizza'],
    address: ['111/222'],
    city: ['Denver'],
    state: ['Colorado'],
    zipCode: ['888765'],
    category: ['cuisine'],
    rating: ['default'],
    contact: ['80']
  }

  return business;
}

export default Business;
