const AboutFeature = ({title,feature}) => {
    return (
        <div>
            <h5>{title}</h5>
            <div className="d-flex flex-column">{feature}</div>
        </div>
    );
}

export default AboutFeature;