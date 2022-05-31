import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [cartIsActive, setCartIsActive] = useState(false);

  const cartOpenHandler = () => {
    setCartIsActive(true);
  };

  const cartCloseHandler = () => {
    setCartIsActive(false);
  };

  return (
    <CartContextProvider>
      {cartIsActive && <Cart onCloseCart={cartCloseHandler} />}
      <Header onOpenCart={cartOpenHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
