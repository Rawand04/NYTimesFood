"use client";

import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "../../app/stores/cartStore";
import { IRecipe } from "@/app/types/recipe";
import { RecipeDetailsData } from "@/app/recipes/[slug]/page";

interface RecipeDetailsProps {
  data: RecipeDetailsData;
}

const RecipeDetails = ({ data }: RecipeDetailsProps) => {
  const { addToCart } = useCartStore();
  const [addedToCart, setAddedToCart] = useState(false);

  const cartData: IRecipe = {
    id: data.id,
    image: data.image,
    title: data.title,
    rating: data.rating,
    meal_type: data.mealType,
  };

  const handleAddToCart = () => {
    addToCart(cartData);
    setAddedToCart(true);
  };

  const actions = [
    {
      label: "Add to Cart",
      onClick: handleAddToCart,
      className:
        "bg-primary text-white rounded-full py-2 px-5 cursor-pointer hover:bg-primary-hover",
    },
    {
      label: "Give",
      className: "border rounded-full px-5 py-2 hover:bg-gray-100",
    },
    {
      label: "Share",
      className: "border rounded-full px-5 py-2 hover:bg-gray-100",
    },
    {
      label: "Print",
      className: "border rounded-full px-5 py-2 hover:bg-gray-100",
    },
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-24 my-10">
      <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:gap-24 justify-center">
        <div className="flex flex-col gap-3">
          <h1 className="font-sourceserif text-3xl md:text-4xl lg:text-5xl max-w-xl">
            {data.title}
          </h1>

          <h2 className="font-franklin underline">By {data.cuisine}</h2>

          <h2 className="font-franklin text-sm text-gray-600">
            Updated March 31, 2026
          </h2>
        </div>

        <hr />

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 font-franklin">
            <div className="flex justify-between border-b py-2">
              <span className="font-bold">Ready In</span>
              <span>{data.readyIn} min</span>
            </div>

            <div className="flex justify-between border-b py-2">
              <span className="font-bold">Rating</span>
              <span>
                {data.rating} ({data.reviews})
              </span>
            </div>

            <div className="flex justify-between border-b py-2">
              <span className="font-bold">Comments</span>
              <span>Read 379 comments</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {actions.map((action) => (
              <button
                key={action.label}
                className={action.className}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </div>

          {addedToCart && (
            <p className="text-green-500">Added to cart successfully!</p>
          )}
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-20 mb-10">
        <Image
          src={data.image}
          alt={data.title}
          width={1000}
          height={700}
          className="w-full rounded-lg object-cover"
        />

        <p className="font-sourceserif text-lg leading-8">
          {data.instructions}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetails;
