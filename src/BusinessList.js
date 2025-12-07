import Business from "./Business";
import { StrictMode } from "react";

const BusinessList = () => {

  return (
    <StrictMode>
      <section className='restaurant container-fluid'>
        <Business />
      </section>
    </StrictMode>
    );  
};

export default BusinessList;
