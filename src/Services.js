import React from 'react';
import './Services.css';
function Services () {
  return (
    <div className="services">
      <p className="category">CATEGORY</p>
      <p className="wobs">We Offer Best Services</p>
<div className='service-cont' >
      <div className="services-items">
        <div className="services-items-img">
          <img src={require ('./images/serv1.png')} alt="services-1" />
        </div>
        <h4 className="services-head">Calculated Weather</h4>
        <p className="services-text">
          Built Wicket longer admire do barton vanity itself do in it.
        </p>
      </div>
      <img src={require ('./images/effect1.png')} className='effect' alt="services-1" />
       <div className="services-items act">
        
        <div className="services-items-img">
          <img src={require ('./images/serv1.png')} alt="services-1" />
        </div>
            
        <h4 className="services-head">Calculated Weather</h4>
        <p className="services-text">
          Built Wicket longer admire do barton vanity itself do in it.
        </p>
      </div> <div className="services-items">
        <div className="services-items-img">
          <img src={require ('./images/serv3.png')} alt="services-1" />
        </div>
        <h4 className="services-head">Calculated Weather</h4>
        <p className="services-text">
          Built Wicket longer admire do barton vanity itself do in it.
        </p>
      </div>
      <div className="services-items">
        <div className="services-items-img">
          <img src={require ('./images/serv4.png')} alt="services-1" />
        </div>
        <h4 className="services-head">Calculated Weather</h4>
        <p className="services-text">
          Built Wicket longer admire do barton vanity itself do in it.
        </p>
      </div>
</div>
    </div>
  );
}

export default Services;
