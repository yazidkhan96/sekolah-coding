const CardCoursePage = ({foto,title,description,price}) => {
    return ( 
        <div className="card mt-3 shadow-lg rounded-top mx-3" style={{ width: '350px' }}>
        <img className="card-img-top rounded " src={foto} alt="Card cap" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text lead">{description}</p><br />
            <b>{price}</b>
        </div>
    </div>
     );
}
 
export default CardCoursePage;