import RecipeDetails from "@/components/shared/recipe-details";
import { getRecipeById } from "@/app/lib/apis";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export interface RecipeDetailsData {
  id: number;
  title: string;
  cuisine: string;
  mealType: string;
  image: string;
  readyIn: string;
  rating: number;
  reviews: number;
  comments: string;
  instructions: string;
}

const RecipeDetailsPage = async ({ params }: Props) => {
  const { slug } = await params;
  const data = await getRecipeById({ id: slug });

  const recipeData: RecipeDetailsData = {
    id: data.id ?? crypto.randomUUID(),
    title: data.name ?? "Pizza",
    cuisine: data.cuisine ?? "Italian",
    mealType: data.mealType?.[0] ?? "Dinner",
    image:
      data.image ??
      "https://static01.nyt.com/images/2023/01/17/dining/onepot-cheesypasta/onepot-cheesypasta-threeByTwoMediumAt2X.jpg?width=1280&quality=75&auto=webp",
    readyIn: data.prepTimeMinutes ?? 0,
    rating: data.rating ?? 5,
    reviews: data.reviewCount ?? 0,
    comments: "Read 379 comments",
    instructions: data.instructions ?? "No instructions available",
  };

  return <RecipeDetails data={recipeData} />;
};

export default RecipeDetailsPage;
