"use client";

import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "../../stores/cartStore";
import { ApiRecipe, IRecipe } from "@/app/types/recipe";

interface RecipeDetailsProps {
  data: ApiRecipe;
}

const RecipeDetails = ({ data }: RecipeDetailsProps) => {
  const { addToCart } = useCartStore();
  const [addedToCart, setAddedToCart] = useState(false);

  const cartData: IRecipe = {
    id: data.id,
    image: data.image,
    title: data.name,
    rating: data.rating,
    meal_type: data.mealType,
  };

  const handleAddToCart = () => {
    addToCart(cartData);
    setAddedToCart(true);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-24 my-10">
      <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:gap-24 justify-center">
        <div className="flex flex-col gap-3">
          <h1 className="font-sourceserif text-3xl md:text-4xl lg:text-5xl max-w-xl">
            {data.name}
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
              <span>{data.prepTimeMinutes} min</span>
            </div>

            <div className="flex justify-between border-b py-2">
              <span className="font-bold">Rating</span>
              <span>
                {data.rating} ({data.reviewCount})
              </span>
            </div>

            <div className="flex justify-between border-b py-2">
              <span className="font-bold">Comments</span>
              <span>Read 379 comments</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="bg-primary text-white rounded-full py-2 px-5 cursor-pointer hover:bg-primary-hover"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <button className="border rounded-full px-5 py-2 hover:bg-gray-100">
              Give
            </button>

            <button className="border rounded-full px-5 py-2 hover:bg-gray-100">
              Share
            </button>

            <button className="border rounded-full px-5 py-2 hover:bg-gray-100">
              Print
            </button>
          </div>

          {addedToCart && (
            <p className="text-green-500">Added to cart successfully!</p>
          )}
        </div>
      </div>

      {/* Image + Instructions Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-20 mb-10">
        <Image
          src={data.image}
          alt={data.name}
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
