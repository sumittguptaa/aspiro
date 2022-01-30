import React from 'react';
import image1 from './images/Decore.jpg';
import './Hero.css';
function Hero() {
  return (
            <div className="main">
        <img src={image1} className="decor" alt="image1" />

        {/* <div className="top-nav" >
               <ul>      
          <li className="nav-items logo"> Jadoo</li>
           <li  className="nav-items" >Destinations</li>
           <li className="nav-items" >  Hotels</li>
           <li className="nav-items" >Flights</li>
           <li className="nav-items" >Bookings</li>
           <li className="nav-items" >Login</li>
           <li className="nav-items signup" >Signup</li>
          
           </ul>
        </div> */}
        <div className="hero-content">
          <div className="desc">
            <p className="tagline">Best Destinations around the world</p>
            <p className="heading">
              Travel, enjoy and live a new and full life
            </p>
            <p className="desc-text" >
                Built Wicket longer admire do barton vanity
                 itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>
            <div className="cta" >
            <p className='find-out-more' >Find Out More</p>
            </div>
            <div className='play-demo' >
                <div className='play-button' >
                    {/* <div className='polygon' ></div>
                    <div className='ellipse' ></div> */}
                    <img  className='play-button-img' src={require('./images/play-button.png')} alt="play-button" />
                </div>
                <p className='play-demo-text' >Play Demo</p>
            </div>
          </div>
          <div className='traveller' >
            
          </div>
        </div>
      </div>
  )
}

export default Hero;

