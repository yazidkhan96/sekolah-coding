const AboutHome = ({title,description}) => {
    return (
        <>
            <h5>{title}</h5>
            <p className="lead fs-6">{description}</p>
        </>
    );
}

export default AboutHome;