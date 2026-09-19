import { FORYOU_CONTENT, FORYOU_RECIPES } from "@/app/lib/data";
import SectionWithCarousel from "../shared/section-with-carousel";

const Collections = () => {
  return (
    <div className="flex flex-col">
      <SectionWithCarousel
        sectionTitle={FORYOU_CONTENT.sectionTitle}
        carouselTitle={FORYOU_CONTENT.carouselTitle}
        carouselDescription={FORYOU_CONTENT.carouselDescription}
        data={FORYOU_RECIPES}
        className="w-[25%]"
      />
      <SectionWithCarousel
        sectionTitle={FORYOU_CONTENT.sectionTitle}
        carouselTitle={FORYOU_CONTENT.carouselTitle}
        carouselDescription={FORYOU_CONTENT.carouselDescription}
        data={FORYOU_RECIPES}
        className="w-[25%]"
      />
      <SectionWithCarousel
        sectionTitle={FORYOU_CONTENT.sectionTitle}
        carouselTitle={FORYOU_CONTENT.carouselTitle}
        carouselDescription={FORYOU_CONTENT.carouselDescription}
        data={FORYOU_RECIPES}
        className="w-[25%]"
      />
      <SectionWithCarousel
        sectionTitle={FORYOU_CONTENT.sectionTitle}
        carouselTitle={FORYOU_CONTENT.carouselTitle}
        carouselDescription={FORYOU_CONTENT.carouselDescription}
        data={FORYOU_RECIPES}
        className="w-[25%]"
      />
      <SectionWithCarousel
        sectionTitle={FORYOU_CONTENT.sectionTitle}
        carouselTitle={FORYOU_CONTENT.carouselTitle}
        carouselDescription={FORYOU_CONTENT.carouselDescription}
        data={FORYOU_RECIPES}
        className="w-[25%]"
      />
      <SectionWithCarousel
        sectionTitle={FORYOU_CONTENT.sectionTitle}
        carouselTitle={FORYOU_CONTENT.carouselTitle}
        carouselDescription={FORYOU_CONTENT.carouselDescription}
        data={FORYOU_RECIPES}
        className="w-[25%]"
      />
    </div>
  );
};

export default Collections;
