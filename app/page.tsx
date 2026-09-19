import SectionWithCarousel from "./components/shared/section-with-carousel";
import CategorizedRecipes from "./components/landing-page/categoris-tabs/categorized-recipes";
import HeroSection from "./components/hero-section/hero-section";
import ForYou from "./components/landing-page/foryou";
import Trending from "./components/landing-page/trending";
import More from "./components/landing-page/more";
import Collections from "./components/landing-page/collections";
import About from "./components/landing-page/about";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr />
      <CategorizedRecipes />
      <ForYou />
      <Trending />
      <More />
      <Collections />
      <About />
    </>
  );
}
