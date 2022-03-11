import DescriptionAdvantage from "../../containers/organism/DescriptionAdvantage"

import { FaVideo,FaUser } from 'react-icons/fa';
import { FcTodoList } from "react-icons/fc";
import { BsClockFill } from "react-icons/bs";

const Advantage = () => {
    return (
        <div className="container-fluid mt-5">
        <div className="row">
            <DescriptionAdvantage icon={<FcTodoList/>} total="90 +" description="Belajar dengan 40 lebih course tersedia"/>
            <DescriptionAdvantage icon={<FaVideo/>} total="2000 +" description="Memiliki lebih dari 2000 video"/>
            <DescriptionAdvantage icon={<BsClockFill/>} total="15.000 +" description="Total waktu lebih dari 15.000 jam"/>
            <DescriptionAdvantage icon={<FaUser/>} total="1.000.000 +" description="Bergabung bersama lebih dari 1.000.000+ Member"/>
        </div>
    </div>
    );
}
 
export default Advantage;