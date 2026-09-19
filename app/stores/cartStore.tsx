import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IRecipe } from "../types/recipe";

interface ICartStore {
  cart: IRecipe[];
  addToCart: (item: IRecipe) => void;
  removeFromCart: (id: number) => void;
}

export const useCartStore = create<ICartStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const exists = state.cart.some((cartItem) => cartItem.id === item.id);

          if (exists) return state;

          return {
            cart: [...state.cart, item],
          };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
    }),
    { name: "cart-store" },
  ),
);
