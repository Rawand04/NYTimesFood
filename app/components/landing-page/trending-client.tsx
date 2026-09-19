"use client";
import { useSearchStore } from "@/app/stores/searchStore";
import SectionWithCarousel from "../shared/section-with-carousel";
import { TRENDING_CONTENT } from "@/app/lib/data";
import { IRecipe } from "@/app/types/recipe";

interface ITrendingProps {
  data: IRecipe[];
}

const TrendingClient = ({ data }: ITrendingProps) => {
  const search = useSearchStore((state) => state.search);

  const filteredData = data.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="">
      {/* trending  */}
      <SectionWithCarousel
        sectionTitle={TRENDING_CONTENT.sectionTitle}
        carouselTitle={TRENDING_CONTENT.carouselTitle}
        data={filteredData}
        className="w-[14%] my-10"
      />
      {/* most popular  */}
      <SectionWithCarousel
        sectionTitle={TRENDING_CONTENT.sectionTitle}
        carouselTitle={TRENDING_CONTENT.carouselTitle}
        data={data}
        className="w-[14%] my-10"
      />
    </div>
  );
};

export default TrendingClient;
