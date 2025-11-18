// src/lib/archetypeDescriptions.ts
import type { ArchetypeKey } from "./archetypes";

// 每个 archetype 的长段落文案
export const archetypeDescriptions: Record<ArchetypeKey, string> = {
  sage: `You are driven by a hunger to understand — not just how things work, but why they exist. You observe patterns, analyze structure, and turn confusion into clarity. Knowledge gives you freedom, and logic gives you calm. Yet when reflection becomes excess, thought can harden into distance. The true Sage learns when to stop seeking and begin perceiving — when wisdom is not accumulation but awakening. In that pause, understanding becomes compassion.`,
  ruler: `You have a natural instinct for structure. You bring order to chaos, shaping systems that allow others to flourish. Responsibility comes naturally to you; you prefer design over disorder, decision over drift. Yet the burden of control can become a cage. True rulership requires trust — the art of governing by clarity, not command. When you learn to build frameworks that liberate rather than confine, your authority transforms into harmony.`,
  philosopher: `You live within thought, drawing connections between the abstract and the intimate. You analyze, synthesize, and translate confusion into frameworks. Yet reason without warmth can freeze understanding. The true Philosopher learns that insight deepens through feeling — that intellect matures only when it allows intuition to speak. You are not just a thinker, but a weaver of meaning.`,

  // 其他 archetype 先留空，后面可以再填
  explorer: "",
  creator: "",
  lover: "",
  caregiver: "",
  everyman: "",
  hero: "",
  visionary: "",
  magician: "",
  trickster: "",
  innocent: "",
  mother: "",
  rebirth: "",
  shadow: "",
};

// 根据 3 个 archetype 生成综合 narrative
export function generateCombinedNarrative(
  a1: ArchetypeKey,
  a2: ArchetypeKey,
  a3: ArchetypeKey
): string {
  const labels = [a1, a2, a3].map((k) => k.toLowerCase());

  return `Your unique combination of ${labels[0]}, ${labels[1]}, and ${labels[2]} reveals a dynamic personality driven by transformation, depth, and coherence. Together, these archetypes weave the language of becoming — where passion meets vision, and order turns experience into meaning.`;
}
