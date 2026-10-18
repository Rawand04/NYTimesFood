"use client";

import Link from "next/link";
import Carousel from "./carousel";

interface ICarouselProps {
  titleLink?: { isLink: boolean; href: string };
  sectionTitle?: string;
  recipeTitle?: string;
  data: any[];
  imageClassName?: string;
  className?: string;
  carouselTitle?: string;
  carouselDescription?: string;
  isWriter?: boolean;
}

export default function SectionWithCarousel({
  titleLink = { isLink: false, href: "" },
  sectionTitle,
  recipeTitle,
  data,
  carouselTitle,
  imageClassName,
  className,
  carouselDescription,
  isWriter,
}: ICarouselProps) {
  return (
    <div className="w-full mb-12">
      {/* section title */}
      {sectionTitle && (
        <div>
          <hr className="border-[1.5] rounded" />
          <h2 className="uppercase font-bold font-sourceserif">
            {sectionTitle}
          </h2>
        </div>
      )}
      {/* carousel title and description */}
      <div className="font-sourceserif mt-4">
        {carouselTitle && (
          <div>
            {titleLink.isLink ? (
              <>
                <Link
                  href={titleLink.href}
                  className="underline underline-offset-4 text-[26px]"
                >
                  {carouselTitle}
                </Link>
              </>
            ) : (
              <>
                <h1 className="text-[26px]">{carouselTitle}</h1>
              </>
            )}
          </div>
        )}

        {carouselDescription && (
          <p className="text-[16px]">{carouselDescription}</p>
        )}
      </div>
      <h1 className="font-bold mb-4">{recipeTitle}</h1>

      {/* carousel  */}
      <Carousel
        isWriter={isWriter}
        data={data}
        className={className}
        imageClassName={imageClassName}
      />
    </div>
  );
}
