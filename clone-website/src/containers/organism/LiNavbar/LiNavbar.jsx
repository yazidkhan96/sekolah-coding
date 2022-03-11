import {NavLink} from 'react-router-dom'
const LiNavbar = ({title,styleLink,linkTo}) => {
    return ( 
        <li className="nav-item">
        <NavLink to={`${linkTo}`} className={`nav-link text-decoration-none ${styleLink}`}>
        {title}
        </NavLink>
        </li>
     );
}
 
export default LiNavbar;