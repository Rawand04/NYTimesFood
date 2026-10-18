import CategorizedRecipes from "../components/landing-page/categoris-tabs/categorized-recipes";
import ForYou from "../components/landing-page/foryou";
import More from "../components/landing-page/more";
import Collections from "../components/landing-page/collections";
import About from "../components/landing-page/about";
import HeroSection from "@/components/hero-section/hero-section";
import { getForYouRecipes, getRecipes, getWriters } from "./lib/apis";
import TrendingSection from "../components/landing-page/trending";

export default async function Home() {
  const data = await getForYouRecipes();
  const trendingData = await getRecipes();
  const writers = await getWriters();

  return (
    <>
      <HeroSection />
      <CategorizedRecipes />
      <ForYou data={data} />
      <TrendingSection data={trendingData} />
      <More writers={writers} data={data} />
      <Collections data={trendingData} />
      <About />
    </>
  );
}
