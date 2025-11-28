// Archetype 基本信息
export const ARCHETYPE_INFO: Record<
  string,
  { name: string; tagline: string; strength: string; shadow: string; image: string }
> = {
  sage: {
    name: "Sage",
    tagline: "The Seeker of Truth",
    strength: "analytical, insightful, reflective",
    shadow: "detached, overcritical, indecisive",
    image: "/archetypes/sage.webp",
  },
  philosopher: {
    name: "Philosopher",
    tagline: "The Thinker",
    strength: "thoughtful, integrative, rational",
    shadow: "circular, skeptical, withdrawn",
    image: "/archetypes/philosopher.webp",
  },
  explorer: {
    name: "Explorer",
    tagline: "The Seeker",
    strength: "curious, adventurous, independent",
    shadow: "restless, aimless, isolated",
    image: "/archetypes/explorer.webp",
  },
  creator: {
    name: "Creator",
    tagline: "The Maker",
    strength: "inventive, expressive, visionary",
    shadow: "perfectionist, scattered, self-doubting",
    image: "/archetypes/creator.webp",
  },
  lover: {
    name: "Lover",
    tagline: "The Intimate",
    strength: "passionate, devoted, present",
    shadow: "possessive, dependent, dramatic",
    image: "/archetypes/lover.webp",
  },
  caregiver: {
    name: "Caregiver",
    tagline: "The Nurturer",
    strength: "compassionate, supportive, selfless",
    shadow: "martyring, enabling, neglectful of self",
    image: "/archetypes/caregiver.webp",
  },
  everyman: {
    name: "Everyman",
    tagline: "The Realist",
    strength: "grounded, relatable, authentic",
    shadow: "cynical, conforming, undifferentiated",
    image: "/archetypes/everyman.webp",
  },
  hero: {
    name: "Hero",
    tagline: "The Warrior",
    strength: "courageous, determined, resilient",
    shadow: "aggressive, ruthless, defensive",
    image: "/archetypes/hero.webp",
  },
  ruler: {
    name: "Ruler",
    tagline: "The Leader",
    strength: "authoritative, organized, responsible",
    shadow: "controlling, rigid, domineering",
    image: "/archetypes/ruler.webp",
  },
  visionary: {
    name: "Visionary",
    tagline: "The Innovator",
    strength: "imaginative, inspired, transformative",
    shadow: "unrealistic, chaotic, disconnected",
    image: "/archetypes/visionary.webp",
  },
  magician: {
    name: "Magician",
    tagline: "The Transformer",
    strength: "transformative, insightful, catalytic",
    shadow: "manipulative, secretive, destructive",
    image: "/archetypes/magician.webp",
  },
  trickster: {
    name: "Trickster",
    tagline: "The Jester",
    strength: "playful, clever, liberating",
    shadow: "irresponsible, deceptive, chaotic",
    image: "/archetypes/trickster.webp",
  },
  innocent: {
    name: "Innocent",
    tagline: "The Idealist",
    strength: "optimistic, trusting, pure-hearted",
    shadow: "naive, dependent, in denial",
    image: "/archetypes/innocent.webp",
  },
  mother: {
    name: "Mother",
    tagline: "The Nurturer",
    strength: "nurturing, protective, unconditional",
    shadow: "smothering, possessive, guilt-inducing",
    image: "/archetypes/mother.webp",
  },
  rebirth: {
    name: "Rebirth",
    tagline: "The Phoenix",
    strength: "transformative, resilient, evolutionary",
    shadow: "destructive, unstable, compulsive",
    image: "/archetypes/rebirth.webp",
  },
  shadow: {
    name: "Shadow",
    tagline: "The Hidden Self",
    strength: "authentic, integrative, powerful",
    shadow: "destructive, repressed, overwhelming",
    image: "/archetypes/shadow.webp",
  },
};

