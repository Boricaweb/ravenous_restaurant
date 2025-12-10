import restaurant_img from './restaurant_img.jpg'

const BusinessList = ({userRes}) => {

  return (
    <>
      <section className='restaurant container-fluid px-5'>
        <div className='row'>
          {userRes.map((item) => {
            return (
              <div  key={item.properties.lon} className='col-md-4 col-sm-6 my-3 p-4'>
                <div className='my-card card'>
                  <img className='card-img-top' src={restaurant_img} alt='restuarant profile'/>
                  <div className='card-body'>
                    <div className='res-name d-flex justify-content-center'>
                      <h2 className='text-center'>{item.properties.name}</h2>
                    </div> 
                    <div className='res-info py-3 row'>
                      <div className='address col d-flex flex-column flex-wrap align-items-center text-center'>
                        <h3>Address:</h3>
                        {item.properties.housenumber ? <p>{item.properties.housenumber}</p> : <p>-</p>}
                        {item.properties.city ? <p>{item.properties.city}</p> : <p>-</p>}
                        {item.properties.state ? <p>{item.properties.state}</p> : <p>-</p>}
                        {item.properties.postcode ? <p>{item.properties.postcode}</p> : <p>-</p>}
                      </div>
                      <div className='category col d-flex flex-column flex-wrap align-items-center text-center'>
                        <h3>Category:</h3>
                        {item.properties.datasource.raw.cuisine ? <p>{item.properties.datasource.raw.cuisine}</p> : <p>-</p>}
                        <h3>Contact:</h3>
                        {item.properties.datasource.raw.phone ? <p>{item.properties.datasource.raw.phone}</p> : <p>-</p>}
                      </div>               
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>   
      </section>
    </>
  );  
};

export default BusinessList;
