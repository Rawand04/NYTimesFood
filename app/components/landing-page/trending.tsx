import { getRecipes } from "@/app/lib/apis";
import TrendingClient from "./trending-client";

const Trending = async () => {
  const trendingData = await getRecipes();
  const mappedTrendingData = trendingData.recipes.map((recipe: any) => ({
    title: recipe.name,
    duration: `${recipe.cookTimeMinutes} minutes`,
    image: recipe.image,
    id: recipe.id
  }));
  return <TrendingClient data={mappedTrendingData} />;
};

export default Trending;
