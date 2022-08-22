import "./CheckBox.scss";
const CheckBox = (props)=>{
    const {title,handleChange,checked,id}=props;    
    return (
        <div>
            {title}
            <input 
                type="checkbox" 
                checked = {checked}
                onChange={handleChange}
            id={id}/> 
        </div>
    )
}
export default CheckBox;