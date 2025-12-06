import Business from "./Business";
import { StrictMode } from "react";

const BusinessList = () => {
  /*<img src='public\restaurant_img.jpg' alt='resaturant profile'/>
                <h2>business.name</h2>
                <detail className='res-into'>
                    <address>
                        <p>business.address</p>
                        <p>business.city</p>
                        <p>business.state</p>
                    </address>
                    <div className='additional'>
                        <p className='category'>business.category</p>
                        <p className='rating'>-</p>
                        <p className='contact'>business.contact</p>
                    </div>
                </detail>
    */

  return (
    <StrictMode>
      <section id="restaurant">
        <Business />
      </section>
    </StrictMode>
    );  
};
export default BusinessList;
