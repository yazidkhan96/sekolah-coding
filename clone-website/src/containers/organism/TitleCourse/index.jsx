const TitleCourse = ({title,description}) => {
    return (
        <>
            <h2 className="lead mb-3">{title}</h2>
            <p className="ms-auto lead">{description}</p>
        </>
    );
}

export default TitleCourse;