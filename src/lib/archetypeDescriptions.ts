// src/lib/archetypeDescriptions.ts

import type { ArchetypeKey } from "./archetypes";

// 每个 archetype 的长段落文案
export const archetypeDescriptions: Record<ArchetypeKey, string> = {
  sage: `You are driven by a hunger to understand — not just how things work, but why they exist. You observe patterns, analyze structure, and turn confusion into clarity. Knowledge gives you freedom, and logic gives you calm. Yet when reflection becomes excess, thought can harden into distance. The true Sage learns when to stop seeking and begin perceiving — when wisdom is not accumulation but awakening. In that pause, understanding becomes compassion.`,

  philosopher: `You live within thought, drawing connections between the abstract and the intimate. Questions are your companions, and you turn them into frameworks that help life make sense. You are not just a thinker, but a weaver of meaning. When overused, this gift can spiral into analysis without action or elegant theories that never touch the ground. Your path is to let insight return to the body — allowing your reflections to become choices, relationships, and lived truths.`,

  explorer: `You feel most alive when you are moving toward the unknown. New places, ideas, and perspectives call to you, inviting you to stretch beyond the familiar. Freedom matters more than certainty, and you learn through direct experience rather than second-hand instruction. When restlessness takes over, you may drift or escape instead of committing. Your growth lies in choosing a direction that still leaves room to roam — building a life that is spacious, yet anchored.`,

  creator: `For you, life is raw material for expression. You are always composing, designing, or imagining a better form for what already exists. Ideas arrive in rich detail, and you feel a quiet joy when something inner finally takes shape in the world. Yet perfectionism can freeze your momentum, and self-critique can drown out your curiosity. You flourish when you treat every attempt as a draft, letting playfulness and iteration carry your work forward.`,

  lover: `You experience the world through depth of feeling and connection. Beauty, intimacy, and presence are not luxuries for you but ways of knowing what is truly alive. You offer devotion and attunement, making others feel seen and cherished. When fear enters, attachment can tighten into jealousy, over-merging, or losing yourself in another’s needs. Your path is to love with open eyes — honouring your own centre while allowing closeness to soften, not swallow, who you are.`,

  caregiver: `You naturally notice who is struggling and what is needed. Protection, support, and quiet reliability are how you express love. Others lean on your steadiness, trusting that you will hold things together when life becomes difficult. Yet if you neglect your own limits, care can turn into obligation, exhaustion, or subtle resentment. Your evolution is learning that saying “no” can also be an act of care — creating a rhythm of giving that is sustainable, mutual, and kind to you as well.`,

  everyman: `You are drawn to what is honest, human, and shared. Hierarchies and specialness do not impress you as much as sincerity and mutual respect. People feel relaxed around you; you make spaces feel inclusive and real. When you start shrinking yourself to keep the peace, though, you may mute your own desires or settle for “good enough.” Your work is to bring your full voice into the circle — trusting that belonging can hold difference, not just sameness.`,

  hero: `Challenge wakes up your strength. You move toward obstacles with determination, wanting to prove that effort, courage, and discipline can change what seems fixed. Others may rely on you to “make things happen” when stakes are high. Yet if your worth is tied only to winning or enduring, you can become hard on yourself and others, turning life into a series of battles. True heroism for you is fighting for what matters, not just against what threatens — including learning to rest without feeling defeated.`,

  ruler: `You have a natural instinct for structure. You bring order to chaos, shaping systems that allow others to flourish. Responsibility comes naturally to you; you prefer design over disorder, decision over drift. Yet the burden of control can become a cage. True rulership requires trust — the art of governing by clarity, not command. When you learn to build frameworks that liberate rather than confine, your authority transforms into harmony.`,

  visionary: `You see further than most — sensing patterns, futures, and possibilities long before they are obvious. Ideas arrive as whole landscapes rather than isolated points, and you are often the one naming a direction no one has quite articulated yet. When ungrounded, you may drift into ideals that never meet reality, or feel misunderstood and distant. Your growth lies in translating vision into clear steps and shared language, so that what you glimpse inwardly can become a path that others can actually walk with you.`,

  magician: `You are attuned to the hidden logic of change — how a shift in perspective, story, or system can transform an entire situation. You sense connections between inner and outer worlds and are drawn to practices that catalyse deep renewal. In shadow, this gift can slip into control, obscurity, or bypassing concrete issues with spiritual or psychological language. Your task is to use your insight transparently and ethically, inviting others into the process so transformation feels co-created rather than imposed.`,

  trickster: `You notice the cracks in every pattern and instinctively reach for humour, play, or mischief to open them wider. Rules are suggestions to you, and you reveal truth by turning things upside down. This can bring lightness, creativity, and much-needed flexibility to rigid situations. When reactive, though, you may hide behind irony, create chaos, or wound trust just to avoid boredom. Your evolution is learning when to disrupt and when to stabilise — using your wit in service of freedom, not just entertainment.`,

  innocent: `At your core you carry a genuine trust that life, people, and yourself can return to goodness. You see simple joys others rush past, and your hope can soften even hardened spaces. Yet when reality disappoints you, you may withdraw into avoidance, denial, or wishful thinking. The invitation for you is not to abandon your purity of heart, but to let it mature — seeing clearly without losing faith, and choosing responsibility not as a burden, but as a way to protect what is precious to you.`,

  mother: `You hold space for others to grow. Whether through literal caregiving or the way you build teams, homes, or projects, you create a sense of warmth, continuity, and “home base.” People come to you to be grounded and held. In shadow, protection can slide into control, over-involvement, or guilt-based loyalty. Your path is to nurture without possession — trusting that what you have tended can stand on its own, and that you are allowed to have a life beyond what you care for.`,

  rebirth: `You move through life in waves of ending and beginning. When something no longer fits, a part of you knows it must die so something truer can emerge. Crises become turning points; you shed skins others might cling to for years. The risk is becoming addicted to rupture itself, constantly burning down what you have built before it has time to deepen. Your growth lies in honouring both destruction and continuity — letting renewal root, so that each new chapter can actually be lived, not just initiated.`,

  shadow: `You are intimate with the hidden side of experience — the feelings, desires, and stories that polite surfaces prefer to ignore. Rather than being your flaw, this sensitivity is an invitation to integration. When rejected, it can show up as self-sabotage, secrecy, or harsh judgement of yourself and others. When welcomed, it becomes a source of depth, honesty, and compassion. Your journey is to meet what emerges in the dark with curiosity, allowing awareness to turn what once felt threatening into reclaimed power.`,
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
