import CategoriesTabs from "./categories-tabs";
import SectionWithCarousel from "../../shared/section-with-carousel";
import IntroductionBanner from "./introduction-banner";
import { RECIPES } from "@/app/lib/data";


const CategorizedRecipes = () => {
  return (
    <div className="flex flex-col gap-10 my-10">
      {/* banner */}
      <IntroductionBanner />
      {/* tabs */}
      <CategoriesTabs />
      {/* carousel */}
      <SectionWithCarousel
        data={RECIPES}
        className="w-[25%]"
      />
    </div>
  );
};

export default CategorizedRecipes;
