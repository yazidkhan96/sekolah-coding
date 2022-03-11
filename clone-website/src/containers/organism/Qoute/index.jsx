import TitleBenifit from "../TitleBenifit";
import '../../../style/css/Qoute.css'
const Quote = () => {
    return ( 
        <TitleBenifit classCustome="quote text-white" display="d-flex" flexDirection="flex-column" justify="justify-content-center" title=
        {`"Jika kamu tidak sanggup menahan lelahnya belajar maka kamu`} titleSecond={`harus sanggup menahan perihnya kebodohan"`} paragraph="Imam Syafi'i
        " />
     );
}
 
export default Quote;