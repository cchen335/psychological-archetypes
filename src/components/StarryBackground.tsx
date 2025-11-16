import React from "react";

function StarryBackground() {
  // 你的星空背景实现 ...
  return <div className="fixed inset-0 -z-10 pointer-events-none">{/* ... */}</div>;
}

// ✅ 防止跟随问题页的 state 反复渲染
export default React.memo(StarryBackground);
