import Grids from "../../../components/Grid";
import TitleFooter from "../TitleFooter";

const Footer = () => {
    const getFullYear = () => {
        return new Date().getFullYear();
    }
    return ( 
        <Grids containerStyle="container-fluid" margin="mt-5">
            <hr/>
            <TitleFooter unicodeHtml="&copy;" title="daridasar.com" name="yazidakbar" getYear={getFullYear()}/>
        </Grids>
     );
}
 
export default Footer;