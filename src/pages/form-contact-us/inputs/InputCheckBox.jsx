export const InputCheckBox = ({label, id, setValue, value}) => {

    function handleChange(){
        if(value){
            setValue(false);
            return
        }
        setValue(true);
    }
  return (
    <label htmlFor={id}>
        <input className="mr-1 accent-primary-green-600" type="checkbox"  name={id} id={id} onChange={handleChange}/>
        <span>{label}</span>
    </label>
  )
}
