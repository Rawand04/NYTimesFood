import Articles from "./articles";
import Card from "./card";
import SectionWithCarousel from "../shared/section-with-carousel";
import { RECENTLY_VIEWED } from "@/app/lib/data";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <div className="md:col-span-2 lg:row-span-3">
          <Card />
        </div>

        <div className="md:col-span-1 lg:row-span-2">
          <SectionWithCarousel
            sectionTitle="Recently viewed"
            data={RECENTLY_VIEWED}
            className="w-1/3 !bg-transparent rounded-sm ring-0 !text-truncate text-nowrap"
          />
        </div>

        <div className="md:col-span-1 lg:row-span-2">
          <Articles />
        </div>
      </div>
      <hr />
    </section>
  );
};

export default HeroSection;
