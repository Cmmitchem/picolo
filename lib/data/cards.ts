import { CardCategory, CardTemplate, Round } from "@/types/game";

/**
 * Static card deck — 70 cards split across 3 rounds.
 *
 * Tone: Adult humor, embarrassing, absurd, chaotic, witty, dry/dirty, playful chaos.
 * All prompts are VERBAL — no phone showing, no physical dares, no impressions.
 * No sexual content.
 *
 * Distribution:
 *   Round 1 Heating Up         (21): 5 truth, 4 confess, 3 challenge, 4 group, 3 vote, 2 rule
 *   Round 2 Crazy              (24): 5 truth, 5 confess, 4 challenge, 4 group, 3 vote, 3 rule
 *   Round 3 Welcome to Hell    (25): 5 truth, 6 confess, 4 challenge, 4 group, 3 vote, 3 rule
 */
export const cardTemplates: CardTemplate[] = [
  // ─────────────────────────────────────────────
  // ROUND 1 — HEATING UP
  // ─────────────────────────────────────────────

  // Truth × 5
  {
    id: "w-truth-01",
    template:
      "{player1}, what is one thing you have genuinely pretended to understand for years but have absolutely no idea about? Name it. If someone else is also faking it, they drink 1 with you. Drink 2.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-02",
    template:
      "{player1}, what is the most embarrassing thing your autocorrect has ever sent on your behalf? Describe the situation. If {player2} has a worse one, you switch — they drink 2 instead.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 2,
  },
  {
    id: "w-truth-03",
    template:
      "{player1}, what is an irrational fear you had as a kid that you are still a little bit not over? Give us the details. Drink 1.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-04",
    template:
      "{player1}, what is a food opinion you hold that you know will make enemies in this room? State it with confidence. Anyone who audibly reacts — drink 1. You drink 2 just for being brave.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-05",
    template:
      "{player1}, what is the gym goal you announced to people that you have never once worked toward? Say exactly what you told people and what actually happened. Drink 2.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },

  // Confess × 4
  {
    id: "w-confess-01",
    template:
      "{player1}, confess: what is the most money you have spent on something completely pointless and deeply regret? If {player2} has done something financially stupider, they drink instead of you.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 2,
  },
  {
    id: "w-confess-02",
    template:
      "{player1}, what is a weird habit you have that nobody in your life knows about? The group decides if it is endearing or unhinged. Endearing = give out 2 sips. Unhinged = drink 2.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-confess-03",
    template:
      "{player1}, confess a fashion crime you committed that you would die if resurfaced. The more specific the era and the outfit, the better. Drink 1.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-confess-04",
    template:
      "{player1}, what is the most dramatic overreaction you have had in the past year? Be honest about the scale of the situation versus your response. Drink 2.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },

  // Challenge × 3
  {
    id: "w-challenge-01",
    template:
      "{player1} vs {player2}: who can name more US states in 20 seconds? You can only count — no gesturing, no hints. Loser drinks 2.",
    category: CardCategory.Challenge,
    round: Round.HeatingUp,
    playerCount: 2,
  },
  {
    id: "w-challenge-02",
    template:
      "Go around the room. Everyone says the most corporate buzzword they have said unironically in the last six months. Anyone who says the same one as someone else — both drink 1. {player1} starts.",
    category: CardCategory.Challenge,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-challenge-03",
    template:
      "Never have I ever looked someone up online before meeting them and then pretended to not know anything about them. If you have, drink 1. If you found something you were not supposed to find, drink 2.",
    category: CardCategory.Challenge,
    round: Round.HeatingUp,
    playerCount: 0,
  },

  // Group × 4
  {
    id: "w-group-01",
    template:
      "Drink 1 if you have a loyalty card to a place you have only been to once. Drink 2 if it is still in your wallet right now.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-group-02",
    template:
      "Everyone who has rehearsed an argument in the shower that you never actually had — drink 1. If you won that argument, give yourself 1 extra sip of pride.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-group-03",
    template:
      "Drink 1 if you have lied about having seen a movie or read a book to seem cultured. Drink 2 if the conversation went on long enough that you had to make up plot details.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-group-04",
    template:
      "Everyone who has set an alarm with an intention in mind — gym, early morning, life improvement — and then turned it off before your feet hit the floor, drink 1. If this happened this week, drink 2.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },

  // Vote × 3
  {
    id: "w-vote-01",
    template:
      "Vote: who is most likely to have an unread email count over 1,000 right now? That person drinks 2 and must tell us the actual number — or drink 1 more for refusing.",
    category: CardCategory.Vote,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-vote-02",
    template:
      "Vote: who in this group gives the most unsolicited advice? That person drinks 2. If they try to explain why they do it — drink 1 more. You are proving the point.",
    category: CardCategory.Vote,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-vote-03",
    template:
      "Vote: who is most likely to have a Pinterest board with zero follow-through? That person gets to assign 3 sips to whoever they think inspired the most delusion.",
    category: CardCategory.Vote,
    round: Round.HeatingUp,
    playerCount: 0,
  },

  // Rule × 2
  {
    id: "w-rule-01",
    template:
      "New rule: {player1} is the Vibe Checker. Whenever the group is too quiet, they can call 'Vibe Check' and everyone must immediately say one word that describes the current energy. Last person drinks 1.",
    category: CardCategory.Rule,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-rule-02",
    template:
      "New rule: no one is allowed to say the word 'honestly' for the rest of this round. Every slip = 1 sip. The group enforces. No self-reporting required.",
    category: CardCategory.Rule,
    round: Round.HeatingUp,
    playerCount: 0,
  },

  // ─────────────────────────────────────────────
  // ROUND 2 — CRAZY
  // ─────────────────────────────────────────────

  // Truth × 5
  {
    id: "h-truth-01",
    template:
      "{player1}, what is the most chaotic thing you have ever done at a work or school event? Sober counts double. Drink 2, give out 1 more if it involved a presentation.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-truth-02",
    template:
      "{player1}, tell us about a time you were absolutely certain you were right about something and turned out to be catastrophically wrong. {player2} rates your self-awareness 1–5. Drink that number.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-truth-03",
    template:
      "{player1}, what is the thing you have impulse-purchased at 2am that you genuinely cannot explain in the daylight? Be specific. Drink 2. If it arrived and you still do not know why you bought it, drink 3.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-truth-04",
    template:
      "{player1}, what is your most embarrassing travel fail — missed flight, wrong city, lost in translation, or worse? Rate it yourself out of 10 for disaster. Drink half that number.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-truth-05",
    template:
      "{player1}, what is a hill you got into a genuine argument about online, even briefly? No sugarcoating the topic. If anyone here would have argued the same thing, they drink 1 with you. Drink 2.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },

  // Confess × 5
  {
    id: "h-confess-01",
    template:
      "{player1}, confess the worst lie you have told a roommate or neighbor — past or present. The group rates its audacity 1–10. Above 7 = give out 3 sips. Below 5 = drink 3 for the lack of ambition.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-confess-02",
    template:
      "{player1}, what is the most embarrassing thing you have ever typed into a search bar that you are willing to describe without reading it out loud? Describe the context. Drink 2.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-confess-03",
    template:
      "{player1} and {player2}: each confess one thing you spent actual money on that you thought would improve your life but immediately became shelf decor. Compare. Sadder story drinks 3.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-confess-04",
    template:
      "{player1}, confess: what is the most unhinged thing you have ever done because you saw it on social media and genuinely believed it would change your life? Drink 2. If it actually did, give out 2.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-confess-05",
    template:
      "{player1}, what is a petty grudge you are holding right now that you know is objectively too small to justify the energy? State the grudge. If anyone here thinks it is actually valid, they drink 1 in solidarity.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 1,
  },

  // Challenge × 4
  {
    id: "h-challenge-01",
    template:
      "{player1} vs {player2}: name pop culture moments from 10 years ago — alternate back and forth. First person to blank, repeat, or get the year wrong by more than 2 drinks 3.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-challenge-02",
    template:
      "Going around the room: everyone says a technology or app they secretly still do not fully understand. If your thing is something the group finds unforgivable — drink 3. {player1} starts.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-challenge-03",
    template:
      "Never have I ever ghosted a friend — not a date, an actual friend — for at least two weeks because I did not want to deal with the conversation. If you have, drink 2. Do not explain unless asked.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-challenge-04",
    template:
      "Hot take bracket: everyone pitches their worst pop culture opinion. Group votes on the hottest. Winner gives out 4 sips. Second place drinks 1 for not being brave enough. {player1} opens.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 1,
  },

  // Group × 4
  {
    id: "h-group-01",
    template:
      "Drink 2 if you have ever started a very specific diet, told people about it, and abandoned it within 72 hours. Drink 3 if you still bring it up as 'something you are doing.'",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-group-02",
    template:
      "Everyone who has had a full breakdown over something completely benign — traffic, the wrong mug being dirty, a streaming service removing a show — drink 2. You know exactly what moment you are thinking of.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-group-03",
    template:
      "Drink 2 if you have ever sent a voice note that was longer than 2 minutes when a single sentence would have done it. Drink 3 if you have done this in the last week.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-group-04",
    template:
      "Everyone who has told themselves they were 'just resting their eyes' and woken up two hours later with no idea what day it is — drink 2. Drink 1 more if you were supposed to be somewhere.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },

  // Vote × 3
  {
    id: "h-vote-01",
    template:
      "Vote: who in this group would be the most terrifying person to get a passive aggressive note from? That person drinks 3 and must demonstrate in one sentence what the note would say.",
    category: CardCategory.Vote,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-vote-02",
    template:
      "Vote: who has the most chaotic relationship with money? That person drinks 3. If they argue, they drink 1 more. The numbers do not lie.",
    category: CardCategory.Vote,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-vote-03",
    template:
      "Vote: who is most likely to have a 'plan' that will never happen but sounds amazing? That person presents their best fake plan to the group. If anyone actually believes it is real, they drink 2.",
    category: CardCategory.Vote,
    round: Round.Crazy,
    playerCount: 0,
  },

  // Rule × 3
  {
    id: "h-rule-01",
    template:
      "New rule: {player1} is the Devil's Advocate. For the rest of this round, they must immediately disagree with any statement anyone makes. If they forget, drink 2. If someone catches them agreeing, drink 2.",
    category: CardCategory.Rule,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-rule-02",
    template:
      "New rule: any time {player1} laughs, {player2} has to immediately say 'noted' with complete deadpan seriousness. If either of them breaks, both drink 1.",
    category: CardCategory.Rule,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-rule-03",
    template:
      "New rule: no one can use the phrase 'I mean' as a filler until the next rule card appears. Each slip costs 1 sip. The group is the jury. Majority rules.",
    category: CardCategory.Rule,
    round: Round.Crazy,
    playerCount: 0,
  },

  // ─────────────────────────────────────────────
  // ROUND 3 — WELCOME TO HELL
  // ─────────────────────────────────────────────

  // Truth × 5
  {
    id: "c-truth-01",
    template:
      "{player1}, what is the most dishonest thing you have ever put on a resume or professional profile and actually gotten away with? The group decides if it is genius or fraud. Genius = give out 4. Fraud = drink 4.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-truth-02",
    template:
      "{player1} and {player2}: without consulting each other, each say what the other person's most annoying recurring habit is. If you both name the same thing, everyone else drinks 3 because the evidence was overwhelming.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-truth-03",
    template:
      "{player1}, what is a family holiday tradition that is objectively chaotic but your family insists is completely normal? Describe it fully. Group votes on whether it is chaos. If unanimous — drink 3.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-truth-04",
    template:
      "{player1}, what is the most absurd thing you have ever done for reasons that were, at the time, completely logical to you? Walk us through the logic. Drink 3 if the group cannot follow it.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-truth-05",
    template:
      "{player1}, tell us about a dating app interaction that did not go anywhere near how you expected — not sexually, just chaotically. Every person who has a worse one drinks 2. If nobody tops it, you give out 4.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Confess × 6
  {
    id: "c-confess-01",
    template:
      "{player1}, confess the most financially irresponsible thing you have done that you have never told anyone. The group assigns sips 1–5 based on how spectacularly bad it was. No appeals.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-confess-02",
    template:
      "{player1}, what is a lie you told someone recently that was completely unnecessary — you could have just told the truth — but you committed to the lie anyway? Walk us through it. Drink 3.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-confess-03",
    template:
      "{player1}, confess: what was the pettiest thing you have ever done in a friendship or group situation that you knew was petty in the moment and did anyway? If anyone here would have done the same, they drink 2 in solidarity.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-confess-04",
    template:
      "{player1} and {player2}: each confess one thing you have let the other one believe about you that is not entirely true. The more specific, the better. Whoever confesses the bigger thing — give out 4 sips.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-confess-05",
    template:
      "{player1}, what is an opinion you genuinely hold that you know would lose you friends if you said it in polite company? We are not polite company. Say it. Everyone who agrees drinks 1. Everyone who does not — drinks 2.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-confess-06",
    template:
      "{player1}, confess the most unhinged thing you have ever done out of boredom. Not hunger, not heartbreak — just pure, unstructured boredom. Drink 3. If the group rates it above an 8, give out 3 instead.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Challenge × 4
  {
    id: "c-challenge-01",
    template:
      "{player1}, give a one-minute TED talk defending the worst decision you have ever made. The group votes on whether they are convinced. Convinced = give out 5 sips. Not convinced = finish your drink.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-challenge-02",
    template:
      "{player1} vs {player2}: roast each other using only things that have actually happened in the last 12 months that people in this room witnessed or heard about. Group votes. Loser finishes their drink.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-challenge-03",
    template:
      "Everyone in the group names one thing they think {player1} would do for a million dollars that {player1} would not actually do. {player1} reacts to each one. Any they would actually do — drink 3.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-challenge-04",
    template:
      "Waterfall — hell edition: {player1} starts drinking. Everyone follows in order. You cannot stop until the person directly before you in the chain stops. {player1} holds the power and the guilt.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Group × 4
  {
    id: "c-group-01",
    template:
      "Everyone drinks 3 if they have, at some point tonight, said something they immediately regretted. This is a no-judgment room. Except for the drinking part.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-group-02",
    template:
      "Everyone who has passive-aggressively cleaned something while someone else was in the room as a form of communication — drink 2. If the other person is here tonight — drink 3 and make eye contact.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-group-03",
    template:
      "Go around the room. Everyone delivers one sentence that sounds like a Yelp review of themselves as a person. No disclaimers. The group rates them. Worst self-awareness gives out 4 sips.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-group-04",
    template:
      "Final stretch: everyone drink 2. {player1} does a toast that names every person at the table and says one thing they did or said tonight that they will not live down. No one is safe. Go.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Vote × 3
  {
    id: "c-vote-01",
    template:
      "Vote: who gave the most chaotic energy tonight without technically doing anything wrong? That person earns the right to make one rule that lasts until the game ends. The group cannot veto it.",
    category: CardCategory.Vote,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-vote-02",
    template:
      "Vote: who would be the most terrifying person to accidentally swap phones with for a day? That person finishes their drink. No comment necessary. We all know why.",
    category: CardCategory.Vote,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-vote-03",
    template:
      "Vote: who deserves a formal apology from someone not in this room? That person gets to give out 5 sips to whoever they feel has been getting away with too much tonight.",
    category: CardCategory.Vote,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },

  // Rule × 3
  {
    id: "c-rule-01",
    template:
      "New rule: {player1} is the Chaos Arbiter. Any disputed drink from here on gets settled by {player1} alone. Their word is final and cannot be appealed. Use wisely or use terribly — your call.",
    category: CardCategory.Rule,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-rule-02",
    template:
      "New rule: every sip is now doubled for the rest of the game. 1 sip becomes 2. 3 sips becomes 6. There is no cap. Welcome to the final act.",
    category: CardCategory.Rule,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-rule-03",
    template:
      "Final rule: all previous rules are cancelled. {player1} writes the last rule of the night. It applies to everyone including themselves. It runs until the game ends. No takebacks.",
    category: CardCategory.Rule,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
];
