"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArchetypeKey, ARCHETYPE_INFO } from "../../lib/archetypes";
import { archetypeDescriptions } from "../../lib/archetypeDescriptions";
import { supabase } from "@/lib/supabaseClient";

// -------- narrative 生成 --------
function generateCombinedNarrative(a1: string, a2: string, a3: string) {
  return `Your unique combination of ${a1}, ${a2}, and ${a3} reveals a dynamic personality driven by transformation, depth, and coherence. Together, these archetypes weave the language of becoming — where passion meets vision, and order turns experience into meaning.`;
}

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const topParam = searchParams.get("top");

  const [scores, setScores] = useState<Record<string, number> | null>(null);
  const [note, setNote] = useState("");
  const [email, setEmail] = useState("");
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [reportStatus, setReportStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // --- 载入 localStorage ---
  useEffect(() => {
    const raw = localStorage.getItem("arche_scores");
    if (raw) {
      setScores(JSON.parse(raw));
    }
  }, []);

  const topKeys = useMemo(() => {
    if (!topParam) return [];
    return topParam.split(",").map((k) => k.trim().toLowerCase());
  }, [topParam]);

  const archetypes = useMemo(() => {
    if (!scores) return [];
    return topKeys.map((key) => ({
      key,
      ...ARCHETYPE_INFO[key as ArchetypeKey],
      score: scores[key],
    }));
  }, [scores, topKeys]);

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  // -------- 当 scores 未加载时，避免 a1 报错 --------
  if (!scores) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        Loading result…
      </main>
    );
  }

  const [a1, a2, a3] = topKeys;

  // -------- handleSubmit（留言） --------
  const handleSubmit = async () => {
    if (!note.trim() && !email.trim()) {
      alert("Please write something or leave your email.");
      return;
    }

    setFeedbackStatus("sending");
    try {
      const { error } = await supabase.from("test_results").insert([
        {
          archetype: topKeys.join(", "),
          note,
          email,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setFeedbackStatus("sent");
      setShowNoteModal(false);
      setNote("");
      setSuccessMessage("✅ Note submitted successfully!");
      setTimeout(() => setSuccessMessage(null), 2000);
    } catch (err: any) {
      console.error("❌ Failed to upload note:", err.message);
      setFeedbackStatus("error");
    }
  };

  // -------- handleSendReport（PDF邮件） --------
  const handleSendReport = async () => {
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    const combinedNarrative = generateCombinedNarrative(a1, a2, a3);

    // 把每个 archetype 的详细信息打包好发给后端
    const items = topKeys.map((key, index) => {
      const typedKey = key as ArchetypeKey;        // ✅ 明确告诉 TS 这是 ArchetypeKey
      const info = ARCHETYPE_INFO[typedKey];
    
      return {
        key: typedKey,
        label: info.name,
        role: index === 0 ? "Dominant" : index === 1 ? "Auxiliary" : "Potential",
        strength: info.strength,
        shadow: info.shadow,
        image: info.image, // 你的 ARCHETYPE_INFO 里如果有 image 就会被用到
        paragraph: archetypeDescriptions[typedKey], // ✅ 这里用 typedKey
      };
    });

    setReportStatus("sending");

    try {
      console.log("Sending archetypes >>>", items);
      console.log("Email >>>", email);

      const res = await fetch("/api/send-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          archetypes: items,
          combinedNarrative,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send report");
      }

      setReportStatus("sent");
      setShowEmailModal(false);
      setSuccessMessage("✅ Report sent successfully!");
      setTimeout(() => setSuccessMessage(null), 2000);
    } catch (err) {
      console.error("Report send error:", err);
      setReportStatus("error");
    }
  };
  

  // -------- 页面渲染 --------
  return (
    <main className="min-h-screen bg-black text-white font-[Junge] px-6 py-12">
      <div className="max-w-5xl mx-auto text-center space-y-10">

        {/* 标题 */}
        <h1 className="text-2xl tracking-widest uppercase mb-4">
          Your archetypal constellation.
        </h1>

        {/* 三卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {archetypes.map((a, i) => (
            <div key={a.key} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 flex flex-col">
              <div className="aspect-[2/3] relative">
                <Image src={a.image} alt={a.key} fill className="object-cover opacity-90" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg tracking-[0.25em] uppercase mb-1">{a.key}</h2>
                  <div className="text-sm text-white/70 mb-3 uppercase">
                    {i === 0 ? "dominant" : i === 1 ? "auxiliary" : "potential"}
                  </div>
                </div>
                <div className="space-y-2 mt-3 text-sm text-white/80">
                  <div className="flex justify-between whitespace-nowrap">
                    <span className="text-white/50 mr-2">strength:</span>
                    <span className="truncate">{a.strength}</span>
                  </div>
                  <div className="flex justify-between whitespace-nowrap">
                    <span className="text-white/50 mr-2">shadow:</span>
                    <span className="truncate">{a.shadow}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative */}
        <div className="max-w-3xl mx-auto space-y-6 leading-relaxed text-gray-300">
          <h2 className="text-2xl md:text-3xl tracking-widest mb-8">
            {capitalize(a1)} × {capitalize(a2)} × {capitalize(a3)}
          </h2>
          <p>{archetypeDescriptions[a1 as ArchetypeKey]}</p>
          <p>{archetypeDescriptions[a2 as ArchetypeKey]}</p>
          <p>{archetypeDescriptions[a3 as ArchetypeKey]}</p>
          <hr className="border-gray-700 my-8" />
          <p className="text-gray-200 italic">
            {generateCombinedNarrative(a1, a2, a3)}
          </p>
        </div>

        {/* 留言按钮 */}
        <p
          onClick={() => setShowNoteModal(true)}
          className="text-sm text-white/60 hover:text-white underline underline-offset-4 cursor-pointer transition mt-10"
        >
          Anything on your mind? Leave a note — or let us know if you'd like to learn more &gt;
        </p>

        {/* 获取报告按钮 */}
        <div className="mt-8 text-sm text-gray-300 text-center">
          <button
            onClick={() => setShowEmailModal(true)}
            className="underline underline-offset-4 hover:text-white transition text-white/70"
          >
            Get full report (PDF) via email
          </button>
        </div>

        {/* 邮箱弹窗 */}
        {showEmailModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 w-[360px] relative">
              <button onClick={() => setShowEmailModal(false)} className="absolute top-2 right-3 text-gray-400 hover:text-white">✕</button>
              <h3 className="text-lg mb-4 font-light">Receive your full report</h3>
              <input
                className="w-full bg-black border border-neutral-700 rounded-lg p-3 text-sm mb-3 focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSendReport}
                disabled={reportStatus === "sending"}
                className="bg-white/10 w-full py-2 rounded-lg hover:bg-white/20 transition"
              >
                {reportStatus === "sending" ? "Sending..." :
                 reportStatus === "sent" ? "✅ Sent!" :
                 "Send Report"}
              </button>
            </div>
          </div>
        )}

        {/* 留言弹窗 */}
        {showNoteModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 w-[360px] relative">
              <button onClick={() => setShowNoteModal(false)} className="absolute top-2 right-3 text-gray-400 hover:text-white">✕</button>
              <h3 className="text-lg mb-4 font-light">Share your thoughts</h3>
              <textarea
                className="w-full bg-black border border-neutral-700 rounded-lg p-3 text-sm mb-2 focus:outline-none"
                placeholder="Anything on your mind?"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
              />
              <input
                className="w-full bg-black border border-neutral-700 rounded-lg p-3 text-sm mb-3 focus:outline-none"
                placeholder="Optional: your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                disabled={feedbackStatus === "sending"}
                className="bg-white/10 w-full py-2 rounded-lg hover:bg-white/20 transition"
              >
                {feedbackStatus === "sending"
                  ? "Submitting..."
                  : feedbackStatus === "sent"
                  ? "✅ Submitted!"
                  : "Submit"}
              </button>
            </div>
          </div>
        )}

        {/* 重做按钮 */}
        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/questions")}
            className="px-6 py-3 rounded-xl bg-white/20 hover:bg-white/25 transition-all duration-150"
          >
            Take the test again
          </button>
        </div>

        {/* 成功提示浮层 */}
                {successMessage && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-600/80 text-white px-4 py-2 rounded-full text-sm transition-all duration-500">
            {successMessage}
          </div>
        )}
      </div>
    </main>
  );
}

