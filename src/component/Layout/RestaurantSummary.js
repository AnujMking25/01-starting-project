import React from "react";

import classes from './Summary.module.css';
const RestaurantSummary=()=>{
return(
    <>
        <div className={classes.body}>
    <h1 className={classes.heading}>Delicious Food,Delivered To You</h1>
    <p className={classes.paragraph}>choose your favorite meal from our broad selection of available meals and enjoy a Delicious
        lunch or dinnerat home.</p>
     <p className={classes.paragraph}>
        All our meals are cooked with high-quality ingredients,just-in-time and of course by experienced chefs!
    </p>
    </div>
    </>
)
}
export default RestaurantSummary;