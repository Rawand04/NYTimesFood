"use client";

import { useState } from "react";
import CategoriesTabs from "./categories-tabs";
import SectionWithCarousel from "../../shared/section-with-carousel";
import IntroductionBanner from "./introduction-banner";
import { CATEGORIES } from "@/app/lib/data";

const CategorizedRecipes = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="flex flex-col gap-10 my-10">
      <IntroductionBanner />

      <CategoriesTabs
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <SectionWithCarousel
        data={CATEGORIES[selectedCategory].recipes}
        className="w-fit md:w-1/4"
        imageClassName="!h-48"
      />
    </div>
  );
};

export default CategorizedRecipes;
