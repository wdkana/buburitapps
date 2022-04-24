import { useRef } from "react";

import CartComponent from "../src/components/Cart/Cart";
import FooterComponent from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import useTrackToBottom from "../src/hooks/useTrackBottom";

const Cart = () => {
  const refContainer = useRef(null);
  const [isScrollBottom] = useTrackToBottom({ ref: refContainer });

  return (
    <div ref={refContainer}>
      <Header />
      <CartComponent isScrollBottom={isScrollBottom} />
      <FooterComponent />
    </div>
  );
};

export default Cart;