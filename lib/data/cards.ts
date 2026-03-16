import { CardCategory, CardTemplate, Round } from "@/types/game";

/**
 * Static card deck — 70 cards split across 3 rounds.
 *
 * Tone: Light-hearted but adult, dry/dirty humor, witty, absurd, playful chaos.
 * All prompts are VERBAL — no phone showing, no physical dares, no impressions.
 *
 * Distribution:
 *   Round 1 Heating Up         (~21): 5 truth, 4 confess, 3 challenge, 4 group, 3 vote, 2 rule
 *   Round 2 Crazy              (~24): 5 truth, 5 confess, 4 challenge, 4 group, 3 vote, 3 rule
 *   Round 3 Welcome to Hell    (~25): 5 truth, 6 confess, 4 challenge, 4 group, 3 vote, 3 rule
 */
export const cardTemplates: CardTemplate[] = [
  // ─────────────────────────────────────────────
  // ROUND 1 — HEATING UP
  // ─────────────────────────────────────────────

  // Truth × 5
  {
    id: "w-truth-01",
    template:
      "{player1}, would you rather have everyone here read your search history or your notes app? You don't have to show it — just pick one and explain why. Drink 2.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-02",
    template:
      "{player1}, what's the dumbest hill you will absolutely die on? If {player2} agrees with you, everyone else drinks 1.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 2,
  },
  {
    id: "w-truth-03",
    template:
      "{player1}, what's the laziest thing you've ever done that actually worked out? If the group respects it, give out 2 sips.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-04",
    template:
      "{player1}, what's one thing you pretend to like but secretly can't stand? If someone else here does the same thing, they drink 2.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-05",
    template:
      "{player1}, would you rather only be able to whisper for a year or only be able to shout? Pick and drink 1.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },

  // Confess × 4
  {
    id: "w-confess-01",
    template:
      "{player1}, what's the most ridiculous excuse you've used to cancel plans? If {player2} has heard a worse one, they drink instead.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 2,
  },
  {
    id: "w-confess-02",
    template:
      "{player1}, what's the pettiest thing you've done recently that you're kind of proud of? The group rates it — if it's below a 7 on the petty scale, drink 2.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-confess-03",
    template:
      "{player1}, what trend did you participate in that you now deeply regret? Drink 1 just for admitting it.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-confess-04",
    template:
      "{player1}, what's something you Googled recently that you'd have a hard time explaining? Just describe it. Drink 2.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },

  // Challenge × 3
  {
    id: "w-challenge-01",
    template:
      "{player1} vs {player2}: who can name more fast food restaurants in 10 seconds? Loser drinks 2.",
    category: CardCategory.Challenge,
    round: Round.HeatingUp,
    playerCount: 2,
  },
  {
    id: "w-challenge-02",
    template:
      "Never have I ever pretended to laugh at something I didn't find funny just to be polite. If you have, drink 1. If you're doing it right now, drink 2.",
    category: CardCategory.Challenge,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-challenge-03",
    template:
      "Going around: everyone says a food they think is overrated. If someone disagrees, you both drink 1. {player1} starts.",
    category: CardCategory.Challenge,
    round: Round.HeatingUp,
    playerCount: 1,
  },

  // Group × 4
  {
    id: "w-group-01",
    template:
      "Drink 1 if you've ever waved back at someone who wasn't waving at you. Drink 2 if you made it worse by trying to play it off.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-group-02",
    template:
      "Everyone who has said 'I'm never drinking again' and meant it for less than 24 hours — drink 2.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-group-03",
    template:
      "Drink 1 if you've ever stalked someone's social media so deep you accidentally liked an old post. Drink 2 if you panicked and unliked it.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-group-04",
    template:
      "Everyone who has eaten something off the floor and justified it with the 5-second rule — drink 1. If there were witnesses, drink 2.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },

  // Vote × 3
  {
    id: "w-vote-01",
    template:
      "Vote: who here would go viral for the dumbest reason? That person drinks 2 and the group decides what the video would be.",
    category: CardCategory.Vote,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-vote-02",
    template:
      "Vote: who is the worst texter in this group? That person drinks 2. If they try to defend themselves, drink 3.",
    category: CardCategory.Vote,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-vote-03",
    template:
      "Vote: who would last the longest on a reality TV show? That person gives out 3 sips however they want.",
    category: CardCategory.Vote,
    round: Round.HeatingUp,
    playerCount: 0,
  },

  // Rule × 2
  {
    id: "w-rule-01",
    template:
      "New rule: before every sip, you must clink with {player1} and say 'cheers to bad decisions.' Forget = 1 extra sip.",
    category: CardCategory.Rule,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-rule-02",
    template:
      "New rule: no one can use the word 'like' as a filler until the next rule card. The group polices it. Every slip = 1 sip.",
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
      "{player1}, would you rather have your Spotify listening history projected at your funeral or your screen time read aloud at your wedding? Pick and drink 2.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-truth-02",
    template:
      "{player1}, what's the most questionable thing you've convinced yourself was totally fine? If {player2} has done worse, they drink 3 instead.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-truth-03",
    template:
      "{player1}, what conspiracy theory do you lowkey believe? If someone here agrees, they drink 2 with you. If nobody agrees, drink 3 alone.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-truth-04",
    template:
      "{player1}, what's the most delusional thing you've told yourself to justify a terrible decision? Group rates the delusion 1–10. Drink half that number.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-truth-05",
    template:
      "{player1}, if your life had a Yelp review, what would the one-star reviews say? Give us two. Drink 2.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },

  // Confess × 5
  {
    id: "h-confess-01",
    template:
      "{player1}, what's the worst financial decision you've made that you'd make again? If it was under $50, the group doesn't care — drink 3 for being cheap about it.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-confess-02",
    template:
      "{player1}, what's the biggest red flag about you that you're fully aware of but haven't fixed? {player2} confirms or denies. Liar drinks 3.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-confess-03",
    template:
      "{player1}, what's a skill you lied about having that you absolutely do not have? If it's on your resume right now, drink 3.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-confess-04",
    template:
      "{player1}, what's the most unhinged thing you've done because you were hungry? The group rates it. Over 7 = give out 3 sips. Under 7 = drink 2.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-confess-05",
    template:
      "{player1} and {player2}, each say what you actually thought the first time you met the other. No sugarcoating. Whoever went softer drinks 3.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 2,
  },

  // Challenge × 4
  {
    id: "h-challenge-01",
    template:
      "{player1} vs {player2}: one-sentence roast of each other. Group votes on who was funnier. Loser drinks 4.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-challenge-02",
    template:
      "Categories: celebrity scandals. Go around naming one. First person to hesitate, repeat, or say something too boring drinks 3. {player1} picks the starting direction.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-challenge-03",
    template:
      "Never have I ever lied about being busy to avoid hanging out with someone in this room. If you drink, you do NOT have to say who. But they probably know.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-challenge-04",
    template:
      "Hot take showdown: everyone says their most controversial food opinion. Group votes on the most unhinged. Winner gives out 4 sips. {player1} starts.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 1,
  },

  // Group × 4
  {
    id: "h-group-01",
    template:
      "Drink 2 if you've ever sent a text to the wrong person and it was about them. Drink 3 if you never recovered from it.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-group-02",
    template:
      "Everyone who has pretended to be on a phone call to avoid someone — drink 1. If that person is in this room, drink 3 and do NOT make eye contact.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-group-03",
    template:
      "Drink 1 if you've cried in a bathroom at a social event. Drink 2 if someone had to come get you. Drink 3 if it was tonight.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-group-04",
    template:
      "Everyone who has had a full argument with someone in their head and then been mad at them in real life — drink 2. This is a safe space.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },

  // Vote × 3
  {
    id: "h-vote-01",
    template:
      "Vote: who has the most chaotic energy in this room? That person is now in charge of giving out 4 sips. Use the power wisely.",
    category: CardCategory.Vote,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-vote-02",
    template:
      "Vote: who would be the worst person to be stuck in an elevator with for 3 hours? That person drinks 3. No appeals.",
    category: CardCategory.Vote,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-vote-03",
    template:
      "Vote: who is most likely to start a cult? That person drinks 3 and must name their cult. If it's a good name, give out 2 more sips.",
    category: CardCategory.Vote,
    round: Round.Crazy,
    playerCount: 0,
  },

  // Rule × 3
  {
    id: "h-rule-01",
    template:
      "New rule: {player1} is the Drink Dealer. Every time someone drinks for the rest of this round, {player1} decides if they take 1 extra sip. Absolute power.",
    category: CardCategory.Rule,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-rule-02",
    template:
      "New rule: every time {player1} drinks, {player2} has to drink too. No exceptions. Solidarity.",
    category: CardCategory.Rule,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-rule-03",
    template:
      "New rule: no one can say the word 'no' until the next rule card. If you slip up, drink 1. If someone catches you, they give out 1 sip.",
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
      "{player1}, rank everyone here by who has the most main character energy. Explain your number one pick. They assign you 1–5 sips.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-truth-02",
    template:
      "{player1}, if you had to delete one person from this room's number and never speak to them again, who and why? Say it. They assign your sips — up to 5.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-truth-03",
    template:
      "{player1} and {player2}, say something about the other person that's true but they probably don't want to hear. Whoever goes softer finishes their drink.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-truth-04",
    template:
      "{player1}, what's the worst advice you've given someone that they actually followed? If it went badly, drink 4. If it somehow worked, give out 4.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-truth-05",
    template:
      "{player1}, would you rather have every thought you have appear as a subtitle above your head, or have everything you say come out auto-tuned? Pick one and drink 3.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Confess × 6
  {
    id: "c-confess-01",
    template:
      "{player1}, what's the pettiest revenge you've ever taken on someone? Group rates it 1–10. Below 6 = drink 4 for being weak. Above 8 = give out 4 for being diabolical.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-confess-02",
    template:
      "{player1}, what's a lie you've been maintaining for so long it would be weirder to tell the truth now? Spill it. Drink 3.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-confess-03",
    template:
      "{player1}, what's the most entitled thing you've ever done? If someone here has witnessed it, they confirm and you finish your drink.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-confess-04",
    template:
      "{player1} and {player2}, each say what the other person's dating profile red flag would be. Whoever gets roasted harder drinks 4.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-confess-05",
    template:
      "{player1}, what's one opinion you have that would make everyone in this room argue with you? Say it. Everyone who disagrees drinks 1. If nobody disagrees, you finish your drink.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-confess-06",
    template:
      "{player1}, if your brain had a 'recently deleted' folder, what would be in it that you don't want anyone to see? Describe it. Drink 3.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Challenge × 4
  {
    id: "c-challenge-01",
    template:
      "BOTTOMS UP: {player1}, finish your entire drink right now. No excuses. Welcome to Hell.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-challenge-02",
    template:
      "{player1} vs {player2}: roast battle. One sentence each about everyone in the room. Group votes on who was funnier. Loser finishes their drink.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-challenge-03",
    template:
      "Two truths and a lie — but all three have to sound completely made up. {player1} goes. Group guesses. Wrong guess = everyone drinks 2. Right guess = {player1} drinks 4.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-challenge-04",
    template:
      "Waterfall: {player1} starts drinking. Everyone follows in order. You can only stop when the person before you stops. {player1} decides when to show mercy.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Group × 4
  {
    id: "c-group-01",
    template:
      "Welcome to Hell check: if you've been holding back all game, now's the time. Say the thing you've been thinking. Everyone drinks 2 for making it this far.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-group-02",
    template:
      "Never have I ever said something in this game that I regret. If you drink to this, you must say which one. If you don't drink, you're lying — drink 2.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-group-03",
    template:
      "Everyone says the meanest true thing about themselves in one sentence. The group picks who was the most self-aware. That person gives out 5 sips.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-group-04",
    template:
      "Final toast: everyone drinks. {player1} gives a toast roasting every person in the group by name. Nobody is safe. Minimum 5 seconds per person.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Vote × 3
  {
    id: "c-vote-01",
    template:
      "Vote: who has been the biggest menace tonight? That person creates one rule for the rest of the game. It must target someone specific.",
    category: CardCategory.Vote,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-vote-02",
    template:
      "Vote: who would be the first person in this group to go viral for something embarrassing? That person finishes their drink. The group decides what the video would be about.",
    category: CardCategory.Vote,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-vote-03",
    template:
      "Vote: who carried this game the hardest? That person gives out 5 sips total however they want. Everyone else drinks 1 out of respect.",
    category: CardCategory.Vote,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },

  // Rule × 3
  {
    id: "c-rule-01",
    template:
      "New rule: {player1} is the Hell Boss. Every time anyone drinks, they must point at {player1} and say 'this is your fault.' Forget = 2 extra sips.",
    category: CardCategory.Rule,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-rule-02",
    template:
      "New rule: all sips are doubled for the rest of the game. 1 sip = 2 sips. 3 sips = 6 sips. Welcome to Hell.",
    category: CardCategory.Rule,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-rule-03",
    template:
      "Final rule: all previous rules are cancelled. {player1} creates one last rule. It lasts until the game ends. Make it count. No vetoes.",
    category: CardCategory.Rule,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
];
