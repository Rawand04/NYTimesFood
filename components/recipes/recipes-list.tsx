"use client";
import { useSearchStore } from "@/app/stores/searchStore";
import RecipeCard from "../shared/recipe-card";
import AddRecipeModal from "./add-recipe-modal";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { recipesQuery, tagsQuery } from "@/app/lib/queries";

const RecipesList = ({ userId }) => {
  const [isAddRecipeModalOpen, setIsAddRecipeModalOpen] = useState(false);
  const search = useSearchStore((state) => state.search);
  const searchParams = useSearchParams();
  const time = searchParams.get("time");
  const queryClient = useQueryClient();

  const filters = {
    sortBy: searchParams.get("sortBy") ?? undefined,
    cuisine: searchParams.get("cuisine") ?? undefined,
    order: searchParams.get("order") ?? undefined,
  };

  const {
    data: recipes = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    ...recipesQuery(filters),
    placeholderData: keepPreviousData, // no blank list while filters change
  });

  const handleModalOpen = () => {
    setIsAddRecipeModalOpen(true);
  };

  const { data: tags } = useQuery(tagsQuery);

  const updateRecipes = (fn: (old: any[]) => any[]) =>
    queryClient.setQueryData(
      recipesQuery(filters).queryKey,
      (old: any[] = []) => fn(old),
    );

  const filteredData = useMemo(
    () =>
      recipes.filter((item) => {
        const matchesSearch =
          item?.title.toLowerCase().includes(search.toLowerCase()) ||
          item?.cuisine.toLowerCase().includes(search.toLowerCase());

        const minutes = Number(item.duration);
        const matchesTime =
          !time || (time === "quick" ? minutes <= 30 : minutes > 30);

        return matchesSearch && matchesTime;
      }),
    [search, recipes, time],
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      {isAddRecipeModalOpen && (
        <AddRecipeModal
          isOpen={setIsAddRecipeModalOpen}
          tags={tags}
          userId={userId}
          onAdded={(newRecipe) => updateRecipes((prev) => [newRecipe, ...prev])}
        />
      )}
      <div className="flex flex-col gap-2">
        {userId && (
          <div
            className="rounded text-white bg-primary p-2 w-fit text-nowrap cursor-pointer"
            onClick={handleModalOpen}
          >
            Add Recipe
          </div>
        )}
        <div className="flex flex-wrap gap-6 justify-start my-4">
          {filteredData.map((item, index) => (
            <RecipeCard
              key={index}
              item={item}
              className="rounded-xl w-full sm:w-[280px] md:w-[45%] xl:w-[30%]"
              imageClassName="!w-full !h-full"
              tags={tags}
              currentUserId={userId}
              onUpdate={(updated) =>
                updateRecipes((prev) =>
                  prev.map((recipe) =>
                    recipe.id === updated.id ? { ...recipe, ...updated } : recipe,
                  ),
                )
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipesList;
