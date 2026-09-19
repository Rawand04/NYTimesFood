import { TRENDING_CONTENT, TRENDING_RECIPES, WRITERS } from "@/app/lib/data";
import SectionWithCarousel from "../shared/section-with-carousel";

const More = () => {
  return (
    <div className="">
      {/* newest recipes  */}
      <SectionWithCarousel
        sectionTitle={TRENDING_CONTENT.sectionTitle}
        carouselTitle={TRENDING_CONTENT.carouselTitle}
        data={TRENDING_RECIPES}
        className="w-[14%] my-10"
      />
      {/* writers  */}
      <SectionWithCarousel
        titleIsLink={true}
        carouselTitle="Our Writers"
        data={WRITERS}
        className="w-[14%] my-10 underline text-center"
        imageClassName="rounded-full h-30 !w-30 m-auto"
      />
      {/* newsletter  */}
      <SectionWithCarousel
        sectionTitle={TRENDING_CONTENT.sectionTitle}
        carouselTitle={TRENDING_CONTENT.carouselTitle}
        data={TRENDING_RECIPES}
        className="w-[14%] my-10"
      />
    </div>
  );
};

export default More;
