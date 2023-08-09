import React from 'react'
import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo'/>
        </Link>
        <nav>
            <NavLink 
                exact="true" 
                actveclassname="actve" 
                to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" ></FontAwesomeIcon>
            </NavLink>
            <NavLink  
                actveclassname="actve" 
                className="about-link" 
                to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" ></FontAwesomeIcon>
            </NavLink>
            <NavLink 
                actveclassname="actve" 
                className="contact-link" 
                to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" ></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faSkype}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar