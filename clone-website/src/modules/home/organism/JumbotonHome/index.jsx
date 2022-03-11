import Button from "../../../../components/Buttons"
import '../../../../style/css/Jumbotron.css';
import { FaSearch } from 'react-icons/fa';
import TitleJumbotron from "../../../../containers/organism/TitleJumbotron";
import DescJumbotron from "../../../../containers/organism/DescJumbotron";
import HeaderJumbotron from "../../../../containers/organism/HeaderJumbotron";
import Input from "../../../../components/input";

const JumbotronHome = () => {
    return ( 
        <div className="jumbotron jumbotron-image">
                <div className="container">
                    <HeaderJumbotron display="d-flex" flexDirection="flex-row" justify="justify-content-start" sizeHeader="display-3"/>
                    <TitleJumbotron title="daridasar.com" sizeTitle="display-4" AreaTitle="d-flex justify-content-start"/>
                    <DescJumbotron styleSpan="lead d-flex fw-bold" customeStyle="deskripsi" title="Mulai Karirmu di dunia programming dengan belajar"/>
                    <DescJumbotron styleSpan="lead d-flex fw-bold" customeStyle="deskripsi" title="pemrogramman bersama kami mulai dari dasar."/>
                    <div className="d-flex flex-row justify-content-start mt-2">
                        <Input formControl="form-control" formControlSize="form-control-md" type="text" placeholder="Search...."/>
                        <Button variant="btn btn-light" type="button" title={<FaSearch/>}></Button>
                    </div>
                </div>
            </div>
     );
}
 
export default JumbotronHome;