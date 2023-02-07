"use client";
import { useState } from "react";
import Wrapper from "../../../ui/Wrapper";
import SecondaryButton from "../../../ui/SecondaryButton";
import { food } from "../../../lib/res/food";

interface Item {
  id: number;
  name: string;
}

export default function Playground() {
  const [item, setItem] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: string) => {
    if (item === "") return;
    setItems([...items, { name: item, id: id }]);
    setItem("");
    setId(id + 1);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Wrapper>
      <div className="h-[27rem] overflow-auto scrollbar scrollbar-thumb-neutral-700/50 scrollbar-thumb-rounded-md ">
        <div className="mb-4 flex w-full pb-2 border-b border-gray-500 ">
          <div className="w-full ">
            <label className="block text-gray-300 text-md font-medium">
              <input
                className="bg-neutral-800/50 focus:bg-neutral-700/50
                shadow border text-md border-gray-300/50 rounded-md h-12
                px-4 py-3 w-full text-gray-200 leading-tight focus:border-gray-200 focus:outline-none"
                type="text"
                name="itemName"
                placeholder={food[Math.floor(Math.random() * 31)]}
                required
                value={item}
                onChange={(e) => {
                  setItem(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="ml-1 h-full flex items-center justify-center">
            <SecondaryButton name="+" onClick={() => addItem(item)} />
          </div>
        </div>

        <ul className="mx-4">
          {items.map((item) => (
            <li key={item.id} className="flex w-full mb-2 animate-fade-in-down">
              <span className="text-md flex flex-start items-center text-white mr-auto">{item.name}</span>
              <SecondaryButton name="-" onClick={() => removeItem(item.id)} />
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}
