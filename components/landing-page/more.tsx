import { MORE_CONTENT, NEWSLETTER_CONTENT } from "@/app/lib/data";
import SectionWithCarousel from "../shared/section-with-carousel";

const More = ({ writers, data }) => {
  const mappedWriters = writers.results.map((writer: any) => ({
    title: writer.name.first + " " + writer.name.last,
    image: writer.picture.thumbnail,
  }));
  const mappedData = data.meals.map((recipe: any) => ({
    title: recipe.strMeal,
    duration: `${recipe.dateModified} minutes`,
    image: recipe.strMealThumb,
    id: recipe.idMeal,
  }));
  return (
    <div className="">
      {/* newest recipes  */}
      <SectionWithCarousel
        sectionTitle={MORE_CONTENT.sectionTitle}
        carouselTitle={MORE_CONTENT.carouselTitle}
        titleLink={{ isLink: true, href: "/recipes" }}
        data={mappedData}
        className="w-[14%] my-10"
      />
      {/* writers  */}
      <SectionWithCarousel
        isWriter={true}
        titleLink={{ isLink: true, href: "/recipes" }}
        carouselTitle="Our Writers"
        data={mappedWriters}
      />
      {/* newsletter  */}
      <SectionWithCarousel
        titleLink={{ isLink: true, href: "" }}
        carouselTitle={NEWSLETTER_CONTENT.carouselTitle}
        data={mappedData}
        className="w-[14%] my-10"
      />
    </div>
  );
};

export default More;
