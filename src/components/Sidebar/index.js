
import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import{ faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ()=> {

return (

		<div className="nav-bar">
			<Link className="logo" to="/">
				<img src={LogoS} alt="logo"/>
				<img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
			</Link>

			<nav>
			<NavLink exact="true" activeclassname="active" to="/">
				<FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
			</NavLink>

			<NavLink exact="true" activeclassname="active" className="about-link" to="/about">
				<FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
			</NavLink>

			<NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
				<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
			</NavLink>
			</nav>	

			<ul>
				<li>
					<a 
					href="https://www.linkedin.com/"
					target="_blank"
					rel="noredferrer">
	  				<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
	  				</a>
				</li>

				<li>
					<a 
					href="https://www.telegram.com/"
					target="_blank"
					rel="noredferrer">
	  				<FontAwesomeIcon icon={faTelegram} color="#4d4d4e"/>
	  				</a>
				</li>

				<li>
					<a 
					href="https://github.com/"
					target="_blank"
					rel="noredferrer">
	  				<FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
	  				</a>
				</li>

				<li>
					<a 
					href="https://www.twitter.com/"
					target="_blank"
					rel="noredferrer">
	  				<FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
	  				</a>
				</li>
			</ul>
		</div>
)
}

export default Sidebar