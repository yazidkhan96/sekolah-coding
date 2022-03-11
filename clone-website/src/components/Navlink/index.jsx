import {NavLink} from 'react-router-dom'

const Linktopage = ({title,linkTo,classNavlink}) => {
    return ( 
        <NavLink className={classNavlink} to={linkTo}>{title}</NavLink>
     );
}
 
export default Linktopage;