import { Suspense } from "react";
import ResultPageClient from "./ResultPageClient";

// 强制动态渲染，不进行静态生成
export const dynamic = 'force-dynamic';

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white/60 text-sm font-light">Loading your results...</div>
      </div>
    }>
      <ResultPageClient />
    </Suspense>
  );
}
