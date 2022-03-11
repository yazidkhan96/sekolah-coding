const DescriptionAdvantage = ({icon,total,description}) => {
    return ( 
        <div className="col-md-3 text-center">
        <p>{icon}</p>
        <p>{total}</p>
        <p>{description}</p>
    </div>
     );
}
 
export default DescriptionAdvantage;