import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://www.pngplay.com/wp-content/uploads/6/Agriculture-Green-Icon-PNG.png"
      />
      <h1 className="title">AgroGuide</h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/Weather">
        WeatherForecast
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/CropCost">
          CropCost
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/Fertilizers">
        Fertilizers
        </Link>
      </li>



      <li className="link-item">
        <Link className="route-login-link" to="/Login">
        Login
        </Link>
      </li>
     

    </ul>
  </nav>
)

export default Header