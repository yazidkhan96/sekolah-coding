const TitlePricing = ({title,description}) => {
    return (
        <div className="mt-5 text-center">
            <h4 className="fw-bold">{title}</h4>
            <p>{description}</p>
        </div>
    );
}

export default TitlePricing;