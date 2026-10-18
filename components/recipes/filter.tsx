"use client";
import { Filter, X } from "react-feather";
import DropdownList from "./dropdown-list";
import { useRouter, useSearchParams } from "next/navigation";
import { tagsQuery } from "@/app/lib/queries";
import { useQuery } from "@tanstack/react-query";

const sort = [
  {
    label: "Top Rated",
    tag: "rating",
  },
  {
    label: "Calories",
    tag: "caloriesPerServing",
  },
];

const timeOptions = [
  { label: "≤ 30 min", value: "quick" },
  { label: "> 30 min", value: "long" },
];

const RecipesFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCuisine = searchParams.get("cuisine");
  const currentSortBy = searchParams.get("sortBy");
  const currentTime = searchParams.get("time");
  const { data: tags } = useQuery(tagsQuery);

  const pushParams = (next) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(next).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });
    router.push(`?${params.toString()}`);
  };

  const handleTimeSelect = (time) => pushParams({ time });

  const handleTimeClear = () => pushParams({ time: null });

  const handleCuisineSelect = (cuisine) => {
    pushParams({ cuisine });
  };
  const handleCuisineClear = () => {
    pushParams({ cuisine: null });
  };

  const handleSortSelect = (sortBy) => {
    pushParams({ sortBy });
  };

  const handleSortClear = () => {
    pushParams({ sortBy: null });
  };
  return (
    <div className="border border-gray-300 rounded-lg p-6 flex flex-col flex-wrap max-md:flex-row gap-6 font-sourceserif bg-white">
      <div className="flex gap-4 font-bold text-lg">
        <Filter /> <h1>Filter</h1>
      </div>
      <hr className="text-gray-300" />
      <div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Cusine</h1>
          <DropdownList
            options={tags}
            selected={currentCuisine}
            onSelect={handleCuisineSelect}
            onClear={handleCuisineClear}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Prep time</h1>
        <div className="flex gap-2 flex-wrap">
          {timeOptions.map((item) => (
            <div
              key={item.value}
              className={`rounded-lg border border-gray-300 p-2 w-fit flex gap-2 cursor-pointer ${
                currentTime === item.value
                  ? "bg-primary text-white"
                  : "bg-white"
              }`}
            >
              <button
                onClick={() => handleTimeSelect(item.value)}
                className="cursor-pointer"
              >
                {item.label}
              </button>
              {currentTime === item.value && (
                <button onClick={handleTimeClear} className="cursor-pointer">
                  <X size={18} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Sort by</h1>
        <div className="flex gap-2 flex-wrap ">
          <div className="flex flex-col gap-4">
            {sort.map((item, index) => (
              <div
                key={index}
                className={`rounded-lg border border-gray-300 p-2 w-fit flex gap-2  cursor-pointer ${currentSortBy === item.tag ? "bg-primary text-white" : "bg-white"}`}
              >
                <button
                  onClick={() => handleSortSelect(item.tag)}
                  className="cursor-pointer"
                >
                  {item.label}
                </button>
                {currentSortBy === item.tag && (
                  <button onClick={handleSortClear} className="cursor-pointer">
                    <X size={18} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesFilter;
