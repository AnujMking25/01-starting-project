import Button from "../../Button/Button";
import Input from "../../Input/Input";
import classes from'./MealItemForm.module.css'
const MealItemForm=()=>{
return(
    <form className={classes.form}>
        <Input label="Amount" input={{
            id:"amount",
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <Button/>
        
    </form>
)
}
export default MealItemForm;