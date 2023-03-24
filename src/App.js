import { Fragment } from "react";
import Cart from "./component/Cart/Cart";
import Headers from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";


function App() {
  return (
    <Fragment>
      <Cart/>
      <Headers/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
