import './FormInput.scss';
const FormInput=(props)=>{
    const {title,id} = props;
    return (
        <div>
            <label htmlFor="name">{title}</label>
            <input type="text" name={title} id={id} className="form_input" />
        </div>
    )
}
export default FormInput;