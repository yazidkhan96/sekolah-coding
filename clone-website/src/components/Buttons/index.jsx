const Button = ({title,variant,type,toggle,target,controls,expand,label,Routerlink,classNavlink}) => {
    return (
        <button className={variant} type={type} data-bs-toggle={toggle} data-bs-target={target} aria-controls={controls} aria-expanded={expand} aria-label={label}>
            {title}
        </button>
    );
}
 
export default Button;