import { getSession } from "../lib/session";
import Cart from "../components/cart/cart";
const CartPage = async () => {
  const session = await getSession();

  const loggedIn = session ? true : false;
  return <Cart loggedIn={loggedIn} />;
};

export default CartPage;
