import './OrderSummary.scss'
import illustration from '../assets/illustration-hero.svg'
import musicIcon from '../assets/icon-music.svg'

function OrderSummary() {
  return (
    <div className='OrderSummaryComponent'>
        <img src={illustration} alt="Illustration of hearing music" />
        <article>
          <h1>Order Summary</h1>
          <p>You can now listen to millions of songs, audiobooks, and podcasts on any 
        device anywhere you like!</p>
          <div className='PriceCard'>
            <img src={musicIcon} alt="Music Icon" />
            <div>
              <div>
                <p className='subtitle'>Annual Plan</p>
                <p>$59.99/year</p>
              </div>
              <a href="">Change</a>
            </div>
          </div>
          <button>Proceed to Payment</button>
          <a href='#'>Cancel Order</a>
        </article>
      </div>
  )
}

export default OrderSummary