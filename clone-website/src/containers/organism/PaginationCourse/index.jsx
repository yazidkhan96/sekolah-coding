import {Link} from 'react-router-dom'
const Pagination = () => {
    return (
        <>
            <nav className="d-flex flex-row justify-content-center mt-5">
                <ul className="pagination">
                    <li className="page-item disabled">
                        <Link className="page-link" to="" tabindex="-1">Previous</Link>
                    </li>
                    <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                    <li className="page-item active">
                        <Link className="page-link" to="">2</Link>
                    </li>
                    <li className="page-item"><Link className="page-link" to="">3</Link></li>
                    <li className="page-item"><Link className="page-link" to="">...</Link></li>

                    <li className="page-item">
                        <Link className="page-link">Next</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Pagination;