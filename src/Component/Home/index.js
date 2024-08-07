
import './index.css'

const Home = () => (
  <>
    
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading"> AgroGuide</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="dresses to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
        "Welcome to AgroGuide, your one-stop solution for farmers! Our app is designed to help you
         make informed decisions and stay ahead of the curve. Get accurate and up-to-date weather 
         forecasts to plan your farming activities, stay informed about market prices for your crops,
        and receive personalized fertilizer suggestions to maximize your yields. With AgroGuide,
        you'll have access to the tools and insights you need to optimize your farming operations and increase your productivity. Download our 
        app now and start growing your success!"

        </p>
        <button type="button" className="shop-now-button">
          Login Now
        </button>
      </div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/031/696/054/non_2x/sprawling-agricultural-farm-featuring-fields-of-crops-ai-generated-photo.jpg"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
