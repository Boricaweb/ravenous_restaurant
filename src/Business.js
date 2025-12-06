//import Place  from './SearchBar' below
//..............................//
import restaurant_img from './restaurant_img.jpg'
import {useState, useEffect, StrictMode} from 'react'

const Business = () => {
  //Set Hook useState part
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  //Fetching data from Website Geoapify
  //URL for restaurant api
  const eatUrl = "https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=place:";
  const remainEatUrl = "&limit=6&apiKey=";

  //URL for place convert to place-id which use in restaurant API
  const placeUrl = "https://api.geoapify.com/v1/geocode/search?text=";
  const remainPlaceUrl = "&format=json&apiKey=";

  //My API Key
  const apiKey = "6d03dc4a957141a980faf1ed4892d289";

  ////////Fetching part////////
  ///Async...Await version --> error occur, said cannot use async in client side///
  //Set Hook useEffect part for async and await function
  useEffect(() => {
    const fetchData = async () => {
      //Retrieve place-id by convert place name from another compenent
      const placeResponse = await fetch(`${placeUrl}London${remainPlaceUrl}${apiKey}`);
      try {
        if (!placeResponse.ok) {
          throw new Error('Fetching place-id API False');
        }
        const placeJson = await placeResponse.json();
        const placeId = placeJson.results[0].place_id;
        const eatResponse = await fetch(`${eatUrl}${placeId}${remainEatUrl}${apiKey}`);
        if (!eatResponse.ok) {
          throw new Error('Fetching restaurant API False');
        }
        const eatJson = await eatResponse.json();
        setData(eatJson.features);
      } catch(err) {
        setError(err);
      }
    }
    fetchData();
  }, [])

  error && <h1>Something go wrong: {error}</h1>;

  return (
    <StrictMode>
      <div className='row m-5'>
        {data.map((item) => {
          return (
            <div  key={item.properties.lon} className='col-md-4 my-3'>
              <div cassName='card'>
                <img className='card-img-top' src={restaurant_img} alt='restuarant profile'/>
                <div cassName='card-body'>
                  <div className='res-name m-2'>
                    <h2>{item.properties.name}</h2>
                  </div> 
                  <div className='res-info d-flex m-2'>
                    <div className='address'>
                      <p>{item.properties.housenumber}</p>
                      <p>{item.properties.city}</p>
                      <p>{item.properties.state}</p>
                      <p>{item.properties.postcode}</p>
                    </div>
                    <div className='category'>
                      {item.properties.datasource.raw.cuisine ? <p>{item.properties.datasource.raw.cuisine}</p> : <p>no info</p>}
                      {item.properties.datasource.raw.phone ? <p>{item.properties.datasource.raw.phone}</p> : <p>no info</p>}
                    </div>               
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>   
    </StrictMode>   
  )

};
//Export function
export default Business;
