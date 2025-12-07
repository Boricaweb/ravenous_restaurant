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
  const firstRemainEatUrl = "&limit=";
  const secondRemainEatUrl = "&apiKey=";

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
      //Retrieve place-id by convert place name from another compenent input --> London
      const placeResponse = await fetch(`${placeUrl}London${remainPlaceUrl}${apiKey}`);
      try {
        if (!placeResponse.ok) {
          throw new Error('Fetching place-id API False');
        }
        const placeJson = await placeResponse.json();
        const placeId = placeJson.results[0].place_id;
        //import amout of restaurant from another compenent input --> 20
        const eatResponse = await fetch(`${eatUrl}${placeId}${firstRemainEatUrl}20${secondRemainEatUrl}${apiKey}`);
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
      <div className='row m-3'>
        {data.map((item) => {
          return (
            <div  key={item.properties.lon} className='col-md-4 col-sm-6 my-3 p-4'>
              <div className='my-card card'>
                <img className='card-img-top' src={restaurant_img} alt='restuarant profile'/>
                <div className='card-body'>
                  <div className='res-name d-flex justify-content-center'>
                    <h3>{item.properties.name}</h3>
                  </div> 
                  <div className='res-info py-3 d-flex justify-content-around'>
                    <div className='address'>
                      {item.properties.housenumber ? <p>{item.properties.housenumber}</p> : <p>Not available</p>}
                      {item.properties.city ? <p>{item.properties.city}</p> : <p>Not available</p>}
                      {item.properties.state ? <p>{item.properties.state}</p> : <p>Not available</p>}
                      {item.properties.postcode ? <p>{item.properties.postcode}</p> : <p>Not available</p>}
                    </div>
                    <div className='category d-flex flex-column align-items-center'>
                      {item.properties.datasource.raw.cuisine ? <p>{item.properties.datasource.raw.cuisine}</p> : <p>Not available</p>}
                      {item.properties.datasource.raw.phone ? <p>{item.properties.datasource.raw.phone}</p> : <p>Not available</p>}
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
