const Input = ({formControl,formControlSize,type,placeholder}) => {
    return <input placeholder={placeholder} type={type} className={`${formControl} ${formControl}`}/>

}
 
export default Input;