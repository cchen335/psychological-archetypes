"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// ✅ 定义 ArchetypeKey 类型（原来从 archetypes.ts 导入，现在直接定义）
type ArchetypeKey =
  | "sage"
  | "philosopher"
  | "explorer"
  | "creator"
  | "lover"
  | "caregiver"
  | "everyman"
  | "hero"
  | "ruler"
  | "visionary"
  | "magician"
  | "trickster"
  | "innocent"
  | "mother"
  | "rebirth"
  | "shadow";

// ✅ 空向量初始值（原来从 archetypes.ts 导入，现在直接定义）
const EMPTY_VECTOR: Record<ArchetypeKey, number> = {
  sage: 0,
  philosopher: 0,
  explorer: 0,
  creator: 0,
  lover: 0,
  caregiver: 0,
  everyman: 0,
  hero: 0,
  ruler: 0,
  visionary: 0,
  magician: 0,
  trickster: 0,
  innocent: 0,
  mother: 0,
  rebirth: 0,
  shadow: 0,
};

/** 题目结构 */
type Option = {
  label: string;
  weights: Partial<Record<ArchetypeKey, number>>;
};

type QuestionItem = {
  id: number;
  text: string;
  options: Option[];
};

export default function QuestionsPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [idx, setIdx] = useState(0);
  const total = questions.length;

  /** 当前题目 */
  const current = useMemo(() => questions[idx], [questions, idx]);

  /** 进度百分比 */
  const progressPct = useMemo(() => {
    if (!total) return 0;
    return Math.round((idx / total) * 100);
  }, [idx, total]);

  /** 加载题库 */
  useEffect(() => {
    let mounted = true;
    fetch("/data/questions.json")
      .then((r) => r.json())
      .then((qs: QuestionItem[]) => {
        if (!mounted) return;
        setQuestions(qs);
        setAnswers(Array(qs.length).fill(-1));
        setIdx(0);
      })
      .catch((e) => console.error("❌ Failed to load questions.json:", e));
    return () => {
      mounted = false;
    };
  }, []);

  /** 点击选项 */
  const pick = useCallback(
    (choiceIndex: number) => {
      setAnswers((prev) => {
        const next = prev.length ? [...prev] : Array(total).fill(-1);
        next[idx] = choiceIndex;
        return next;
      });

      if (idx + 1 < total) {
        setIdx((i) => i + 1);
      } else {
        finish();
      }
    },
    [idx, total] // eslint-disable-line react-hooks/exhaustive-deps
  );

 /** 计算分数并跳转结果页 */
const finish = useCallback(() => {
  const vec = { ...EMPTY_VECTOR };

  questions.forEach((q, i) => {
    const pickIdx = answers[i];
    if (pickIdx == null || pickIdx < 0) return;
    const weights = q.options[pickIdx]?.weights || {};
    for (const [k, v] of Object.entries(weights) as [ArchetypeKey, number][]) {
      const key = k.toLowerCase() as ArchetypeKey;
      if (key in vec) vec[key] += v ?? 0;
    }
  });

  try {
    localStorage.setItem("arche_answers", JSON.stringify(answers));
    localStorage.setItem("arche_scores", JSON.stringify(vec));
  } catch (e) {
    console.warn("⚠️ localStorage write failed:", e);
  }

  // ✅ 新增：计算前三 archetype
  const top3 = Object.entries(vec)
    .sort((a, b) => b[1] - a[1]) // 从大到小排序
    .slice(0, 3)
    .map(([k]) => k);

  // ✅ 打印一下方便调试
  console.log("🧠 Top 3 Archetypes:", top3);

  // ✅ 跳转到结果页并带上 URL 参数
  const query = top3.join(",");
  router.push(`/result?top=${query}`);
}, [answers, questions, router]);


  /** 返回上一题 */
  const back = useCallback(() => {
    setIdx((i) => Math.max(0, i - 1));
  }, []);

  const handleReturnHome = () => {
    if (confirm("Are you sure you want to return to the home page? Your progress will be lost.")) {
      router.push("/");
    }
  };

  return (
    <main className="relative min-h-screen text-white font-[Junge] no-flicker">
      {/* 返回主页按钮 */}
      <div className="absolute top-6 left-6 z-10">
        <button
          onClick={handleReturnHome}
          className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1"
        >
          ← Home
        </button>
      </div>

      {/* 顶部进度条 */}
      <div className="max-w-3xl mx-auto px-6 pt-12">
        <div className="mb-4 text-sm opacity-70">
          Question {Math.min(idx + 1, total || 0)} / {total || "-"}
        </div>
        <div className="h-2 w-full bg-white/10 rounded overflow-hidden">
          <div
            className="h-full bg-white/60 transition-all duration-200"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* 问题区 */}
      <section className="max-w-3xl mx-auto px-6 py-10 no-flicker">
        {!current ? (
          <p className="opacity-70">Loading questions…</p>
        ) : (
          <>
            <h1 className="text-2xl md:text-3xl leading-relaxed mb-8">
              {current.text}
            </h1>

            <ul className="grid gap-3">
              {current.options.map((op, i) => {
                const picked = answers[idx] === i;
                return (
                  <li key={i}>
                    <button
                      onClick={() => pick(i)}
                      className={
                        "w-full text-left rounded-xl px-5 py-4 transition-[background] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 " +
                        (picked
                          ? "bg-white/20 hover:bg-white/25"
                          : "bg-white/10 hover:bg-white/15")
                      }
                    >
                      {op.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* 底部控制 */}
            <div className="mt-8 flex items-center justify-between text-sm opacity-80">
              <button
                onClick={back}
                disabled={idx === 0}
                className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 disabled:opacity-40 disabled:pointer-events-none transition-[background] duration-150"
              >
                ← Back
              </button>

              <div>
                {idx + 1 < total ? (
                  <span className="opacity-70">
                    Select an option to continue →
                  </span>
                ) : (
                  <button
                    onClick={finish}
                    className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/25 transition-[background] duration-150"
                  >
                    Finish
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
