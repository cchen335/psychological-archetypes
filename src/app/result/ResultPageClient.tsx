"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ARCHETYPE_INFO, generateNarrative, getArchetypeDescription } from "@/lib/archetypeDescriptions";

export default function ResultPageClient() {
  const searchParams = useSearchParams();
  const archetypesParam = searchParams.get("top");
  const archetypes = archetypesParam ? archetypesParam.split(",") : [];

  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  
  // 留言功能
  const [note, setNote] = useState("");
  const [noteEmail, setNoteEmail] = useState("");  // 独立的邮箱字段
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [noteStatus, setNoteStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // 检查是否有足够的原型数据
  if (archetypes.length < 3) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Invalid Results</h1>
          <p className="text-white/60">Please complete the assessment first.</p>
          <a href="/" className="text-white/80 hover:text-white mt-4 inline-block">
            ← Return to Home
          </a>
        </div>
      </div>
    );
  }

  const [first, second, third] = archetypes;
  
  // 检查原型是否存在于 ARCHETYPE_INFO 中
  const firstInfo = ARCHETYPE_INFO[first];
  const secondInfo = ARCHETYPE_INFO[second];
  const thirdInfo = ARCHETYPE_INFO[third];

  if (!firstInfo || !secondInfo || !thirdInfo) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-light mb-4">Error Loading Results</h1>
          <p className="text-white/60 mb-4">
            We couldn't load your archetype data.
          </p>
          <a href="/" className="text-white/80 hover:text-white inline-block">
            ← Return to Home and Retake Test
          </a>
        </div>
      </div>
    );
  }

  // 生成融合 Narrative
  const narrative = generateNarrative(archetypes);
  
  // 获取详细描述
  const firstDesc = getArchetypeDescription(first);
  const secondDesc = getArchetypeDescription(second);
  const thirdDesc = getArchetypeDescription(third);

  const handleSendReport = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/send-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          archetypes,
          roles: ["DOMINANT", "AUXILIARY", "POTENTIAL"],
        }),
      });

      if (response.ok) {
        setSent(true);
      } else {
        setError("Failed to send report. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setSending(false);
    }
  };

  // 提交留言
  const handleSubmitNote = async () => {
    if (!note.trim()) {
      return;
    }

    setNoteStatus("sending");

    try {
      // 动态导入 Supabase 客户端
      const { supabase } = await import("@/lib/supabaseClient");
      
      const { error } = await supabase.from("test_results").insert([
        {
          archetype: archetypes.join(", "),
          note: note.trim(),
          email: noteEmail.trim() || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;
      
      setNoteStatus("sent");
      setShowNoteModal(false);
      setNote("");
      setNoteEmail("");
      
      // 3秒后重置状态（延长显示时间）
      setTimeout(() => setNoteStatus("idle"), 3000);
    } catch (err) {
      console.error("Failed to submit note:", err);
      setNoteStatus("error");
      setTimeout(() => setNoteStatus("idle"), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <h1 className="text-3xl md:text-4xl font-light text-center mb-2 tracking-wide">
          Your Archetypal Constellation
        </h1>
        <p className="text-center text-white/60 mb-12 text-sm md:text-base font-light">
          The three patterns shaping your psychological landscape
        </p>

        {/* 三张卡片 - 修改比例为 1:2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { info: firstInfo, role: "Dominant" },
            { info: secondInfo, role: "Auxiliary" },
            { info: thirdInfo, role: "Potential" },
          ].map(({ info, role }, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
            >
              {/* 图片 - 1:1.4 比例 */}
              <div className="w-full aspect-[10/14] relative">
                <img
                  src={info.image}
                  alt={info.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light mb-1">{info.name}</h3>
                <p className="text-[9px] uppercase tracking-widest text-white/25 mb-4 font-extralight">
                  {role}
                </p>
                <div className="space-y-3 text-sm font-light">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                      Strength
                    </p>
                    <p className="text-white/80">{info.strength}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                      Shadow
                    </p>
                    <p className="text-white/80">{info.shadow}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative 部分 */}
        <div className="text-center mb-6">
          <h2 className="text-xs uppercase tracking-widest text-white/40 font-light">
            Your Unique Pattern
          </h2>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 md:p-10 mb-12 border border-white/10">
          <div className="prose prose-invert max-w-none">
            <div 
              className="text-white/80 leading-relaxed text-base font-light"
              dangerouslySetInnerHTML={{ __html: narrative.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n\n/g, '<br/><br/>') }}
            />
          </div>
        </div>

        {/* 分隔线 */}
        <div className="h-px bg-white/10 mb-12"></div>

        {/* 详细描述标题 */}
        <div className="text-center mb-8">
          <h2 className="text-xs uppercase tracking-widest text-white/40 font-light">
            Understanding Each Archetype
          </h2>
        </div>

        {/* 详细描述 */}
        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-xl font-light mb-2">
              {firstInfo.name.toUpperCase()} <span className="text-[10px] text-white/25 font-extralight tracking-wider">· DOMINANT</span>
            </h3>
            <p className="text-white/70 leading-relaxed font-light">{firstDesc}</p>
          </div>

          <div>
            <h3 className="text-xl font-light mb-2">
              {secondInfo.name.toUpperCase()} <span className="text-[10px] text-white/25 font-extralight tracking-wider">· AUXILIARY</span>
            </h3>
            <p className="text-white/70 leading-relaxed font-light">{secondDesc}</p>
          </div>

          <div>
            <h3 className="text-xl font-light mb-2">
              {thirdInfo.name.toUpperCase()} <span className="text-[10px] text-white/25 font-extralight tracking-wider">· POTENTIAL</span>
            </h3>
            <p className="text-white/70 leading-relaxed font-light">{thirdDesc}</p>
          </div>
        </div>

        {/* 邮件报告部分 */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-6">
          <h3 className="text-xl font-light mb-4 text-center">
            Get Your Full Report
          </h3>
          <p className="text-white/60 text-center mb-6 text-sm font-light">
            Receive your complete archetypal constellation via email
          </p>

          {!sent ? (
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors text-white font-light"
                disabled={sending}
              />
              <button
                onClick={handleSendReport}
                disabled={sending}
                className="px-6 py-3 bg-white text-black rounded-lg font-light hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Report"}
              </button>
            </div>
          ) : (
            <div className="text-center text-green-400 font-light">
              ✓ Report sent! Check your email.
            </div>
          )}

          {error && (
            <p className="text-red-400 text-center mt-3 text-sm font-light">{error}</p>
          )}
        </div>

        {/* 留言按钮 */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowNoteModal(true)}
            className="text-sm text-white/60 hover:text-white underline underline-offset-4 transition-colors font-light"
          >
            Anything on your mind? Leave a note →
          </button>
          
          {/* 留言成功提示 */}
          {noteStatus === "sent" && (
            <div className="mt-3 text-green-400 text-sm font-light">
              ✓ Thank you for sharing your thoughts!
            </div>
          )}
        </div>

        {/* 留言弹窗 */}
        {showNoteModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 w-full max-w-md relative">
              <button 
                onClick={() => setShowNoteModal(false)} 
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
              <h3 className="text-lg mb-4 font-light">Share your thoughts</h3>
              <textarea
                className="w-full bg-black border border-neutral-700 rounded-lg p-3 text-sm mb-3 focus:outline-none focus:border-white/40 font-light resize-none"
                placeholder="Anything on your mind?"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={4}
              />
              <input
                type="email"
                className="w-full bg-black border border-neutral-700 rounded-lg p-3 text-sm mb-3 focus:outline-none focus:border-white/40 font-light"
                placeholder="Optional: your email"
                value={noteEmail}
                onChange={(e) => setNoteEmail(e.target.value)}
              />
              <button
                onClick={handleSubmitNote}
                disabled={noteStatus === "sending" || !note.trim()}
                className="bg-white/10 w-full py-2 rounded-lg hover:bg-white/20 transition disabled:opacity-50 disabled:cursor-not-allowed font-light"
              >
                {noteStatus === "sending" ? "Submitting..." :
                 noteStatus === "sent" ? "✅ Submitted!" :
                 noteStatus === "error" ? "❌ Error, try again" :
                 "Submit"}
              </button>
            </div>
          </div>
        )}

        {/* 返回主页 + 重做测试 */}
        <div className="flex justify-center gap-8 text-sm font-light">
          <a
            href="/"
            className="text-white/60 hover:text-white transition-colors"
          >
            ← Return to Home
          </a>
          <a
            href="/questions"
            className="text-white/60 hover:text-white transition-colors"
          >
            Take Test Again →
          </a>
        </div>
      </div>
    </div>
  );
}
