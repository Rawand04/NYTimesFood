import { IRecipe } from "../types/recipe";

export const getRecipes = async () => {
  const res = await fetch(`https://dummyjson.com/recipes`);
  const data = await res.json();
  return data;
};

export const getRecipeById = async ({ id }: { id: string }) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await res.json();
  return data;
};
