import RecipesFilter from "@/components/recipes/filter";
import RecipesList from "@/components/recipes/recipes-list";
import { getSession } from "@/app/lib/session";
import SearchBar from "@/components/header/search-bar";
import { getQueryClient } from "@/app/lib/get-query-client";
import { recipesQuery, tagsQuery } from "@/app/lib/queries";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const RecipesPage = async ({ searchParams }) => {
  const { sortBy, cuisine, order } = await searchParams;

  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.query(recipesQuery({ sortBy, cuisine, order })),
    queryClient.query(tagsQuery),
  ]);

  const session = await getSession();
  const userId = session?.userId;

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex gap-4 mb-10 max-md:flex-col">
        <div className="w-1/4 max-md:w-full">
          <RecipesFilter />
        </div>
        <div className="w-3/4 flex flex-col gap-2 max-md:w-full">
          <SearchBar className="!w-full rounded-sm bg-white border-gray-300" />
          <RecipesList userId={userId} />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default RecipesPage;
