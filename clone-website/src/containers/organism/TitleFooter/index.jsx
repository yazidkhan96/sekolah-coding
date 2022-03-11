const TitleFooter = ({unicodeHtml,title,name,getYear}) => {
    return ( 
        <div className="p-3 text-center">
        <p>{unicodeHtml} <b className="text-footer">{title}</b> by <b className="text-footer">{name}</b> 2020 - {getYear}</p>
    </div>
    );
}
 
export default TitleFooter;