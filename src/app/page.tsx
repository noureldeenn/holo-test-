"use client";
import { useState } from "react";
import Search from "@/components/Search";
import Dropdown from "@/components/Dropdown";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    // Here, you can access the search value when Enter is pressed
    console.log(value);
    setSearchValue(value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm lg:flex-inline">
        <div className="flex flex-row justify-between items-center">
          <Search onSearch={handleSearch} />
          <Dropdown />
        </div>
        <h2 className={"text-xl mt-20 mx-2 underline"}>Searched for:</h2>
        <p className={"text-xl mx-2"}> {searchValue}</p>
      </div>
    </main>
  );
}
