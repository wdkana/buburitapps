import { useRef } from "react";

import CartComponent from "../src/components/Cart";
import Template from "../src/components/Template";
import useTrackToBottom from "../src/hooks/useTrackBottom";

const Cart = () => {
  const refContainer = useRef(null);
  const [isScrollBottom] = useTrackToBottom({ ref: refContainer });

  return (
    <div ref={refContainer}>
      <CartComponent isScrollBottom={isScrollBottom} />
    </div>
  );
};

Cart.layout = Template;

export default Cart;
