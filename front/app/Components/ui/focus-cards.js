"use client";;
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    {/* <img src={card.src} alt={card.title} className="object-cover absolute inset-0" /> */}
    <div
      className={cn(
        "absolute inset-0 bg-white/10 backdrop-blur-md border border-white/10 shadow-xl p-8 rounded-2xl flex flex-col gap-4 text-white transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-50"
      )}>
        {/* <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-8 rounded-2xl flex flex-col gap-4 text-white"> */}
            <div className="text-3xl md:text-4xl">{card.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold">{card.name}</h3>
            <p className="text-sm md:text-base">{card.description}</p>
        {/* </div> */}
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full mx-auto md:px-8">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} />
      ))}
    </div>
  );
}
