const TitleBenifit = ({gridColumn,display,flexDirection,justify,title,paragraph,classCustome,titleSecond}) => {
    return (
        <div className={`${gridColumn} ${display} ${flexDirection} ${justify} ${classCustome}`}>
            <h3>{title}</h3>
            <h3>{titleSecond}</h3>
            <p>{paragraph}</p>
        </div>
    );
}

export default TitleBenifit;