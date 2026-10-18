import { COLLECTIONS_CONTENT, FORYOU_CONTENT } from "@/app/lib/data";
import SectionWithCarousel from "../shared/section-with-carousel";

const Collections = ({ data }) => {
  const mappedData = data.recipes.map((recipe: any) => ({
    title: recipe.name,
    duration: `${recipe.cookTimeMinutes} minutes`,
    image: recipe.image,
    id: recipe.id,
  }));

  return (
    <div className="flex flex-col">
      <SectionWithCarousel
        sectionTitle={COLLECTIONS_CONTENT.sectionTitle}
        carouselTitle={COLLECTIONS_CONTENT.carouselTitle}
        data={mappedData}
        className="w-[25%]"
      />
      {COLLECTIONS_CONTENT.sections.map((sec) => (
        <SectionWithCarousel
          key={sec.id}
          carouselTitle={sec.carouselTitle}
          titleLink={sec.titleLink}
          data={mappedData}
          className="w-[25%]"
        />
      ))}
      <SectionWithCarousel
        carouselTitle={FORYOU_CONTENT.carouselTitle}
        carouselDescription={FORYOU_CONTENT.carouselDescription}
        data={mappedData}
        className="w-[25%]"
      />
      <SectionWithCarousel
        carouselTitle={FORYOU_CONTENT.carouselTitle}
        carouselDescription={FORYOU_CONTENT.carouselDescription}
        data={mappedData}
        className="w-[25%]"
      />
      <SectionWithCarousel
        carouselTitle={FORYOU_CONTENT.carouselTitle}
        carouselDescription={FORYOU_CONTENT.carouselDescription}
        data={mappedData}
        className="w-[25%]"
      />
      <SectionWithCarousel
        carouselTitle={FORYOU_CONTENT.carouselTitle}
        carouselDescription={FORYOU_CONTENT.carouselDescription}
        data={mappedData}
        className="w-[25%]"
      />
    </div>
  );
};

export default Collections;
