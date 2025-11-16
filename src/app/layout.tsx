// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import StarryBackground from "../components/StarryBackground";// ★ 你的组件在 src/app/components 下

export const metadata: Metadata = {
  title: "ArcheVoyage",
  description: "Psychological archetypes test",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* 直接给 body 黑底白字，避免初次白屏 */}
      <body className="bg-black text-white font-[Junge]">
        {/* ★ 背景固定在全局，只渲染一次，不随页面/题目切换重绘 */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <StarryBackground />
        </div>

        {/* 页面内容 */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
