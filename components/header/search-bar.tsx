"use client";
import { useSearchStore } from "@/app/stores/searchStore";
import debounce from "lodash.debounce";
import { useMemo, useState } from "react";

const SearchBar = ({ className }) => {
  const { setSearch } = useSearchStore();

  const [input, setInput] = useState("");

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearch(value);
      }, 500),
    [setSearch],
  );

  return (
    <input
      placeholder="What do you like to cook?"
      className={`w-[80%] p-2 border ${className}`}
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
        debouncedSearch(e.target.value);
      }}
    />
  );
};

export default SearchBar;
