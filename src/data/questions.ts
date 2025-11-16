// src/data/questions.ts
export type Question = {
  id: number;
  text: string;
  options: { label: string; weights: Record<string, number> }[];
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "When you start a new project, your first impulse is to—",
    options: [
      { label: "Wander and map possibilities by doing.", weights: { explorer: 2, visionary: 1 } },
      { label: "Research patterns until the path is clear.", weights: { sage: 2, philosopher: 1 } },
      { label: "Prototype something tangible right away.", weights: { creator: 2, magician: 1 } },
      { label: "Define goals and align people quickly.", weights: { ruler: 2, hero: 1 } }
    ]
  },
  {
    id: 2,
    text: "A friend is overwhelmed. You tend to—",
    options: [
      { label: "Hold space, comfort, and steady them.", weights: { caregiver: 2, mother: 1 } },
      { label: "Clarify the mess into steps.", weights: { sage: 2, ruler: 1 } },
      { label: "Offer warmth and make them feel seen.", weights: { lover: 2, innocent: 1 } },
      { label: "Reframe their story with a light twist.", weights: { trickster: 2, magician: 1 } }
    ]
  },
  {
    id: 3,
    text: "Given a free weekend, you would most likely—",
    options: [
      { label: "Go somewhere new with minimal plans.", weights: { explorer: 2, everyman: 1 } },
      { label: "Make something—music, images, objects.", weights: { creator: 2, lover: 1 } },
      { label: "Take a deep dive into books or courses.", weights: { sage: 2, philosopher: 1 } },
      { label: "Do something simple and restorative.", weights: { innocent: 2, rebirth: 1 } }
    ]
  },
  {
    id: 4,
    text: "When conflict appears, you first try to—",
    options: [
      { label: "Set boundaries and bring order.", weights: { ruler: 2, hero: 1 } },
      { label: "Repair the bond and restore trust.", weights: { lover: 2, caregiver: 1 } },
      { label: "Defuse tension with wit or reframing.", weights: { trickster: 2, magician: 1 } },
      { label: "Seek the underlying truth calmly.", weights: { philosopher: 2, sage: 1 } }
    ]
  },
  {
    id: 5,
    text: "In your creative work, you naturally—",
    options: [
      { label: "Translate intuition into form.", weights: { creator: 2, magician: 1 } },
      { label: "Build coherent frameworks from ideas.", weights: { sage: 2, philosopher: 1 } },
      { label: "Channel feeling into connection.", weights: { lover: 2, innocent: 1 } },
      { label: "Anticipate what could exist next.", weights: { visionary: 2, explorer: 1 } }
    ]
  },
  {
    id: 6,
    text: "When choosing a career direction, you lean toward—",
    options: [
      { label: "A bold future-tilted vision.", weights: { visionary: 2, ruler: 1 } },
      { label: "Learning through real-world challenges.", weights: { explorer: 2, hero: 1 } },
      { label: "Depth, mastery, and understanding.", weights: { sage: 2, philosopher: 1 } },
      { label: "Belonging and steady contribution.", weights: { everyman: 2, caregiver: 1 } }
    ]
  },
  {
    id: 7,
    text: "After a setback, your pattern is to—",
    options: [
      { label: "Shed the old and start anew.", weights: { rebirth: 2, explorer: 1 } },
      { label: "Reflect and extract lessons.", weights: { philosopher: 2, sage: 1 } },
      { label: "Stay gentle; reconnect with what matters.", weights: { innocent: 2, lover: 1 } },
      { label: "Try a counter-intuitive move to unlock it.", weights: { magician: 2, trickster: 1 } }
    ]
  },
  {
    id: 8,
    text: "In group work, you often become—",
    options: [
      { label: "The coordinator who sets direction.", weights: { ruler: 2, visionary: 1 } },
      { label: "The carer who stabilizes the climate.", weights: { caregiver: 2, mother: 1 } },
      { label: "The pathfinder who opens options.", weights: { explorer: 2, creator: 1 } },
      { label: "The ice-breaker who keeps energy fluid.", weights: { trickster: 2, everyman: 1 } }
    ]
  },
  {
    id: 9,
    text: "How do you prefer to learn?",
    options: [
      { label: "Through patterns, models, and first principles.", weights: { sage: 2, philosopher: 1 } },
      { label: "By making and iterating.", weights: { creator: 2, explorer: 1 } },
      { label: "Side-by-side with others, simply and steadily.", weights: { everyman: 2, innocent: 1 } },
      { label: "By trying small magic that changes the system.", weights: { magician: 2, visionary: 1 } }
    ]
  },
  {
    id: 10,
    text: "Choosing a gift, you go for—",
    options: [
      { label: "Something that feels emotionally right.", weights: { lover: 2, caregiver: 1 } },
      { label: "A handmade or custom piece.", weights: { creator: 2, magician: 1 } },
      { label: "Simple, inclusive, and reliably useful.", weights: { everyman: 2, innocent: 1 } },
      { label: "A book/tool that grows the mind.", weights: { sage: 2, philosopher: 1 } }
    ]
  },
  {
    id: 11,
    text: "When you see injustice, you tend to—",
    options: [
      { label: "Stand up and act decisively.", weights: { hero: 2, ruler: 1 } },
      { label: "Name the truth and educate calmly.", weights: { philosopher: 2, sage: 1 } },
      { label: "Expose hypocrisy with sharp humor.", weights: { trickster: 2, magician: 1 } },
      { label: "Protect and tend to the harmed.", weights: { caregiver: 2, mother: 1 } }
    ]
  },
  {
    id: 12,
    text: "At a social gathering, you are most likely to—",
    options: [
      { label: "Playfully connect many circles.", weights: { trickster: 2, everyman: 1 } },
      { label: "Pull one person into a deep conversation.", weights: { lover: 2, explorer: 1 } },
      { label: "Observe and synthesize the vibe.", weights: { sage: 2, philosopher: 1 } },
      { label: "Keep it light, simple, and kind.", weights: { innocent: 2, creator: 1 } }
    ]
  },
  {
    id: 13,
    text: "When routines get stale, you—",
    options: [
      { label: "Change scene and rediscover aliveness.", weights: { rebirth: 2, explorer: 1 } },
      { label: "Tighten structure to regain momentum.", weights: { ruler: 2, everyman: 1 } },
      { label: "Invent a new game to engage yourself.", weights: { visionary: 2, creator: 1 } },
      { label: "Simplify until ease returns.", weights: { innocent: 2, caregiver: 1 } }
    ]
  },
  {
    id: 14,
    text: "When teaching others, you—",
    options: [
      { label: "Break it down with care and patience.", weights: { sage: 2, caregiver: 1 } },
      { label: "Use playful experiments to unlock insight.", weights: { magician: 2, trickster: 1 } },
      { label: "Offer structure and purpose.", weights: { ruler: 2, philosopher: 1 } },
      { label: "Lead with warmth and encouragement.", weights: { lover: 2, innocent: 1 } }
    ]
  },
  {
    id: 15,
    text: "Under time pressure, you mostly—",
    options: [
      { label: "Act and cut through obstacles.", weights: { hero: 2, ruler: 1 } },
      { label: "Scout a fast path that still adapts.", weights: { explorer: 2, visionary: 1 } },
      { label: "Trust your mental model and commit.", weights: { sage: 2, philosopher: 1 } },
      { label: "Keep people steady and aligned.", weights: { everyman: 2, caregiver: 1 } }
    ]
  },
  {
    id: 16,
    text: "Which motive feels most like you right now?",
    options: [
      { label: "Understanding and meaning.", weights: { philosopher: 2, sage: 1 } },
      { label: "Love and intimacy.", weights: { lover: 2, mother: 1 } },
      { label: "Mastery and creation.", weights: { creator: 2, hero: 1 } },
      { label: "Freedom and exploration.", weights: { explorer: 2, visionary: 1 } }
    ]
  },
  {
    id: 17,
    text: "When things are ambiguous, you—",
    options: [
      { label: "Explore and sense patterns as you go.", weights: { explorer: 2, philosopher: 1 } },
      { label: "Stabilize with simple rules.", weights: { ruler: 2, innocent: 1 } },
      { label: "Try a catalytic small change.", weights: { magician: 2, visionary: 1 } },
      { label: "Keep people grounded and included.", weights: { everyman: 2, caregiver: 1 } }
    ]
  },
  {
    id: 18,
    text: "Your feedback style is often—",
    options: [
      { label: "Gentle, specific, and caring.", weights: { caregiver: 2, lover: 1 } },
      { label: "Clear, structured, and firm.", weights: { ruler: 2, sage: 1 } },
      { label: "Disarming, witty, and revealing.", weights: { trickster: 2, magician: 1 } },
      { label: "Reflective and question-driven.", weights: { philosopher: 2, innocent: 1 } }
    ]
  },
  {
    id: 19,
    text: "After a win, you tend to—",
    options: [
      { label: "Share it with the group and relax.", weights: { everyman: 2, innocent: 1 } },
      { label: "Shift focus to the next horizon.", weights: { explorer: 2, rebirth: 1 } },
      { label: "Scale the order and set new bars.", weights: { ruler: 2, visionary: 1 } },
      { label: "Savor meaning; channel it into art.", weights: { lover: 2, creator: 1 } }
    ]
  },
  {
    id: 20,
    text: "When you feel blocked, you—",
    options: [
      { label: "Make a tiny thing just to move.", weights: { creator: 2, magician: 1 } },
      { label: "Change context completely.", weights: { explorer: 2, rebirth: 1 } },
      { label: "Map causes and re-decide.", weights: { sage: 2, philosopher: 1 } },
      { label: "Connect with someone you trust.", weights: { lover: 2, everyman: 1 } }
    ]
  },
  {
    id: 21,
    text: "Which principle do you protect first?",
    options: [
      { label: "Fairness and clear rules.", weights: { ruler: 2, hero: 1 } },
      { label: "Loyalty and care for my people.", weights: { everyman: 2, mother: 1 } },
      { label: "Truth and clarity.", weights: { sage: 2, philosopher: 1 } },
      { label: "Growth and future potential.", weights: { explorer: 2, visionary: 1 } }
    ]
  },
  {
    id: 22,
    text: "How do you manage risk?",
    options: [
      { label: "Bet big where the future is obvious.", weights: { visionary: 2, hero: 1 } },
      { label: "Reduce variance with structure.", weights: { ruler: 2, sage: 1 } },
      { label: "Experiment at the edges.", weights: { explorer: 2, trickster: 1 } },
      { label: "Keep it simple and human-safe.", weights: { innocent: 2, caregiver: 1 } }
    ]
  },
  {
    id: 23,
    text: "Under stress, you more often—",
    options: [
      { label: "Clamp down and over-control.", weights: { ruler: 2, shadow: -1 } },
      { label: "Withdraw into analysis.", weights: { philosopher: 2, shadow: -1 } },
      { label: "Reach out and co-regulate.", weights: { lover: 2, caregiver: 1 } },
      { label: "Burn it down and reinvent.", weights: { rebirth: 2, explorer: 1 } }
    ]
  },
  {
    id: 24,
    text: "In close relationships, you most need—",
    options: [
      { label: "Depth and emotional honesty.", weights: { lover: 2, innocent: 1 } },
      { label: "Reliability and belonging.", weights: { everyman: 2, caregiver: 1 } },
      { label: "Freedom to roam and dream together.", weights: { explorer: 2, visionary: 1 } },
      { label: "Stability and shared rules.", weights: { ruler: 2, sage: 1 } }
    ]
  },
  {
    id: 25,
    text: "How do you prefer to spend your best hours?",
    options: [
      { label: "Designing systems and schedules.", weights: { ruler: 2, sage: 1 } },
      { label: "Making and refining craft.", weights: { creator: 2, magician: 1 } },
      { label: "Hosting and connecting people.", weights: { lover: 2, everyman: 1 } },
      { label: "Roaming, noting, learning by doing.", weights: { explorer: 2, philosopher: 1 } }
    ]
  },
  {
    id: 26,
    text: "Your sense of spirituality feels like—",
    options: [
      { label: "Seeking meaning beyond appearances.", weights: { philosopher: 2, sage: 1 } },
      { label: "Simple goodness and gratitude.", weights: { innocent: 2, lover: 1 } },
      { label: "Vision, symbols, and synchronicity.", weights: { visionary: 2, magician: 1 } },
      { label: "Care woven into daily life.", weights: { everyman: 2, mother: 1 } }
    ]
  },
  {
    id: 27,
    text: "When criticized, you first—",
    options: [
      { label: "Clarify standards and act to improve.", weights: { hero: 2, sage: 1 } },
      { label: "Open a human conversation.", weights: { lover: 2, everyman: 1 } },
      { label: "Deflect with humor then reflect.", weights: { trickster: 2, shadow: -1 } },
      { label: "Die a little, then transform it.", weights: { rebirth: 2, philosopher: 1 } }
    ]
  },
  {
    id: 28,
    text: "At the start of something new, you—",
    options: [
      { label: "Scout terrain and follow curiosity.", weights: { explorer: 2, visionary: 1 } },
      { label: "Create a first artifact.", weights: { creator: 2, magician: 1 } },
      { label: "Define scopes, roles, and cadence.", weights: { ruler: 2, sage: 1 } },
      { label: "Keep it light and inclusive.", weights: { everyman: 2, innocent: 1 } }
    ]
  },
  {
    id: 29,
    text: "In community, your natural role is—",
    options: [
      { label: "The neighbor who keeps everyone included.", weights: { everyman: 2, caregiver: 1 } },
      { label: "The organizer who sets direction.", weights: { ruler: 2, hero: 1 } },
      { label: "The jester who moves energy and truth.", weights: { trickster: 2, magician: 1 } },
      { label: "The thinker who holds meaning.", weights: { sage: 2, philosopher: 1 } }
    ]
  },
  {
    id: 30,
    text: "How do you approach personal change?",
    options: [
      { label: "Shed skins and begin again.", weights: { rebirth: 2, explorer: 1 } },
      { label: "Imagine a future and build toward it.", weights: { creator: 2, visionary: 1 } },
      { label: "Stabilize through simple practices.", weights: { ruler: 2, innocent: 1 } },
      { label: "Tend relationships that make change safe.", weights: { lover: 2, mother: 1 } }
    ]
  },
  {
    id: 31,
    text: "When seeking truth, you—",
    options: [
      { label: "Reason it out and triangulate.", weights: { philosopher: 2, sage: 1 } },
      { label: "Flip perspectives to reveal blindspots.", weights: { magician: 2, trickster: 1 } },
      { label: "Test in action and see what holds.", weights: { hero: 2, ruler: 1 } },
      { label: "Walk it and see where it leads.", weights: { explorer: 2, visionary: 1 } }
    ]
  },
  {
    id: 32,
    text: "If you could leave one legacy, it would be—",
    options: [
      { label: "A web of care that outlives me.", weights: { mother: 2, caregiver: 1 } },
      { label: "A clear path into a better future.", weights: { visionary: 2, ruler: 1 } },
      { label: "Works that keep teaching and inspiring.", weights: { creator: 2, sage: 1 } },
      { label: "Relationships that made life gentler.", weights: { lover: 2, everyman: 1 } }
    ]
  }
];
