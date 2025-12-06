//import Place  from './SearchBar' below
//..............................//

import {useState, useEffect, Suspense} from 'react'

const Loading = () => <h1>Loading...</h1>;

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
    <Suspense fallback={<Loading />}>
      <div>
        {data.map((item) => {
          return <p key={item.properties.lon}>{item.properties.name}</p>;
        })}
      </div>   
    </Suspense>   
  )

};
//Export function
export default Business;
