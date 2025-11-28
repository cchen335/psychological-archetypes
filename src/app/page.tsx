"use client";

import { useState, useEffect } from "react";
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
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // 页面加载后 0.5 秒开始自动翻转
    const flipTimer = setTimeout(() => {
      setFlipped(true);
    }, 500);

    // 翻转动画完成后显示底部内容（翻转总时长约 1.2 * 16 + 0.15 * 15 = 21.45 秒，简化为 3.6 秒 + 0.3 秒缓冲）
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 500 + 3600 + 300);

    return () => {
      clearTimeout(flipTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const handleBegin = () => {
    router.push("/questions");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-8">
      {/* 卡片网格 - 紧凑居中 */}
      <div className="w-full max-w-6xl mx-auto mb-8">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3">
          {archetypes.map((name, i) => (
            <motion.div
              key={name}
              className="w-full aspect-[1/2] perspective-1000 relative"
              initial={false}
              animate={{
                rotateY: flipped ? 180 : 0,
              }}
              transition={{
                duration: 1.2,  // 从 0.8 增加到 1.2 秒
                delay: i * 0.15,  // 从 0.1 增加到 0.15 秒
                ease: [0.65, 0, 0.35, 1],
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* 背面 */}
              <img
                src={`/archetypes/back/${name}_back.webp`}
                alt={`${name} back`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                style={{ 
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden"
                }}
              />
              {/* 正面 */}
              <img
                src={`/archetypes/${name}.webp`}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 底部内容区 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showContent ? 1 : 0,
          y: showContent ? 0 : 20 
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl mx-auto text-center px-4"
      >
        {/* 标题 - 缩小字体 */}
        <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
          ArcheVoyage
        </h1>

        {/* 介绍文字 */}
        <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed mb-8">
          <p>
            Inspired by Carl Jung&apos;s theory, every person is a vessel 
            for psychological archetypes — universal patterns that shape 
            how we think, feel, and relate to others.
          </p>
          <p>
            This assessment reveals your unique pattern, helping you 
            understand yourself and how you connect with the world around you.
          </p>
        </div>

        {/* 测试信息 */}
        <div className="flex items-center justify-center gap-6 mb-8 text-white/50 text-sm">
          <div className="flex items-center gap-2">
            <span>⏱️</span>
            <span>About 10 minutes</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <span>📊</span>
            <span>32 questions</span>
          </div>
        </div>

        {/* 开始按钮 - 缩小尺寸 */}
        <button
          onClick={handleBegin}
          className="w-auto px-10 py-3 bg-white text-black rounded-full text-sm md:text-base font-light transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
        >
          Begin Your Journey
        </button>
      </motion.div>
    </div>
  );
}
