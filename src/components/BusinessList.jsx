import restaurant_img from '../resources/restaurant_img.jpg'

const BusinessList = ({userRes}) => {

  return (
    <>
      <main className='restaurant container-fluid px-5'>
        <div className='row'>
          {userRes.map((item) => {
            return (
              <div  key={item.properties.lon} className='col-md-6 col-lg-4 col-xxl-3 my-3 p-4'>
                <div className='my-card card'>
                  <img className='my-card-image card-img-top' src={restaurant_img} alt='restuarant profile'/>
                  <div className='my-card-body card-body'>
                    <div className='res-name d-flex justify-content-center'>
                      <h1 className='text-center'>{item.properties.name}</h1>
                    </div> 
                    <div className='res-info py-3 row'>
                      <div className='address col d-flex flex-column flex-wrap align-items-center text-center'>
                        <h2>Address:</h2>
                        {item.properties.housenumber ? <p>{item.properties.housenumber}</p> : <p>-</p>}
                        {item.properties.city ? <p>{item.properties.city}</p> : <p>-</p>}
                        {item.properties.state ? <p>{item.properties.state}</p> : <p>{item.properties.suburb}</p>}
                        {item.properties.postcode ? <p>{item.properties.postcode}</p> : <p>-</p>}
                      </div>
                      <div className='category col d-flex flex-column flex-wrap align-items-center text-center'>
                        <h2>Category:</h2>
                        {item.properties.datasource.raw.cuisine ? <p>{item.properties.datasource.raw.cuisine}</p> : <p>-</p>}
                        <h2>Contact:</h2>
                        {item.properties.datasource.raw.phone ? <p>{item.properties.datasource.raw.phone}</p> : <p>-</p>}
                      </div>               
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>   
      </main>
    </>
  );  
};

export default BusinessList;
