import '../../../../style/css/ButtonAdd.css'
const CardsCourse = ({ picture, title, handleDelete, body, isPending,onEdit,onDetail,onCreate}) => {
    return (
        <div className="card mx-4 me-5 border-2 rounded-3 shadow"  style={{ width: '18rem' }}>
            <img onClick={onDetail} src={picture} className="card-img-top rounded" width="300" alt="..." style={{
                cursor: "pointer"
            }}/>

            <div className="card-body">
               <div className="d-flex justify-content-end">
               <button type="button" className="btn btn-primary btn-lg btn-add rounded-circle" onClick={onCreate}>+</button>
               </div>
                <h5 className="card-title text-truncate">{title}</h5>
                <p className="card-text lead text-truncate">{body}</p>
                <button className="btn btn-success px-3 rounded-pill" onClick={onEdit}>Edit</button>
                {
                    isPending === true ? (
                        <div className="spinner-border text-danger" style={{ width: "3rem", height: "3rem" }} role="status">
                            <span className="sr-only"></span>
                        </div>
                    ) : (
                            <button className="btn btn-danger ms-2 rounded-pill" onClick={handleDelete}>Delete</button>
                        )
                }
            </div>
        </div>
    );
}



export default CardsCourse;