// 详细描述（每个原型独立的段落）
export const ARCHETYPE_DESCRIPTIONS: Record<string, string> = {
  sage: "You are driven by a hunger to understand — not surface answers, but deep, structural clarity. You observe patterns others miss, ask questions that matter, and refuse easy explanations. For you, knowledge isn't power in the conventional sense; it's the foundation of everything else. You live to see clearly, to strip away illusion and get to what's true. This can make you both illuminating to be around and quietly exhausting to yourself, always sensing there's another layer beneath what seems obvious.",
  
  philosopher: "You live within thought itself — not as escape, but as your natural habitat. You connect ideas across domains, building frameworks that make sense of complexity. Where others see fragments, you see systems; where they see contradictions, you sense deeper coherence waiting to be articulated. Your mind is always synthesizing, always looking for the unifying principle. This makes you a bridge-builder between disparate fields and perspectives, though sometimes you can get lost in abstraction, circling concepts rather than landing on conclusions.",
  
  explorer: "For you, life is best understood through direct encounter. You seek new territories — physical, intellectual, emotional — not because you're running from something, but because discovery is how you feel most alive. Comfort, for you, is suspect; it signals stagnation. You trust your ability to adapt, to figure things out as you go. This makes you resilient and endlessly curious, though sometimes restless, struggling to commit when commitment feels like closing doors you haven't yet walked through.",
  
  creator: "For you, life is raw material. You see potential everywhere — in ideas, in objects, in moments — and feel compelled to give it form. Creation isn't a hobby; it's how you process experience, how you make sense of what moves through you. You're drawn to originality, to making something that didn't exist before, that carries your unique vision. This gives your life a sense of purpose and momentum, though it can also trap you in cycles of perfectionism or self-doubt when what you make doesn't match what you imagined.",
  
  lover: "You experience life through feeling — not as weakness, but as your primary way of knowing. You're attuned to beauty, to connection, to the aliveness that emerges when you're fully present with someone or something. For you, intimacy isn't optional; it's what makes existence meaningful. You give yourself fully, feel deeply, and create spaces where others can do the same. This capacity for presence is a gift, though it can leave you vulnerable to loss, to the pain of separation, to loving what or whom you cannot hold.",
  
  caregiver: "You are fundamentally oriented toward the wellbeing of others. You notice when someone is struggling, sense what they need, and show up in ways that create safety and support. For you, care isn't transactional; it's how you express love and build the world you want to live in. This makes you invaluable in relationships and communities, someone people turn to when life gets hard. But it also asks you to navigate the difficult question of where your responsibility for others ends and your responsibility to yourself begins.",
  
  everyman: "You value what's real over what's pretentious, what's grounded over what's grandiose. You're skeptical of hierarchies that don't reflect actual competence, of personas that feel performed rather than lived. For you, authenticity means not needing to be special, not needing to perform exceptionalism. This makes you deeply relatable and trustworthy, someone who creates space for others to be ordinary, which is its own kind of radical. But sometimes you can mistake simplicity for settling, or reject ambition that might actually align with who you're becoming.",
  
  hero: "You are animated by challenge. Where others see obstacles, you see invitations to prove what's possible through discipline and will. You don't shy away from difficulty; you move toward it, trusting that you can become strong enough to meet what life demands. This makes you resilient, capable, and often the person others look to when things fall apart. But it also means you can frame life too much as battle, struggle to rest, or define yourself primarily through what you've overcome rather than who you are beyond the fight.",
  
  ruler: "You are oriented toward structure and systems. You see the patterns that create order or chaos, and you feel compelled to organize, to establish clarity, to create environments where things function well. Leadership, for you, isn't about domination; it's about responsibility — taking on the weight of decisions that affect others. This makes you effective in positions of authority and trusted to bring coherence to complexity. But it can also make you rigid, overly controlling, or blind to the ways spontaneity and inefficiency sometimes serve life better than optimization.",
  
  visionary: "You sense futures others don't yet see. You're tuned to what's emerging, to possibilities that haven't crystallized but feel inevitable. This forward-facing orientation makes you a catalyst for change, someone who inspires others to imagine beyond current constraints. You live partially in what could be, which gives you hope and direction. But it also means you can struggle with the present, dismiss what is for what might be, or grow frustrated when others don't share your sense of urgency about what's coming.",
  
  magician: "You are a transformer — someone who sees potential for change where others see fixed conditions. You understand that reality is more malleable than it appears, that the right insight or action can catalyze profound shifts. This gives you a kind of power, a sense that you can intervene in patterns that seem immutable. You're drawn to the liminal, to transitions, to moments of breakdown where something new can emerge. But this also means you can become manipulative, secretive, or so focused on transformation that you neglect what's worth preserving.",
  
  trickster: "You see the absurdity in what others take seriously. You're playful, irreverent, willing to break rules that don't serve life. For you, humor and disruption are forms of intelligence, ways of exposing pretension and creating space for spontaneity. This makes you liberating to be around, someone who helps others not take themselves too seriously. But it also means you can avoid genuine commitment, use humor as deflection, or struggle to know when playfulness crosses into harm.",
  
  innocent: "You carry a fundamental trust in the goodness of life. You approach the world with openness, hope, and a belief that things can work out, that people are fundamentally decent. This isn't naivety; it's a choice to orient toward possibility rather than cynicism. This outlook makes you a source of light, someone who reminds others that optimism is an option even when circumstances are difficult. But it also means you can be vulnerable to betrayal, denial, or a reluctance to face what's genuinely dangerous or broken.",
  
  mother: "You are driven by a deep instinct to nurture, protect, and create conditions where life can flourish. You give not out of obligation but because care is your natural expression. You sense vulnerability and move toward it, offering safety, warmth, unconditional support. This makes you a profound source of stability and love. But it also asks you to navigate the line between nurturing and smothering, between protecting and controlling, between caring for others and abandoning yourself.",
  
  rebirth: "You are intimate with endings. You understand, perhaps more than others, that transformation requires letting go, that growth often looks like dissolution before it looks like renewal. You're not afraid of what needs to die in you; you've learned to trust the process of falling apart and coming back together differently. This makes you resilient in ways that go beyond toughness — you're capable of genuine metamorphosis. But it also means life can feel cyclical in exhausting ways, or that you seek change even when stability would serve you.",
  
  shadow: "You carry what others reject in themselves. You know the parts of human experience that are denied, repressed, deemed unacceptable. This gives you a kind of radical honesty, a willingness to meet what's dark without flinching. You understand that wholeness includes what we'd rather not acknowledge, that integration is more powerful than perfection. This makes you both magnetic and unsettling, someone who creates permission for others to be more fully themselves. But it also means you can get lost in darkness, identify too much with what's broken, or use your relationship with shadow as a way to avoid light."
};

