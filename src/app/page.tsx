import { items } from "@/data/items";
import { filterListByMonth, getCurrentMonth } from "@/helpers/dateFilter";
import { Item } from "@/types/Item";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <div>
      <div id="header" className="bg-blue-800 h-36 text-center">
        <h1 id="header-text" className="text-white pt-8 text-3xl">
          Sistema financeiro
        </h1>
      </div>
      <div id="body" className="m-auto max-w-[980px] mb-12">
        ...
      </div>
    </div>
  );
};

export default Page;
