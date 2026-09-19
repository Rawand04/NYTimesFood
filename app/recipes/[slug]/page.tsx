import RecipeDetails from "@/app/components/shared/recipe-details";
import { getRecipeById } from "@/app/lib/apis";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const RecipeDetailsPage = async ({ params }: Props) => {
  const { slug } = await params;
  const data = await getRecipeById({ id: slug });
  return <RecipeDetails data={data} />;
};

export default RecipeDetailsPage;
