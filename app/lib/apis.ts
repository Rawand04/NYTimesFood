export const getRecipeById = async ({ id }: { id: string }) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await res.json();
  return data;
};

export const getTags = async () => {
  const res = await fetch("https://dummyjson.com/recipes/tags");
  const data = await res.json();
  return data;
};

export const getForYouRecipes = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken",
  );
  const data = await res.json();
  return data;
};
export const getWriters = async () => {
  const res = await fetch("https://randomuser.me/api/?results=10");
  const data = await res.json();
  return data;
};

export const getRecipes = async ({ cuisine, sortBy, order = "desc" } = {}) => {
  const base = cuisine
    ? `https://dummyjson.com/recipes/tag/${cuisine}`
    : `https://dummyjson.com/recipes`;

  const params = new URLSearchParams();
  if (sortBy) params.set("sortBy", sortBy);
  if (order) params.set("order", order);
  const url = `${base}?${params.toString()}`;
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return data;
};

export const AddRecipe = async (data) => {
  const res = await fetch("https://dummyjson.com/recipes/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return { ...data, ...result };
};

export const deleteRecipe = async (data) => {
  const res = await fetch("https://dummyjson.com/recipes/1", {
    method: "DELETE",
  });
  const result = await res.json();
  return { ...data, ...result };
};

export const updateRecipe = async (id, data) => {
  const res = await fetch("https://dummyjson.com/recipes/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();

  return { ...data, ...result, id };
};
