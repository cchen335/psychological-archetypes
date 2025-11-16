import StarryBackground from "@/components/StarryBackground";

export default function Page() {
  return (
    <main className="relative min-h-screen text-white font-[Junge]">
      <StarryBackground />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl">Anything on your mind?</h1>
        <textarea className="w-[min(640px,90vw)] h-32 p-3 text-black rounded-md" placeholder="Leave a note..." />
        <button className="border px-6 py-2">Submit</button>
      </div>
    </main>
  );
}
