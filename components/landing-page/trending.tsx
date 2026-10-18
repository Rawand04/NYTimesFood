"use client";
import { useSearchStore } from "@/app/stores/searchStore";
import SectionWithCarousel from "../shared/section-with-carousel";
import { MOSTPOPULAR_CONTENT, TRENDING_CONTENT } from "@/app/lib/data";
import { IRecipe } from "@/app/types/recipe";
import { useMemo } from "react";

interface ITrendingProps {
  data: IRecipe[];
}

const TrendingSection = ({ data }: ITrendingProps) => {
  const search = useSearchStore((state) => state.search);

  const mappedTrendingData = data.recipes.map((recipe: any) => ({
    title: recipe.name,
    duration: `${recipe.cookTimeMinutes} minutes`,
    image: recipe.image,
    id: recipe.id,
  }));
  const filteredData = useMemo(
    () =>
      mappedTrendingData.filter((recipe) =>
        recipe.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [search, mappedTrendingData],
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
        carouselTitle={MOSTPOPULAR_CONTENT.carouselTitle}
        data={mappedTrendingData}
        className="w-[14%] my-10"
      />
    </div>
  );
};

export default TrendingSection;
