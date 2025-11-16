"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SupabaseTestPage() {
  const [status, setStatus] = useState("waiting...");

  const testInsert = async () => {
    try {
      const { data, error } = await supabase
        .from("test_results")
        .insert([
          {
            archetype: "TestInsert",
            note: "This is a test row",
            email: "test@example.com",
          },
        ]);

      if (error) {
        console.error("❌ Insert error:", error);
        setStatus(`❌ Failed: ${error.message}`);
      } else {
        console.log("✅ Insert success:", data);
        setStatus("✅ Insert successful!");
      }
    } catch (err: any) {
      console.error("⚠️ Unexpected error:", err);
      setStatus(`⚠️ Exception: ${err.message}`);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-2xl mb-6">Supabase Connection Test</h1>
      <button
        onClick={testInsert}
        className="bg-neutral-800 px-6 py-3 rounded-lg hover:bg-neutral-700 transition"
      >
        Run Insert Test
      </button>
      <p className="mt-4 text-gray-400">{status}</p>
    </main>
  );
}
