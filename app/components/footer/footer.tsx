import Link from "next/link";
import LinksList from "./links-list";
import { learnMore, recipes, shop } from "@/app/lib/data";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-franklin py-10">
      <div className="w-[70%] flex justify-start m-auto gap-24 max-sm:flex-col max-sm:align-center">
        <div className="w-[50%] flex flex-col gap-6 font-baskerville">
          <h1 className="font-bold">About us</h1>
          <p>
            New York Times Cooking offers subscribers recipes, advice and
            inspiration for better everyday cooking. From easy weeknight dinners
            to holiday meals, our recipes have been tested and perfected to meet
            the needs of home cooks of all levels. Subscribe now for full
            access.
          </p>
        </div>

        <div className="w-[50%] flex gap-12 justify-center max-sm:flex-col">
          <div className="flex flex-col gap-8">
            <LinksList header="Learn More" links={learnMore} />
            <LinksList header="Shop" links={shop} />
            <hr className="w-6" />
            <Link href="">Send Us Feedback</Link>
          </div>
          <LinksList header="Recipes" links={recipes} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
