const Photo = ({source,alt,height,width}) => {
    return ( 
        <img src={source} alt={alt} height={height} width={width} />
     );
}
 
export default Photo;