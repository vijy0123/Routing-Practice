// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="wave-logo"
        alt="wave"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="nav-list-items">
      <li className="list-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>

      <li className="list-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>

      <li className="list-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
