import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import RecipeCard from "./recipe-card";
import { IRecipe } from "@/app/types/recipe";

interface RecipeCardProps {
  data: IRecipe[];
  className?: string;
  imageClassName?: string;
}

const Carousel = ({ data, imageClassName, className }: RecipeCardProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const next = () => {
    scrollRef.current?.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  };

  const prev = () => {
    scrollRef.current?.scrollBy({
      left: -100,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth">
        {data?.map((item, i) => (
          <RecipeCard
            key={i}
            item={item}
            imageClassName={imageClassName}
            className={className}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
