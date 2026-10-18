"use client";

import { CATEGORIES } from "@/app/lib/data";

interface CategoriesTabsProps {
  selected: number;
  onSelect: (index: number) => void;
}

const CategoriesTabs = ({ selected, onSelect }: CategoriesTabsProps) => {
  return (
    <div className="flex gap-6 overflow-x-scroll scrollbar-none">
      {CATEGORIES.map((category, index) => (
        <button
          key={category.title}
          onClick={() => onSelect(index)}
          className={`cursor-pointer font-bold text-md px-4 py-2 rounded whitespace-nowrap ${
            selected === index ? "bg-[#eece6c]" : "hover:bg-[#eece6c]"
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default CategoriesTabs;
