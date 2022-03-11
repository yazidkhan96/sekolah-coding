const CardPrice = ({head,body,price,startFrom}) => {
    return (
        <div className="card me-4 shadow" style={{ width: '320px' }}>
            <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-3 text-center">{head}</h5>
                <p className="card-text lead text-center">{body}</p><br />
                <div className="d-flex flex-column align-items-center mt-5">
                    <p className="text-center">{startFrom}</p>
                    <h3 className="text-center">{price}</h3>
                </div>
            </div>
        </div>
    );
}

export default CardPrice;