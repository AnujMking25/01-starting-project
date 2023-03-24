import { Fragment } from "react";
import Headers from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";


function App() {
  return (
    <Fragment>
      <Headers/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
