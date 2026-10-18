"use client";
import { FORYOU_CONTENT } from "@/app/lib/data";
import SectionWithCarousel from "../shared/section-with-carousel";

const ForYou = ({ data }) => {
  const mappedForYouData = data.meals.map((recipe: any) => ({
    title: recipe.strMeal,
    duration: `${recipe.dateModified} minutes`,
    image: recipe.strMealThumb,
    id: recipe.idMeal,
  }));
  return (
    <>
      <SectionWithCarousel
        sectionTitle={FORYOU_CONTENT.sectionTitle}
        carouselTitle={FORYOU_CONTENT.carouselTitle}
        carouselDescription={FORYOU_CONTENT.carouselDescription}
        data={mappedForYouData}
        className="w-[25%]"
      />
    </>
  );
};

export default ForYou;
