const HeaderTitleCourse = ({head,description,fontStyle,textAlign,marginTop,marginLeft,marginRight,marginBottom,marginX,marginY,styleParagraph}) => {
    return ( 
        <div className={`${textAlign} ${marginTop} ${marginBottom} ${marginX} ${marginY} ${marginLeft} ${marginRight}`}>
                <h4 className={`${fontStyle}`}>{head}</h4>
                <p className={`${styleParagraph}`}>{description}</p>
        </div>
     );
}
 
export default HeaderTitleCourse;