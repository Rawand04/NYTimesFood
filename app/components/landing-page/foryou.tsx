import { FORYOU_CONTENT, FORYOU_RECIPES } from "@/app/lib/data";
import SectionWithCarousel from "../shared/section-with-carousel";

const ForYou = () => {
  return (
    <SectionWithCarousel
      sectionTitle={FORYOU_CONTENT.sectionTitle}
      carouselTitle={FORYOU_CONTENT.carouselTitle}
      carouselDescription={FORYOU_CONTENT.carouselDescription}
      data={FORYOU_RECIPES}
      className="w-[25%]"
    />
  );
};

export default ForYou;
