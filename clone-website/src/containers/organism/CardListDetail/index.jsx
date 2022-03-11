import { Link } from 'react-router-dom';

const CardListDetail = ({titleTop,yearCourse,imageCard,children,headCourse,body}) => {
    return ( 
                <div className="card rounded shadow-sm">
                    <div className="card-image">
                        <span className="card-notify-badge">{titleTop}</span>
                        <span className="card-notify-year">{yearCourse}</span>
                        <img className="card-img-top rounded-2" height="400" src={imageCard} alt=""/>
                    </div>
                    <div className="card-image-overlay m-auto">
                    {children}
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5>{headCourse}</h5>
                            <p className="lead">{body}</p>
                        </div>
                        <Link className="ad-btn" to="#">View</Link>
                    </div>
                </div>
     );
}
 
export default CardListDetail;