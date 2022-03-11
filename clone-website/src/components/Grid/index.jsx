const Grids = ({gridColumns,display,flexDirection,justify,children,margin,containerType,row,idGrid}) => {
    return (
        <div className={`${gridColumns} ${row} ${display} ${flexDirection} ${justify} ${margin} ${containerType}`} id={idGrid}>
            {children}
        </div>
    );
}

export default Grids;