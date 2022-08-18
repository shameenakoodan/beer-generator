
const CheckBox = (props)=>{
    const {title,handleChange,checked,id}=props;    
    return (
        <div>
            <label>
                {title}
                <input 
                type="checkbox" 
                checked = {checked}
                onChange={handleChange}
                id={id}/>  
            </label> 
           
        </div>
    )
}
export default CheckBox;