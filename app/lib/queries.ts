import { queryOptions } from "@tanstack/react-query";
import { getRecipes, getTags } from "./apis";

export type RecipeFilters = {
  sortBy?: string;
  cuisine?: string;
  order?: string;
};

export const recipesQuery = (filters: RecipeFilters) =>
  queryOptions({
    queryKey: ["recipes", filters],
    queryFn: async () => {
      const res = await getRecipes(filters);
      return res.recipes.map((recipe: any) => ({
        title: recipe.name,
        duration: recipe.cookTimeMinutes,
        image: recipe.image,
        id: recipe.id,
        cuisine: recipe.cuisine,
        rating: recipe.rating,
      }));
    },
  });

export const tagsQuery = queryOptions({
  queryKey: ["tags"],
  queryFn: getTags,
  staleTime: Infinity,
});
