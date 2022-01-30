import React from 'react';
import './Destination.css';
function Destination () {
  return (
    <div className="destination">
      <p className="dest-head">Top Selling</p>
      <p className="dest-text">Top Destinations</p>
      <div className="dest-cont">
        <div className="dest-items">
          <img src={require ('./images/Rectangle 1.png')} alt="dest-1" />
          <div>
            <p className="dest-items-text">
              Rome, Italty
            </p>
            <p >
                
            </p>
          </div>
        </div>

        <div className="dest-items">
          <img src={require ('./images/Rectangle 3.png')} alt="dest-1" />
        </div>
        <div className="dest-items">
          <img src={require ('./images/Rectangle 41.png')} alt="dest-1" />
        </div>
      </div>
    </div>
  );
}

export default Destination;