// 定制的融合 Narrative（20-25 个常见组合）
const narrativeMap: Record<string, string> = {
  // 思考型组合
  "sage-philosopher-creator": `If someone were to watch your life unfold, they'd notice this: **you lead with a hunger for understanding** — observing patterns, analyzing structures, seeking the truth beneath appearances. This drive to know deeply is **held together by your need to systematize** — you don't just collect insights, you weave them into frameworks that make sense of complexity. And **emerging more quietly but insistently** is a creative force — the urge to take all that structured knowledge and give it new form.

**Your dominant Sage** keeps you curious and reflective, always asking "why" and "how." **Your auxiliary Philosopher** gives your thoughts structure and coherence, connecting disparate ideas into meaning. **Your potential Creator** is calling you to stop merely analyzing and start making, to trust that creation itself is a form of thinking.

The path forward: let your hands move while your mind still questions. Your deepest insights often emerge not in contemplation alone, but in the act of building something new.`,

  "sage-philosopher-explorer": `An observer watching your journey would see someone who moves between library and open road — collecting wisdom not to hoard it, but to test it against the texture of living. **You lead through intellectual rigor**, analyzing and questioning until you understand. This depth of inquiry is **given structure through systematic thinking**, connecting ideas into coherent frameworks. And **beneath both is a restless curiosity** that refuses to let understanding remain abstract.

**Your dominant Sage** drives you to seek truth through observation and analysis. **Your auxiliary Philosopher** integrates what you learn into meaningful systems. **Your potential Explorer** is asking you to walk into the unknown, to let direct experience teach you what books cannot.

The invitation: trust that some truths can only be discovered through movement. Let your feet follow your questions into territories your mind hasn't yet mapped.`,

  "sage-creator-visionary": `Picture someone watching your path: they'd see a mind that doesn't just want to understand the world as it is, but **reimagine what it could become**. **You lead with analytical clarity**, observing patterns and asking deep questions. This understanding is **channeled through creative expression** — you don't just think, you make. And **weaving through both is a forward-sensing vision** that perceives possibilities others haven't yet articulated.

**Your dominant Sage** keeps you grounded in reality, seeking what's true. **Your auxiliary Creator** transforms understanding into tangible form. **Your potential Visionary** is calling you beyond analysis and creation toward something larger — imagining futures that don't yet exist.

Your work: balance the wisdom of what is with the courage to create what could be. Sometimes the most important insights emerge when you build toward a vision you can barely see.`,

  // 感受型组合
  "lover-caregiver-everyman": `An observer watching your life would notice this: **you move through the world attuned to connection** — feeling what others feel, sensing emotional undercurrents, creating intimacy through presence. This depth of feeling is **given form through your care** — you don't just empathize, you act, you hold space, you show up when others need steadiness. And **beneath both is a quiet groundedness** — a part of you that values simplicity, authenticity, and belonging without performance.

**Your dominant Lover** makes you deeply empathetic and present, able to create meaningful connection. **Your auxiliary Caregiver** channels that sensitivity into practical support, holding others through difficulty. **Your potential Everyman** reminds you that real belonging includes your own needs, that you don't have to earn love through endless giving.

The invitation: you can stay open-hearted while also staying whole. Saying "no" when you need to isn't a failure of love — it's the practice of sustainable care, for yourself and others.`,

  "lover-caregiver-creator": `If there were someone narrating your story, they'd speak of a life lived through feeling and making. **You lead with emotional depth** — experiencing life through connection, beauty, and presence. This capacity for feeling is **expressed through care** — you nurture, support, and create spaces where others feel seen. And **emerging alongside is a creative impulse** — the need to transform what you feel into something tangible.

**Your dominant Lover** gives you the gift of deep presence and attunement. **Your auxiliary Caregiver** directs that sensitivity toward others' wellbeing. **Your potential Creator** is asking you to also care for your own expression, to let what moves through you become art, writing, or work that carries your heart.

The challenge: caring for others and creating beauty are both forms of love. Trust that making space for your own expression isn't selfishness — it's how you honor what's alive in you.`,

  "lover-explorer-visionary": `Picture someone watching your trajectory: they'd see a life animated by passion and possibility. **You lead through emotional intensity** — feeling deeply, connecting fully, seeking experiences that make you come alive. This hunger for aliveness is **amplified by your exploratory nature** — you move toward what's new, what's unknown, what promises transformation. And **threading through both is visionary sensing** — you don't just seek experience, you seek experiences that open futures.

**Your dominant Lover** makes you passionate and present, capable of deep intimacy. **Your auxiliary Explorer** keeps you moving, discovering, refusing the safety of the familiar. **Your potential Visionary** is calling you toward something larger — not just feeling and wandering, but sensing where your passion wants to take you.

Your invitation: let your heart and your movement be guided by vision. The most meaningful journeys are the ones that align your passion with a purpose you're still discovering.`,

  // 行动型组合
  "hero-ruler-visionary": `An observer watching your path would see someone who doesn't wait for the future to arrive — you architect it. **You lead with courage and action**, facing challenges directly, believing that discipline and effort can change what seems fixed. This determination is **given direction through structure** — you don't just fight battles, you design systems, organize resources, and lead with strategic clarity. And **rising through both is a forward-looking vision** — you sense futures others haven't yet articulated and move toward possibilities still taking shape.

**Your dominant Hero** drives you to overcome obstacles and prove what's possible through will. **Your auxiliary Ruler** brings order to chaos, ensuring your actions create lasting systems. **Your potential Visionary** is asking you to fight not just against what threatens, but toward what could be — to let inspiration guide strategy.

The challenge: balance urgency with patience. Not every problem needs immediate conquest. Sometimes the most heroic act is creating space for emergence, building systems flexible enough to evolve with your vision.`,

  "hero-explorer-creator": `If someone were narrating your journey, they'd describe a life of action and discovery. **You lead through courage**, moving toward challenge rather than away from it. This bravery is **amplified by your exploratory spirit** — you don't just face what's in front of you, you seek new territories to test yourself. And **beneath both is creative energy** — you don't just overcome or discover, you make, you build, you leave something new in your wake.

**Your dominant Hero** gives you resilience and determination. **Your auxiliary Explorer** keeps you moving toward the unknown. **Your potential Creator** is asking you to not just conquer or discover, but to create — to channel your energy into something that endures.

Your work: the bravest thing you can make is something that carries both your strength and your vision. Let your adventures become stories, your challenges become creations.`,

  "explorer-creator-trickster": `Picture someone watching your life unfold: they'd see a pattern of movement, experimentation, and reinvention. **You lead through exploration** — seeking new experiences, testing boundaries, learning by direct encounter. This hunger for discovery is **channeled through creative expression** — you don't just collect moments, you transform them, turn constraints into play, find innovative solutions where others see dead ends. And **woven throughout is a trickster energy** — you're playful, irreverent, willing to break rules that don't serve life.

**Your dominant Explorer** keeps you seeking, discovering, refusing stagnation. **Your auxiliary Creator** turns your experiences into tangible forms. **Your potential Trickster** reminds you that freedom includes play, that not everything needs to be serious or productive.

The invitation: trust that your restlessness has wisdom. You're not running from commitment — you're searching for the right territory to stake and cultivate, the vision worth building toward. And sometimes the path there includes laughter.`,

  // 转化型组合
  "rebirth-shadow-magician": `If there were a narrator for your journey, they'd speak of cycles and transformations. **You lead through intimate knowledge of endings** — not as failures, but as thresholds. You meet what others avoid, integrate what was hidden, and emerge from each dissolution with deeper clarity. This capacity for transformation is **amplified by your relationship with shadow** — you carry what others reject, creating space for radical honesty and wholeness. And **beneath both is magical sensing** — you understand that reality is more malleable than it appears, that the right insight can catalyze profound shifts.

**Your dominant Rebirth** makes you resilient through genuine metamorphosis, capable of falling apart and coming back together differently. **Your auxiliary Shadow** gives you access to what's repressed, denied, or deemed unacceptable. **Your potential Magician** is calling you to use your intimacy with darkness not just for personal transformation, but to catalyze change in systems and relationships.

Your work: you're learning that transformation is both gift and burden. Not everyone is ready for the depth you carry. Practice discernment about when to share your capacity for metamorphosis, and when to simply be the one who has walked through fire and survived.`,

  "rebirth-explorer-creator": `An observer watching your life would notice this: **you lead through cycles of dissolution and renewal** — you understand that growth often requires letting go, that transformation looks like breakdown before it looks like breakthrough. This capacity for rebirth is **supported by exploratory movement** — you don't just transform in place, you move into new territories as part of your evolution. And **emerging through both is creative energy** — you take what you've learned through change and give it form.

**Your dominant Rebirth** makes you capable of genuine metamorphosis, comfortable with endings. **Your auxiliary Explorer** keeps you moving, ensuring transformation doesn't become stagnation in a new form. **Your potential Creator** is asking you to channel your cycles of change into creative work — to make something that carries the wisdom of your transformations.

The invitation: your life's work might be creating from the place of having been broken and remade. Let your art, your writing, your projects carry the depth of what you've integrated.`,

  // 更多定制组合...
  "sage-explorer-creator": `Someone watching your journey would see this pattern: **you lead with curiosity and analysis** — wanting to understand how things work, why patterns emerge. But this understanding is **tested through direct experience** — you don't just read about the world, you go into it. And **threading through both is creative drive** — you want to take what you've learned and make something that embodies your insights.

**Your dominant Sage** keeps you asking questions and seeking clarity. **Your auxiliary Explorer** pushes you beyond theoretical understanding into lived experience. **Your potential Creator** is calling you to build something that synthesizes your learning and your adventures.

Your challenge: balance research, experience, and creation. You can get stuck in endless learning or endless movement. Trust that making something — even imperfectly — is how you integrate what you know.`,

  "philosopher-visionary-magician": `If someone were narrating your life, they'd describe a mind that works with patterns, possibilities, and transformation. **You lead through systematic thinking** — connecting ideas, building frameworks that make sense of complexity. This structural clarity is **amplified by visionary sensing** — you don't just think about what is, you perceive what could be. And **beneath both is magical awareness** — you understand that ideas, when held and worked with properly, can change reality.

**Your dominant Philosopher** gives you the gift of integration and coherent thought. **Your auxiliary Visionary** opens you to futures not yet formed. **Your potential Magician** is asking you to trust that your ideas have power — that the right insight, articulated and enacted, can catalyze real transformation.

Your work: you're learning to move from pure thinking into manifestation. Your frameworks aren't just maps — they're spells, ways of reshaping how people see and act.`,

  "visionary-creator-explorer": `Picture someone watching your path: they'd see forward motion and creative energy. **You lead with vision** — sensing possibilities others haven't articulated, tuned to what's emerging. This forward-facing orientation is **expressed through creative work** — you don't just imagine, you make, you build prototypes of the future. And **supporting both is exploratory movement** — you're willing to move into unknown territory to test your visions.

**Your dominant Visionary** gives you the gift of seeing what could be. **Your auxiliary Creator** helps you give those visions tangible form. **Your potential Explorer** is asking you to not just create from where you are, but to adventure into new territories that might reshape your vision entirely.

The invitation: let your creating and exploring inform each other. Sometimes the best visions emerge when you're out in the world, testing reality, rather than imagining from a fixed position.`,

  "creator-visionary-magician": `An observer watching your life would see this: **you lead through making** — giving form to what doesn't yet exist, expressing what moves through you. This creative drive is **amplified by visionary capacity** — you're not just making for now, you're building toward futures you sense. And **beneath both is magical awareness** — you understand that creation is transformation, that what you make can change more than you imagine.

**Your dominant Creator** gives you the ability to manifest and express. **Your auxiliary Visionary** ensures your creations point toward something larger. **Your potential Magician** is teaching you that your work isn't just personal expression — it has the power to catalyze shifts in others and in systems.

Your challenge: trust the larger purpose of what you're making. You're not just an artist or builder — you're a transformer, creating work that opens new possibilities for how people see and live.`,

  "ruler-visionary-creator": `If there were someone narrating your story, they'd speak of structure meeting possibility. **You lead through organization and leadership** — creating systems, establishing clarity, taking responsibility for outcomes. This capacity for order is **informed by visionary sensing** — you don't just manage what is, you see what could be and build toward it. And **emerging alongside is creative energy** — you want to not just administer, but to make something that embodies your vision.

**Your dominant Ruler** gives you the ability to lead and organize effectively. **Your auxiliary Visionary** ensures you're not just maintaining systems but evolving them toward something better. **Your potential Creator** is asking you to express your vision not just through strategy, but through tangible creations that inspire others.

Your work: you're learning that the most powerful leadership creates structures that enable others' visions too. Build systems flexible enough to hold emergence, not just efficiency.`,

  "caregiver-everyman-innocent": `Someone watching your path would see this: **you lead through care** — sensing what others need, creating safety and support. This nurturing orientation is **grounded in authenticity** — you value what's real over what's pretentious, what's simple over what's grandiose. And **beneath both is fundamental trust** — you approach people and life with openness and belief in basic goodness.

**Your dominant Caregiver** makes you deeply supportive and present for others. **Your auxiliary Everyman** keeps your care grounded and relatable, free of savior dynamics. **Your potential Innocent** is teaching you that hope isn't naivety — it's a choice to orient toward possibility even when you've seen difficulty.

The invitation: your gift is creating spaces where people can be ordinary and loved for it. Trust that your grounded, hopeful care is exactly what the world needs.`,

  "innocent-lover-creator": `Picture someone watching your journey: they'd see a life lived through beauty, trust, and expression. **You lead with fundamental optimism** — believing in goodness, in possibility, in the beauty of existence. This hopefulness is **deepened by your capacity for connection** — you experience life through feeling and relationship. And **emerging through both is creative impulse** — you want to make things that carry your sense of beauty and hope.

**Your dominant Innocent** gives you the gift of trust and optimism. **Your auxiliary Lover** makes you present and emotionally attuned. **Your potential Creator** is asking you to channel your hope and your feeling into creative work that uplifts others.

Your challenge: your optimism isn't naivety if you choose it consciously. Make art that carries light without denying shadow, that inspires without lying about difficulty.`,

  "trickster-magician-visionary": `An observer watching your life would see someone who plays with reality itself. **You lead through playfulness and disruption** — using humor and irreverence to expose pretension and create space for spontaneity. This playful energy is **amplified by transformative awareness** — you understand how to catalyze change, shift patterns, intervene in what seems fixed. And **beneath both is visionary sensing** — you don't just play with what is, you sense what wants to emerge.

**Your dominant Trickster** keeps you light, flexible, unattached to rigid forms. **Your auxiliary Magician** gives you power to transform situations and relationships. **Your potential Visionary** is asking you to use your playfulness and your power not just for disruption, but in service of something emerging that matters.

Your work: you're learning that the deepest magic is both playful and purposeful. Use your gifts to break patterns that need breaking, but also to midwife what's trying to be born.`,

  "mother-caregiver-lover": `If there were someone narrating your story, they'd speak of profound nurturing and connection. **You lead through protective care** — creating conditions where life can flourish, offering unconditional support. This nurturing is **expressed through practical caregiving** — you show up, you hold space, you support tangibly. And **beneath both is deep emotional attunement** — you feel what others feel, creating intimacy through presence.

**Your dominant Mother** gives you the capacity for unconditional love and protection. **Your auxiliary Caregiver** directs that energy into practical support. **Your potential Lover** is teaching you that caring for others and connecting deeply are related but distinct — one is about their wellbeing, the other is about mutual presence.

The invitation: you can nurture and protect while also being in relationship as equals. Not everyone needs a parent — some need a partner, a friend, a fellow traveler. Practice letting your care include receiving.`,

  "shadow-rebirth-explorer": `Someone watching your path would see this pattern: **you lead through intimacy with darkness** — meeting what others reject, integrating what's been denied. This relationship with shadow is **amplified by your capacity for transformation** — you understand endings as doorways, dissolution as prerequisite for renewal. And **supporting both is exploratory movement** — you don't just sit with darkness or transformation, you move through it, seeking what lies beyond.

**Your dominant Shadow** gives you radical honesty and access to wholeness. **Your auxiliary Rebirth** makes you capable of genuine metamorphosis through difficulty. **Your potential Explorer** is asking you to not just transform in place, but to adventure into the territories that open after integration.

Your work: you're learning that darkness and transformation aren't endpoints but passages. Keep moving. There are discoveries waiting beyond what you've already integrated.`,

  "hero-ruler-creator": `Picture someone watching your trajectory: they'd see determination meeting structure meeting expression. **You lead through courage and action** — facing challenges, proving what's possible through effort. This strength is **organized through systematic leadership** — you don't just overcome individually, you build teams and structures. And **emerging alongside is creative drive** — you want your victories and your systems to leave something beautiful behind.

**Your dominant Hero** gives you resilience and determination. **Your auxiliary Ruler** helps you create order and lead effectively. **Your potential Creator** is teaching you that the most enduring legacy isn't just what you conquered or organized — it's what you made.

The challenge: balance doing, leading, and making. Let your battles and your leadership become creation — build institutions, write stories, make things that carry your hard-won wisdom forward.`,

  "philosopher-explorer-visionary": `An observer watching your life would notice this: **you lead through systematic thinking** — connecting ideas, building frameworks. But this thinking is **tested through lived experience** — you don't just theorize, you walk into the world to see if your ideas hold. And **woven through both is forward sensing** — you're not just thinking about what is or what was, you're perceiving what's emerging.

**Your dominant Philosopher** gives you the gift of integration and coherent thought. **Your auxiliary Explorer** keeps your thinking grounded in reality. **Your potential Visionary** is asking you to let your frameworks and your experiences point toward futures not yet formed.

Your invitation: you're building philosophies of becoming. Let your thinking and your movement create maps of possibility, not just explanations of what already exists.`,

  "sage-visionary-explorer": `If there were someone narrating your journey, they'd speak of seeing and seeking. **You lead with analytical clarity** — observing patterns, asking deep questions, wanting to understand. This drive for understanding is **amplified by visionary capacity** — you don't just see what is, you sense what could be. And **supporting both is exploratory movement** — you're willing to move into unknown territory to test your perceptions.

**Your dominant Sage** keeps you questioning and observing. **Your auxiliary Visionary** opens you to possibilities beyond current reality. **Your potential Explorer** is teaching you that some truths can only be found by walking forward, by moving into territories your mind hasn't yet mapped.

Your work: balance seeing, sensing, and seeking. Let your analysis and your vision guide your adventures, but let your adventures reshape what you think you know.`,
};

