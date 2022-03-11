import {Link} from 'react-router-dom'
const CategoryCard = ({linkTo,title}) => {
    return ( <Link to={`${linkTo}`} className="text-decoration-none shadow py-2 px-4 mx-2 text-black-50">{title}</Link>);
}
 
export default CategoryCard;