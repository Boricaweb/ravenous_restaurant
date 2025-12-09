import { StrictMode } from "react";
import restaurant_img from './restaurant_img.jpg'

const BusinessList = ({userRes}) => {

  return (
    <StrictMode>
      <section className='restaurant container-fluid'>
        <div className='row m-3'>
          {userRes.map((item) => {
            return (
              <div  key={item.properties.lon} className='col-md-4 col-sm-6 my-3 p-4'>
                <div className='my-card card'>
                  <img className='card-img-top' src={restaurant_img} alt='restuarant profile'/>
                  <div className='card-body'>
                    <div className='res-name d-flex justify-content-center'>
                      <h3 className='text-center'>{item.properties.name}</h3>
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
      </section>
    </StrictMode>
  );  
};

export default BusinessList;
