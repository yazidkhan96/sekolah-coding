const CourseForm = ({title,body,onTitleChange,onBodyChange,onSubmit,isUpdate}) => {
    return (
        <>
                <div>
                    <div className="form-outline mb-4 bg-form">
                    <input type="text" value={title} id="form4Example1" className="form-control shadow" onChange={(e) => onTitleChange(e.target.value)} placeholder="title"/>
                </div>
                <div className="form-outline mb-4">
                    <textarea className="form-control shadow" value={body} id="form4Example3" rows="4" onChange={(e) => onBodyChange(e.target.value)} placeholder="body"/>
                </div>
               <div className="d-grid">
               <button type="submit" className="btn btn-primary py-2 rounded-pill" onClick={onSubmit}>
                    {
                        isUpdate ? "Update" : "Create"
                    }
                </button>
               </div>
                </div>
        </>
    );
}

export default CourseForm;