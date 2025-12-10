//import Place  from './SearchBar' below
import {useState, useEffect} from 'react'

//Create function  --> using props from App component
const Business = ({userPlace, userNumber, onFetchApi}) => {
  //Set Hook useState part
  const [data, setData] = useState([]); //Store fetched data
  const [error, setError] = useState(null); //Store error message

  ////////Fetching part////////
  ///Async...Await version --> error occur, if I use async without useState and useEffect///
  //Set Hook useEffect part for async and await function
  useEffect(() => {
      //Fetching data from Website Geoapify
      //URL for restaurant api
      const eatUrl = "https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=place:";
      const firstRemainEatUrl = "&limit=";
      const secondRemainEatUrl = "&apiKey=";

      //URL for place convert to place-id which use in restaurant API
      const placeUrl = "https://api.geoapify.com/v1/geocode/search?text=";
      const remainPlaceUrl = "&format=json&apiKey=";

      //My API Key
      const apiKey = process.env.REACT_APP_API_KEY;

      //Async function to fetch data
      const fetchData = async () => {     
      //Retrieve place-id by convert place name from another component input --> London
      const placeResponse = await fetch(`${placeUrl}${userPlace}${remainPlaceUrl}${apiKey}`);
      try {
        if (!placeResponse.ok) {
          throw new Error('Fetching place-id API False');
        }
        const placeJson = await placeResponse.json();
        const placeId = placeJson.results[0].place_id;
        //import number of restaurant from another component input
        const eatResponse = await fetch(`${eatUrl}${placeId}${firstRemainEatUrl}${userNumber}${secondRemainEatUrl}${apiKey}`);
        if (!eatResponse.ok) {
          throw new Error('Fetching restaurant API False');
        }
        const eatJson = await eatResponse.json();
        setData(eatJson.features);
        //Send fetched data to App component
        onFetchApi(eatJson.features);
      } catch(err) {
        setError(err);
      }
    }
    fetchData();
  }, [userPlace, userNumber, onFetchApi, data]);

  if (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }

  return null;
};

//Export function
export default Business;
