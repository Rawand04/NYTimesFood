import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../../stores/cartStore";
import { IRecipe } from "@/app/types/recipe";

interface RecipeCardProps {
  item: IRecipe;
  className?: string;
  imageClassName?: string;
  isCartItem?: boolean;
}

const RecipeCard = ({
  item,
  className,
  imageClassName,
  isCartItem,
}: RecipeCardProps) => {
  const { removeFromCart } = useCartStore();
  return (
    <div
      className={`flex flex-col gap-2 shrink-0 font-franklin py-2 min-w-[20%] ${className}`}
    >
      <Link href={`/recipes/${item.id}`}>
        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={200}
          className={`w-full object-cover rounded ${imageClassName}`}
        />
      </Link>
      <h1 className="font-bold">{item.title}</h1>
      <p>
        <Link href="" className="text-sm">
          {item.meal_type}
        </Link>
      </p>
      {item.rating && <p className="text-xs">rating: {item.rating}</p>}
      <p className="text-xs">{item.duration}</p>
      {isCartItem && (
        <button
          className="bg-primary text-white rounded-full py-2 px-4 cursor-pointer hover:bg-primary-hover"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default RecipeCard;
