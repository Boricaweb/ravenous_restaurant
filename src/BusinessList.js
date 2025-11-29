import Business from './Business'
import React from 'react'

const BusinessList = () => {
    return (
        <React.StrictMode>
            <section id='restaurant'>
                <img src='public\restaurant_img.jpg' alt='resaturant profile'/>
                <h2>business.name</h2>
                <detail className='res-into'>
                    <address>
                        <p>business.address</p>
                        <p>business.city</p>
                        <p>business.state</p>
                    </address>
                    <div className='additional'>
                        <p className='category'>business.category</p>
                        <p className='rating'>business.rating</p>
                        <p className='review-count'>business.contact</p>
                    </div>
                </detail>
            </section>
        </React.StrictMode>   
    ) 
};

export default BusinessList;