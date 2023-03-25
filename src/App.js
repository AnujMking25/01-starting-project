import {useState} from "react";
import Cart from "./component/Cart/Cart";
import Headers from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import CartProvider from "./Store/CartProvider";


function App() {
  const [CartIsVisible, setCartIsVisible] = useState(false);

  const ShowCartHandler =()=>{
setCartIsVisible(true);
  }
  const HideCaryHandler=()=>{
    setCartIsVisible(false);
  }
  return (
    <CartProvider>
      {CartIsVisible && <Cart onClose={HideCaryHandler}/>}
      <Headers onShowCart={ShowCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