// 生成融合 Narrative
export function generateNarrative(
  archetypes: string[]
): string {
  if (archetypes.length < 3) {
    return "Your archetypal constellation is still forming. Complete the assessment to discover your unique pattern.";
  }

  const [first, second, third] = archetypes.slice(0, 3);
  
  // 第1层：精确匹配（主-辅-潜力）
  const exactKey = `${first}-${second}-${third}`;
  if (narrativeMap[exactKey]) {
    return narrativeMap[exactKey];
  }

  // 第2层：排序后匹配（处理顺序变化）
  const sorted = [first, second, third].sort().join("-");
  if (narrativeMap[sorted]) {
    return narrativeMap[sorted];
  }

  // 第3层：双原型匹配（主-辅）
  const pairKey = `${first}-${second}`;
  if (narrativeMap[pairKey]) {
    return narrativeMap[pairKey];
  }

  // 第4层：通用模板（基于主原型）
  const firstInfo = ARCHETYPE_INFO[first];
  const secondInfo = ARCHETYPE_INFO[second];
  const thirdInfo = ARCHETYPE_INFO[third];

  return `If someone were to observe your journey, they'd notice a unique pattern: **you lead with the qualities of the ${firstInfo.name}** — ${firstInfo.strength}. This primary drive is **supported by your ${secondInfo.name} nature** — ${secondInfo.strength}. And **emerging alongside is your ${thirdInfo.name} self** — ${thirdInfo.strength}.

**Your dominant ${firstInfo.name}** shapes how you approach life and what you value most. **Your auxiliary ${secondInfo.name}** provides balance and depth, ensuring you don't become one-dimensional. **Your potential ${thirdInfo.name}** is calling you to integrate qualities that may feel less natural but are essential to your wholeness.

The invitation: your three archetypes aren't in competition — they're in conversation. Each one tempering and enriching the others. Your work is learning when each voice deserves the floor, trusting that all three are necessary for your becoming.`;
}

// 导出完整的描述获取函数
export function getArchetypeDescription(archetype: string): string {
  return ARCHETYPE_DESCRIPTIONS[archetype] || "Description not available.";
}
