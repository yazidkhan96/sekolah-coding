const BenifitFeature = ({icon,title,paragraph}) => {
    return (
        <>
            <span>{icon}</span><br />
            <span className="lead">{title}</span>
            <p>{paragraph}</p>
        </>
    );
}

export default BenifitFeature;