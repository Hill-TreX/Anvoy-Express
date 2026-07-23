"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Airplane01Icon,
  DeliveryTruck01Icon,
  CargoShipIcon,
  Train01Icon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";

const FEATURES = [
  {
    id: "air-freight",
    label: "Air Freight",
    icon: Airplane01Icon,
    image: "/images/features/air-freight.png",
    description: "Urgent global shipping with priority handling and airport-to-airport delivery.",
  },
  {
    id: "road-freight",
    label: "Road Freight",
    icon: DeliveryTruck01Icon,
    image: "/images/features/road-freight.png",
    description: "Reliable ground transportation for domestic and regional distribution networks.",
  },
  {
    id: "ocean-freight",
    label: "Ocean Freight",
    icon: CargoShipIcon,
    image: "/images/features/ocean-freight.png",
    description: "Cost-effective international shipping for large volumes and bulk cargo.",
  },
  {
    id: "rail-freight",
    label: "Rail Freight",
    icon: Train01Icon,
    image: "/images/features/rail-freight.png",
    description: "Sustainable long-distance transport connecting major industrial hubs.",
  },
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-[1536px] mx-auto p-4 md:p-10">
      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] flex flex-col lg:flex-row min-h-[450px] lg:h-[550px] border border-[#1E325A]/10 bg-white shadow-xl">
        {/* Left Side: Navigation Chips */}
        <div className="w-full lg:w-[35%] min-h-[300px] md:min-h-[350px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-20 bg-[#1E325A] ">
          <div className="absolute inset-x-0 top-0 h-12 md:h-16 lg:h-20 bg-gradient-to-b from-[#1E325A] via-[#1E325A]/90 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-12 md:h-16 lg:h-20 bg-gradient-to-t from-[#1E325A] via-[#1E325A]/90 to-transparent z-40" />
          
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: 55, // Reduced from ITEM_HEIGHT (65) for mobile density
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * 55,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.35,
                    scale: isActive ? 1.05 : 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-3 px-5 md:px-8 lg:px-8 py-2.5 md:py-3.5 lg:py-3 rounded-full transition-all duration-500 text-left group border",
                      isActive
                        ? "bg-white text-[#1E325A] border-white z-10 shadow-md"
                        : "bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-500",
                        isActive ? "text-[#1E325A]" : "text-white/30"
                      )}
                    >
                      <HugeiconsIcon
                        icon={feature.icon}
                        size={16}
                        strokeWidth={2}
                      />
                    </div>

                    <span className="font-medium text-[12px] md:text-sm tracking-tight whitespace-nowrap uppercase">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Feature Display */}
        <div className="flex-1 min-h-[350px] md:min-h-[450px] lg:h-full relative bg-gray-50/50 flex items-center justify-center py-8 md:py-12 lg:py-12 px-4 md:px-12 lg:px-20 overflow-hidden border-t lg:border-t-0 lg:border-l border-gray-200">
          <div className="relative w-full max-w-[300px] md:max-w-[380px] lg:max-w-[400px] aspect-[4/5] flex items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -120 : isNext ? 120 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.75,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -4 : isNext ? 4 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 28,
                    mass: 0.9,
                  }}
                  className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 md:border-[10px] border-white bg-white shadow-2xl origin-center"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-1000",
                      isActive
                        ? "scale-105"
                        : "scale-100 grayscale blur-[2px] brightness-75"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className="absolute inset-x-0 bottom-0 p-8 md:p-12 pt-40 bg-gradient-to-t from-[#1E325A]/95 via-[#1E325A]/50 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <div className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[12px] font-medium uppercase tracking-[0.2em] w-fit mb-4 border border-white/20">
                          {index + 1} • {feature.label}
                        </div>
                        <p className="text-white font-medium text-2xl md:text-3xl lg:text-4xl leading-tight drop-shadow-md tracking-tight">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={cn(
                      "absolute top-10 left-10 flex items-center gap-3 transition-opacity duration-500",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_white] animate-pulse" />
                    <span className="text-white font-medium text-[11px] uppercase tracking-[0.3em] font-mono">
                      Global Live
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
