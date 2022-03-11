const FormLogin = ({ children }) => {
    return (
        <>
            <form className="d-grid">
                {children}
            </form>
        </>
    );
}

export default FormLogin;