"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { FiSearch } from "react-icons/fi";

export function Input() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    if (input === "") return;

    router.push(`/game/search/${input}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-slate-200 my-5 flex gap-2 justify-between items-center rounded-lg p-2"
    >
      <input
        className="bg-slate-200 outline-none w-11/12 font-medium"
        type="text"
        placeholder="Procurando algum jogo?..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
}
