import { CATEGORIES } from "@/app/lib/data";

const CategoriesTabs = () => {
  return (
    <div className="">
      <div className="flex gap-6 overflow-x-scroll scrollbar-none">
        {CATEGORIES.map((cat, i) => (
          <button
            key={i}
            className="cursor-pointer font-bold text-md px-4 py-2 rounded hover:bg-[#eece6c]  whitespace-nowrap"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesTabs;
