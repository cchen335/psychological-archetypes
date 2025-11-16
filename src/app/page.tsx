"use client";

import "@/lib/supabaseClient"
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const archetypes = [
  "caregiver",
  "creator",
  "everyman",
  "explorer",
  "hero",
  "innocent",
  "lover",
  "magician",
  "mother",
  "philosopher",
  "rebirth",
  "ruler",
  "sage",
  "shadow",
  "trickster",
  "visionary",
];

export default function LandingPage() {
  const router = useRouter();
  const [flipped, setFlipped] = useState(false);

  const handleFlip = async () => {
    setFlipped(true);
    // 等待动画结束再跳转
    setTimeout(() => {
      router.push("/questions");
    }, archetypes.length * 120 + 1200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12">
        {archetypes.map((name, i) => (
          <motion.div
            key={name}
            className="w-[140px] h-[200px] md:w-[160px] md:h-[230px] perspective-1000"
            initial={false}
            animate={{
              rotateY: flipped ? 180 : 0,
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.65, 0, 0.35, 1],
            }}
            style={{
              transformStyle: "preserve-3d",
              position: "relative",
            }}
          >
            {/* Front */}
            <motion.img
              src={`/archetypes/${name}.webp`}
              alt={name}
              className="absolute w-full h-full object-cover rounded-lg shadow-lg backface-hidden"
              style={{ backfaceVisibility: "hidden" }}
            />
            {/* Back */}
            <motion.img
              src={`/archetypes/back/${name}_back.webp`}
              alt={`${name} back`}
              className="absolute w-full h-full object-cover rounded-lg shadow-lg backface-hidden"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-light">
          Are you ready for a self exploring voyage?
        </h1>
        <p className="text-white/70">Discover your archetypes</p>
        <button
          onClick={handleFlip}
          className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-lg transition"
        >
          Yes
        </button>
      </div>
    </div>
  );
}
