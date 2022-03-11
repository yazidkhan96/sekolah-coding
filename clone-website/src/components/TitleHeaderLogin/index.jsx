import { FaLinkedin,FaFacebook,FaTwitterSquare } from 'react-icons/fa';
const TitleLogin = ({title,description}) => {
    return ( 
        <div className="text-white mt-5 px-3">
            <h2 className="display-5 fw-bold">{title}</h2>
            <p className="fw-bold">{description}</p>
            <div className="footer-login">
                <div>{<FaLinkedin/>}</div>
                <div>{<FaFacebook/>}</div>
                <div>{<FaTwitterSquare/>}</div>
                <div>privacy policy</div>
                <div>&copy; 2020</div>
            </div>
            
        </div>
     );
}
 
export default TitleLogin;