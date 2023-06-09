import classes from './Header.module.css'
import MealsImages from'../../images/meals.jpg'
import HeaderCardButton from './HeaderCartbutton';

function Headers(props){
return(
  <>
  <header className={classes.header}>
    <h1>ReactMeals</h1>
    <HeaderCardButton onClick={props.onShowCart}/>
  </header>

  <div className={classes['main-image']}>
    <img src={MealsImages} alt="A food Table"/>
    
  </div>
  </>
)
}
export default Headers;