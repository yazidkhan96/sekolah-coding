const InputFormLogin = ({classLabel,labelInput,typeInput,typeForm,padding,controlForm,idInput,ariaDescriby,placeholder,smallTitle}) => {
    return ( 
        <>
        <div className={`${typeForm} ${padding}`}>
                    <label htmlFor={idInput} className={classLabel}>{labelInput}</label>
                    <input type={typeInput} className={controlForm} id={idInput} aria-describedby={ariaDescriby} placeholder={placeholder} />
                    <small id="emailHelp" className="form-text text-muted">{smallTitle}</small>
                    
        </div>
        </>
     );
}
  
export default InputFormLogin; 