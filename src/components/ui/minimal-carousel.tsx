"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MoreHorizontal } from "lucide-react";

/* --- Types --- */
export interface CarouselCard {
  id: string;
  title: string;
  value: string;
  color: string;
  icon: React.ElementType;
}

interface MinimalCarouselProps {
  cards: CarouselCard[];
}

export const MinimalCarousel: React.FC<MinimalCarouselProps> = ({ cards }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeCard = cards.find((c) => c.id === activeId);
  const secondaryCards = cards.filter((c) => c.id !== activeId);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setActiveId(null);
  };

  return (
    <div className="flex min-h-full w-full items-center justify-center bg-transparent">
      <div
        className="flex w-full select-none flex-col items-center justify-center px-3 font-sans sm:px-4"
        onClick={handleBackgroundClick}
      >
        <div className="w-full max-w-105">
          <motion.div layout className="flex flex-col gap-3">
            <AnimatePresence mode="popLayout">
              {activeCard && (
                <motion.div
                  key={activeCard.id}
                  layoutId={activeCard.id}
                  className={`relative flex w-full min-h-42.5 flex-col justify-between rounded-[2rem] p-4 text-white shadow-2xl sm:h-48 sm:rounded-[2.25rem] sm:p-5 ${activeCard.color}`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11">
                    <activeCard.icon size={38} className="sm:h-11 sm:w-11" />
                  </div>

                  <div className="mt-4 overflow-hidden">
                    <h3 className="truncate text-xl leading-tight font-semibold opacity-90 sm:text-2xl">
                      {activeCard.title}
                    </h3>
                    <p className="truncate text-lg font-semibold tracking-tight opacity-60 sm:text-xl">
                      {activeCard.value}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              layout
              className={`grid gap-2 transition-all duration-500 sm:gap-3 ${
                activeId ? "grid-cols-3" : "grid-cols-2"
              }`}
            >
              {(activeId ? secondaryCards : cards).map((card) => (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId(card.id);
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className={`relative flex cursor-pointer flex-col justify-between rounded-[1.5rem] p-3 text-white shadow-lg sm:rounded-[1.75rem] sm:p-4 ${card.color} ${
                    activeId ? "h-24 sm:h-28" : "h-28 sm:h-32"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <card.icon
                      size={activeId ? 20 : 28}
                      className="shrink-0"
                    />
                    <div className="rounded-full bg-white/10 p-1 transition-colors sm:p-1.5">
                      <MoreHorizontal size={16} />
                    </div>
                  </div>

                  <div className="mt-1 overflow-hidden">
                    <h4
                      className={`${
                        activeId
                          ? "text-[10px] sm:text-xs"
                          : "text-sm sm:text-base"
                      } truncate leading-tight font-medium opacity-90`}
                    >
                      {card.title}
                    </h4>
                    <p
                      className={`${
                        activeId
                          ? "text-[10px] sm:text-xs"
                          : "text-sm sm:text-base"
                      } truncate font-semibold text-white/60`}
                    >
                      {card.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
