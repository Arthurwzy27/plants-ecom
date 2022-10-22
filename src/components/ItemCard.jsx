import React from 'react';

import './scss/ItemCard.scss';
import ficus from './assets/ficus.jpg';

const ItemCard = () => {
  return (
    // <>
      <div className='App'>
        <nav className='navbar'>
          <img src='' alt='logo'/>
        </nav>

        <div className="itemCard-container">
          <div className="item-carrousel-img">
            <img className="itemCard-carrousel-img" src={ficus} alt='ficus' />
            <img className="itemCard-carrousel-img" src={ficus} alt='ficus' />
            <img className="itemCard-carrousel-img" src={ficus} alt='ficus' />
            <img className="itemCard-carrousel-img" src={ficus} alt='ficus' />
            <img className="itemCard-carrousel-img" src={ficus} alt='ficus' />
            <img className="itemCard-carrousel-img" src={ficus} alt='ficus' />
            <img className="itemCard-carrousel-img" src={ficus} alt='ficus' />
          </div>

          <div className="item-img">
            <img className="itemCard-img" src={ficus} alt='ficus' />
          </div>

          <div className="itemCard-overview">
            <div className="itemCard-overview-header">
              <div className="itemCard-overview-title">
                <span>Coffee plant</span>
              </div>
              <div className="itemCard-overview-price">
                <span>$ 56</span>
              </div>
            </div>

            <div className="itemCard-overview-body">
              <div className="itemCard-overview-body-options">
                <div className="option">
                  <span>Size:</span>
                  <div className="options-btn">
                    <button className='option-btn'>Small</button>
                    <button className='option-btn'>Medium</button>
                    <button className='option-btn'>Large</button>
                  </div>
                </div>

                <div className="option">
                  <span>Color:</span>
                  <div className="options-btn">
                    <button className='option-btn'>brick</button>
                  </div>
                </div>
              </div>

              <div className="add-cart">
                <button className="add-cart-btn">Add to Cart</button>
                <div className="quantity-btn">
                  <button className='qty-increase-btn'>-</button>
                  <span className='quantity-num-btn'>1</span>
                  <button className='qty-increase-btn'>+</button>
                </div>
              </div>

              <div className="item-description">
                <span className='description-header'>Description</span>

                <div className="description-text">
                  <span>
                    You might be surprised to know the same plant that grows your morning coffee beans is a popular, low-maintenance houseplant! Although it’s unlikely this plant will produce berries inside, its attractive shiny green foliage will liven up any interior space.
                    Each plant is unique; size and shape fluctuate by season so all measurements are shown as a range
                    Small plant measures between 5–10" tall from the soil line to the top of the foliage
                    Arrives in a nursery grow pot nestled in your planter choice
                  </span>

                </div>

                <span className='description-header'>Care guide</span>
                <div className="description-text">
                  <span>
                    Coffee Plant
                    Africa and Asia
                    Plant Care

                    Thrives in bright indirect light.

                    Water every 1-2 weeks, allowing soil to dry out half way down between waterings. Expect to water more often in brighter light and less often in lower light.

                    The occasional pruning will help the leafy Coffee Plant branch out into a bushier specimen.
                    Sad Plant Signs
                    Yellowing leaves, mushy blackened base:
                    Overwatered, root rot
                    Wilting and curling leaves, dry potting mix:
                    Underwatered, thirsty plant
                    Brown tips and edges of leaves:
                    Low humidity
                  </span>

                </div>
                <span className='escription-header'>Care guide</span>
                <span className='description-text'>
                  Coffee Plant
                  Africa and Asia
                  Plant Care

                  Thrives in bright indirect light.

                  Water every 1-2 weeks, allowing soil to dry out half way down between waterings. Expect to water more often in brighter light and less often in lower light.

                  The occasional pruning will help the leafy Coffee Plant branch out into a bushier specimen.
                  Sad Plant Signs
                  Yellowing leaves, mushy blackened base:
                  Overwatered, root rot
                  Wilting and curling leaves, dry potting mix:
                  Underwatered, thirsty plant
                  Brown tips and edges of leaves:
                  Low humidity
                </span>
              </div>


            </div>

          </div>
        </div>


      </div>

    // </>
  )
}

export default ItemCard
