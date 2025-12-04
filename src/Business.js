//import Place  from './SearchBar'
import './Business.css';

const Business = () => {
  //Fetching data from Website Geoapify 
  //URL for restaurant api 
  const eatUrl = 'https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=place:';
  const remainEatUrl = '&limit=6&apiKey=';
  //URL for place convert to place-id which use in restaurant API
  const placeUrl = 'https://api.geoapify.com/v1/geocode/search?text=';
  const remainPlaceUrl = '&format=json&apiKey=';
  //My API Key
  const apiKey = '6d03dc4a957141a980faf1ed4892d289';
  //Restaurant data object
  let business = {
    resName: [],
    address: [],
    resCity: [],
    resState: [],
    zipcode: [],
    category: [],
    contact: []
  };

  ////////Fetching part////////

  ///Async...Await version --> error occur, said cannot use async in client side///
  //Fetching place-id part
  /*const placeResponse = await fetch(`${placeUrl}London${remainPlaceUrl}${apiKey}`);
  if (placeResponse.ok) {
    let placeJson = await placeResponse.json();
    const placeId = placeJson.results[0].place_id;
  //Fetching restaurant part
    const eatResponse = await fetch(`${eatUrl}${placeId}${remainEatUrl}${apiKey}`);
    if (eatResponse.ok) {
      let eatJson = await eatResponse.json();
      let eatObjItem = eatJson.features;
      eatObjItem.forEach(item => {
        business.resName.push(item.properties.name);
        business.address.push(item.properties.housenumber);
        business.resCity.push(item.properties.city);       
        business.resState.push(item.properties.state);
        business.zipcode.push(item.properties.postcode);
        business.category.push(item.properties.datasource.raw.cuisine);
        business.contact.push(item.properties.datasource.raw.phone);
      })
    } else {
      throw new Error('Restaurant API request fail!');
    }
  } else {
    throw new Error('Place API request fail!');
  }   
  } catch (error) {
    console.log(error);
  }*/

  ///Promise version///
  fetch(`${placeUrl}New York${remainPlaceUrl}${apiKey}`)
  .then(placeResponse => placeResponse.json())
  .then(placeJson => placeJson.results[0].place_id)
  .then(placeId => fetch(`${eatUrl}${placeId}${remainEatUrl}${apiKey}`))
  .then(eatResponse => eatResponse.json())
  .then(eatJson => eatJson.features)
  //Maybe the issue begin with the Array method systax
  .then(eatObjItem => {
    eatObjItem.forEach(item => {
      business.resName.push(item.properties.name);
      business.address.push(item.properties.housenumber);
      business.resCity.push(item.properties.city);       
      business.resState.push(item.properties.state);
      business.zipcode.push(item.properties.postcode);
      business.category.push(item.properties.datasource.raw.cuisine);
      business.contact.push(item.properties.datasource.raw.phone);  
    })
    return business;
    }
  )
  .then(newBusiness => JSON.stringify(newBusiness))
  .then(string => string)
  .catch(error => console.error(error));    
}
//Export function
export default Business;