
const DescJumbotron = ({styleSpan,customeStyle,title}) => {
    return ( 
        <>
            <span className={`${styleSpan} ${customeStyle}`}>{title}</span>
        </>
     );
}
 
export default DescJumbotron;