"use client";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../../app/stores/cartStore";
import { IRecipe } from "@/app/types/recipe";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Delete, Edit, Trash } from "react-feather";
import { useState } from "react";
import UpdateRecipeModal from "../recipes/update-recipe-modal";
import DeleteRecipeModal from "../recipes/delete-modal";

interface RecipeCardProps {
  item: IRecipe;
  className?: string;
  imageClassName?: string;
  isCartItem?: boolean;
  currentUserId?: string;
  tags?: string[];
  onUpdate?: (recipe: string) => void;
}

const RecipeCard = ({
  item,
  className,
  imageClassName,
  isCartItem,
  currentUserId,
  tags,
  onUpdate,
}: RecipeCardProps) => {
  const { removeFromCart } = useCartStore();
  const [isUpdateRecipeModalOpen, setIsUpdateRecipeModalOpen] = useState(false);
  const [isDeleteRecipeModalOpen, setIsDeleteRecipeModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsUpdateRecipeModalOpen(true);
  };

  const handleDeleteModalOpen = () => {
    setIsDeleteRecipeModalOpen(true);
  };

  return (
    <Card
      className={`overflow-hidden p-0 font-franklin shrink-0 ${className ?? ""}`}
    >
      <Link href={`/recipes/${item.id}`}>
        <div className="relative w-full">
          <Image
            src={item.image}
            alt={item.title}
            width={1000}
            height={1000}
            className={`object-cover ${imageClassName ?? ""}`}
          />
        </div>
      </Link>

      <CardHeader>
        <CardTitle className="font-bold">{item.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-1 text-sm">
        <Link href="" className="text-sm">
          {item.cuisine}
        </Link>
        {item.rating && <p className="text-xs">rating: {item.rating}</p>}
        <p className="text-xs">{item.duration}</p>
        {currentUserId && currentUserId === item.userId ? (
          <div className="flex justify-center">
            <Button onClick={handleModalOpen}>
              <Edit />
            </Button>
            <Button onClick={handleDeleteModalOpen}>
              <Trash />
            </Button>
          </div>
        ) : (
          ""
        )}
      </CardContent>

      {isUpdateRecipeModalOpen && (
        <UpdateRecipeModal
          isOpen={setIsUpdateRecipeModalOpen}
          tags={tags}
          userId={currentUserId}
          onUpdate={onUpdate}
          items={item}
        />
      )}

      {isDeleteRecipeModalOpen && <DeleteRecipeModal />}
      {isCartItem && (
        <CardFooter>
          <Button
            className="w-full rounded-full"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default RecipeCard;
