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
    console.log("added", item);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
    console.log("removed", id);
  };

  return (
    <Wrapper>
      <div className="h-[27rem]">
        <ul>
          {items.map((item) => (
            <li key={item.id} className="flex w-full mb-2">
              <span className="text-md text-white mr-auto">{item.name}</span>
              <SecondaryButton name="-" onClick={() => removeItem(item.id)} />
            </li>
          ))}
        </ul>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-md font-medium mb-2"
            htmlFor="username"
          ></label>
          <input
            className="bg-neutral-800/50 focus:bg-neutral-700/50
            shadow border text-md border-gray-300/50 rounded-md 
            px-4 py-3 w-full text-gray-300 leading-tight focus:border-transparent"
            type="text"
            name="itemName"
            placeholder={food[Math.floor(Math.random() * 31)]}
            required
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
        </div>

        <SecondaryButton name="+" onClick={() => addItem(item)} />
      </div>
    </Wrapper>
  );
}
