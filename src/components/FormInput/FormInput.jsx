const FormInput=(props)=>{
    const {title,id} = props;
    return (
        <div>
            <label htmlFor="name">{title}</label>
            <input type="text" name={title} id={id} className="form-menu__input" />
        </div>
    )
}
export default FormInput;