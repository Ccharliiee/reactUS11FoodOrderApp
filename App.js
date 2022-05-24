import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsActive, setCartIsActive] = useState(false);

  const cartOpenHandler = () => {
    setCartIsActive(true);
  };

  const cartCloseHandler = () => {
    setCartIsActive(false);
  };

  return (
    <>
      {cartIsActive && <Cart onCloseCart={cartCloseHandler} />}
      <Header onOpenCart={cartOpenHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
