import React from 'react';
import ficus from '../../components/assets/ficus.jpg';


import './Home.scss';

const Home = () => {
  return (
    <div>
      <nav className='navbar'>
        <img src='' alt='logo'/>
      </nav>

      <div className="home-container">
        <div className="features-products">
          <div className="feature-header">
            <span>Featured Collections</span>
          </div>
          <div className="feature-carrousel">
            <div className="item-carrousel-card">
              <img className="home-carrousel-img" src='https://cdn.sanity.io/images/y346iw48/production/9431a6a2d231f99395d44cf34449afa761c1284d-2400x3000.jpg?w=640&auto=format' alt='ficus' />
              <span>Easy for beginner</span>
            </div>
            <div className="item-carrousel-card">
              <img className="home-carrousel-img" src='https://cdn.sanity.io/images/y346iw48/production/8d9c12c0e97e2b9dfaf36c786c8f8c09beecb2f1-1200x1553.jpg?w=640&auto=format' alt='ficus' />
              <span>All Live Plants</span>
            </div>
            <div className="item-carrousel-card">
              <img className="home-carrousel-img" src='https://cdn.sanity.io/images/y346iw48/production/e244390ff92ae58582fbd7e4259a13f54112675f-4227x5635.jpg?w=640&auto=format' alt='ficus' />
              <span>Pots and planters</span>
            </div>
            <div className="item-carrousel-card">
              <img className="home-carrousel-img" src='https://cdn.sanity.io/images/y346iw48/production/e43782e8a4d4924749348c092f937d6e75196dff-1200x1553.jpg?w=640&auto=format' alt='ficus' />
              <span>Potting supplies</span>
            </div>
            <div className="item-carrousel-card">
              <img className="home-carrousel-img" src={ficus} alt='ficus' />
              <span>Exotic Plants</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
