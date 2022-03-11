const Headerlogin = ({ titleHeader, textHeader,textButton,smallText,classButton,children }) => {
    return <>
        <div>
            <b className="lead text-uppercase">{textHeader}</b>
            <h1 className="fw-bold fs-1 ">{titleHeader}</h1>
            <small className="lead">{smallText} {children} </small>
        </div>
    </>
}

export default Headerlogin;