const HeaderJumbotron = ({display,flexDirection,justify,sizeHeader}) => {
    return ( 
        <div className={`${display} ${flexDirection} ${justify}`}>
            <h1 className={`${sizeHeader}`}>Belajar Pemograman</h1>
        </div>
     );
}
 
export default HeaderJumbotron;