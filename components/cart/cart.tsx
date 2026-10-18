"use client";

import RecipeCard from "../shared/recipe-card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCartStore } from "@/app/stores/cartStore";

type CartProps = {
  loggedIn: boolean;
};

const Cart = ({ loggedIn }: CartProps) => {
  const router = useRouter();
  const { cart } = useCartStore();

  const handleBuy = () => {
    if (loggedIn) {
      router.push("/");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="my-10">
      <h1 className="font-sourceserif text-3xl md:text-4xl mb-8">
        Cart
      </h1>

      {/* Cards */}
      {cart.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.map((item) => (
              <RecipeCard
                key={item.id}
                item={item}
                className="w-full"
                isCartItem={true}
              />
            ))}
          </div>

          <button
            className="block rounded-full text-white mx-auto my-10 px-6 py-2 bg-primary hover:bg-primary-hover"
            onClick={handleBuy}
          >
            Buy Now
          </button>
        </>
      ) : (
        <div className="m-10 text-center">
          <p className="py-4 text-lg">
            Cart is empty!
          </p>

          <Link
            href="/"
            className="bg-primary text-white rounded-full py-2 px-5 cursor-pointer hover:bg-primary-hover"
          >
            Browse recipes
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;