import { Suspense } from "react";
import ResultPageClient from "./ResultPageClient";

// 这里才是路由级配置：告诉 Next 这个页面是动态的
export const dynamic = "force-dynamic";

export default function ResultPage() {
  return (
    <Suspense fallback={null}>
      <ResultPageClient />
    </Suspense>
  );
}
