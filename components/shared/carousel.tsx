import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import RecipeCard from "./recipe-card";
import { IRecipe, IWriters } from "@/app/types/recipe";
import WriterCard from "./writer-card";

type RecipeCardProps = {
  data: IRecipe[] | IWriters[];
  className?: string;
  imageClassName?: string;
  isWriter?: boolean;
};

const Carousel = ({
  data,
  imageClassName,
  className,
  isWriter,
}: RecipeCardProps) => {
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
        {isWriter
          ? (data as IWriters[]).map((item, i) => (
              <WriterCard key={i} writer={item} />
            ))
          : (data as IRecipe[]).map((item, i) => (
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
