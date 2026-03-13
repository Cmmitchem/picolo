import { CardCategory, CardTemplate, Round } from "@/types/game";

/**
 * Static card deck — 70 cards split across 3 rounds.
 *
 * Tone: funny, bizarre, rated R humor, over the top, out of pocket — NOT sexual.
 *
 * Placeholders:
 *   {player1}, {player2}, {player3} — replaced with real player names at runtime.
 *   playerCount: 0 — card addresses everyone, no substitution needed.
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
      "{player1}, what's the most unhinged Google search you've made this week? Say it out loud or drink 2.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-02",
    template:
      "{player1}, what's the longest you've gone without showering and what was the occasion? Answer or drink 2.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-03",
    template:
      "{player1}, what's the worst thing you've ever eaten to be polite? Describe the taste or drink 2.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-04",
    template:
      "{player1}, what's the most embarrassing thing you've cried about? If the group laughs, they all drink 1.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-05",
    template:
      "{player1}, what's the dumbest injury you've ever gotten? Act out how it happened or drink 3.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },

  // Confess × 4
  {
    id: "w-confess-01",
    template:
      "{player1}, confess the most embarrassing thing saved in your phone's notes app. Show proof or drink 3.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-confess-02",
    template:
      "{player1}, confess the pettiest thing you've ever done to someone. If {player2} thinks it's weak, you drink 2.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 2,
  },
  {
    id: "w-confess-03",
    template:
      "{player1}, confess a lie you've told someone in this room. If they didn't know about it, drink 2.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-confess-04",
    template:
      "{player1}, show your screen time report right now. Confess what app you're most ashamed of. Refuse = drink 3.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },

  // Challenge × 3
  {
    id: "w-challenge-01",
    template:
      "{player1} and {player2}: you have 30 seconds each to do your best impression of the other person. Group votes who nailed it — loser drinks 2.",
    category: CardCategory.Challenge,
    round: Round.HeatingUp,
    playerCount: 2,
  },
  {
    id: "w-challenge-02",
    template:
      "Everyone names a cartoon character. {player1} has to do an impression of each one. Group rates each attempt — below a 5 means drink 1.",
    category: CardCategory.Challenge,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-challenge-03",
    template:
      "{player1} vs {player2}: who can keep a straight face longer while the group tries to make them laugh? Loser drinks 3.",
    category: CardCategory.Challenge,
    round: Round.HeatingUp,
    playerCount: 2,
  },

  // Group × 4
  {
    id: "w-group-01",
    template:
      "Everyone who has pretended to be on a phone call to avoid talking to someone — drink 1. If you've done it to avoid someone in this room, drink 2.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-group-02",
    template:
      "Drink 1 if you've ever ugly cried in public. Drink 2 if a stranger tried to comfort you.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-group-03",
    template:
      "Everyone who has a screen time over 6 hours a day — drink 2 and accept your digital addiction.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-group-04",
    template:
      "Drink 1 if you've ever waved back at someone who wasn't waving at you. Drink 2 if you tried to play it off and made it worse.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },

  // Vote × 3
  {
    id: "w-vote-01",
    template:
      "Vote: who would survive the shortest amount of time in a zombie apocalypse? That person drinks 2 and must explain their survival strategy.",
    category: CardCategory.Vote,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-vote-02",
    template:
      "Vote: who has the most chaotic energy in this group? That person assigns 3 drinks however they want.",
    category: CardCategory.Vote,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-vote-03",
    template:
      "Vote: who is most likely to end up on a reality TV show? That person drinks 2 and pitches their show concept.",
    category: CardCategory.Vote,
    round: Round.HeatingUp,
    playerCount: 0,
  },

  // Rule × 2
  {
    id: "w-rule-01",
    template:
      "New rule: nobody can use anyone's real name for the next 3 cards. You must use a ridiculous nickname. Mess up = drink 1.",
    category: CardCategory.Rule,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-rule-02",
    template:
      "New rule: {player1} is now the 'Vibe Check Officer.' They can call 'vibe check' once per card and force anyone to justify what they're doing. Failing the vibe check = drink 2.",
    category: CardCategory.Rule,
    round: Round.HeatingUp,
    playerCount: 1,
  },

  // ─────────────────────────────────────────────
  // ROUND 2 — CRAZY
  // ─────────────────────────────────────────────

  // Truth × 5
  {
    id: "h-truth-01",
    template:
      "{player1}, what's the most unhinged thing you've done because you were too stubborn to admit you were wrong? Full story or drink 4.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-truth-02",
    template:
      "{player1}, read the last 5 things you searched on your phone out loud. No deleting. Refuse = drink 4.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-truth-03",
    template:
      "{player1}, what's the worst financial decision you've ever made? If {player2} has done something dumber, they drink instead.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-truth-04",
    template:
      "{player1}, what conspiracy theory do you lowkey believe? If the group roasts you for it, drink 3. If someone agrees with you, they drink 2.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-truth-05",
    template:
      "{player1}, tell us about a time you were so wrong it was actually dangerous. If the group is horrified, everyone drinks 1 out of solidarity.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },

  // Confess × 5
  {
    id: "h-confess-01",
    template:
      "{player1}, let {player2} scroll through your camera roll for 15 seconds. Whatever they find, you have to explain. Refuse = drink 5.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-confess-02",
    template:
      "{player1}, confess the most unhinged thing you've done alone that would ruin your reputation if anyone saw. Full story or drink 4.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-confess-03",
    template:
      "{player1}, confess a secret you've been keeping from someone in this room. They get to assign your drink penalty — up to 5.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-confess-04",
    template:
      "{player1}, show the group the most embarrassing photo on your phone. {player2} picks which album you open. Refuse = finish your drink.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-confess-05",
    template:
      "{player1}, confess who you've hate-followed or obsessively stalked online. {player2} gets to check your phone to verify. Refuse = drink 4.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 2,
  },

  // Challenge × 4
  {
    id: "h-challenge-01",
    template:
      "{player1} vs {player2}: roast battle. 30 seconds each, no pausing. Group votes — loser finishes their drink.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-challenge-02",
    template:
      "Everyone names a bizarre law from any country. First person to repeat one, make one up, or blank out drinks 3. {player1} starts.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-challenge-03",
    template:
      "{player1} has 60 seconds to sell a completely useless product to the group using an infomercial voice. If they break character, drink 3. If someone laughs, that person drinks 1.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-challenge-04",
    template:
      "{player1} and {player2}: staring contest while everyone else does everything they can to distract you. First to break finishes their drink.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 2,
  },

  // Group × 4
  {
    id: "h-group-01",
    template:
      "Everyone who has creeped on someone's social media so deep they accidentally liked a post from 3+ years ago — drink 2.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-group-02",
    template:
      "Drink 1 if you've ever lied on your resume. Drink 3 if you're currently living that lie.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-group-03",
    template:
      "Everyone who has ghosted someone and then run into them in public — drink 2. If you pretended not to see them, drink 3.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-group-04",
    template:
      "Drink 2 if you've ever started a fight over something incredibly stupid. Drink 3 if you lost that fight.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },

  // Vote × 3
  {
    id: "h-vote-01",
    template:
      "Vote: who would be the absolute worst roommate? That person drinks 3 and must defend their living habits.",
    category: CardCategory.Vote,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-vote-02",
    template:
      "Vote: who is most likely to start a cult? That person drinks 3 and must pitch their cult's philosophy to the group.",
    category: CardCategory.Vote,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-vote-03",
    template:
      "Vote: who tells the most exaggerated stories? That person must retell their most famous story and the group decides what actually happened. They drink for every lie caught.",
    category: CardCategory.Vote,
    round: Round.Crazy,
    playerCount: 0,
  },

  // Rule × 3
  {
    id: "h-rule-01",
    template:
      "New rule: {player1} must narrate everything they do in a nature documentary voice until the next rule card. Violations = 2 drinks.",
    category: CardCategory.Rule,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-rule-02",
    template:
      "New rule: before anyone drinks, they must make aggressive eye contact with {player1} and say 'this one's for you.' Forgetting = 1 extra drink.",
    category: CardCategory.Rule,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-rule-03",
    template:
      "New rule: no one can say 'like' as a filler word for the rest of this round. Everyone polices each other. Violations = 1 drink per 'like.'",
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
      "{player1}, what is the most deranged intrusive thought you've ever had in a completely normal situation? Be specific or finish your drink.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-truth-02",
    template:
      "{player1}, rank everyone in this room by who you'd trust least with your unlocked phone. Explain your rankings or finish your drink.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-truth-03",
    template:
      "{player1}, what's the most delusional thing you genuinely believe about yourself? The group rates how delusional it is — drink 1 per point above 5.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-truth-04",
    template:
      "{player1} and {player2}, each say the most brutally honest thing you think about the other's life choices. Both must speak — silence costs 4 drinks.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-truth-05",
    template:
      "{player1}, what's the worst thing you've ever done and gotten away with? If the group is genuinely shocked, they all drink 1. If not, you finish yours.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Confess × 6
  {
    id: "c-confess-01",
    template:
      "{player1}, confess the most unhinged thing you've done that nobody in this room knows about. Group rates it 1–10 on the chaos scale. Below 7 = finish your drink for being boring.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-confess-02",
    template:
      "{player1}, open your DMs and read the most embarrassing conversation out loud. {player2} picks which contact. Refuse = finish your drink.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-confess-03",
    template:
      "{player1}, confess the worst thing you've said behind someone's back who is NOT in this room. If anyone here knows who you're talking about, you finish your drink.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-confess-04",
    template:
      "{player1} and {player2}, each confess what you actually thought the first time you met the other. Say it to their face. Whoever chickens out finishes their drink.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-confess-05",
    template:
      "{player1}, confess something you did that would get you cancelled on the internet. If the group thinks it's actually that bad, everyone drinks in horror.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-confess-06",
    template:
      "{player1}, confess the pettiest, most diabolical revenge you've ever gotten on someone. If {player2} thinks they can top it, they tell theirs — loser drinks 4.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },

  // Challenge × 4
  {
    id: "c-challenge-01",
    template:
      "Final boss: everyone gives their hottest take that would get them cancelled. Group votes on the most unhinged one — that person gives out 5 drinks. {player1} starts.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-challenge-02",
    template:
      "{player1} vs {player2}: two truths and a lie — all three must be absolutely absurd. Wrong guess = drink 4. Correct guess = the liar finishes their drink.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-challenge-03",
    template:
      "{player1} must freestyle rap for 30 seconds about {player2}'s most embarrassing quality. If they stop or break rhythm, finish your drink. If it's actually fire, {player2} drinks instead.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-challenge-04",
    template:
      "{player1} has 60 seconds to convince the group they could beat a bear in a fight. Group votes — if less than half believe you, finish your drink.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Group × 4
  {
    id: "c-group-01",
    template:
      "Welcome to Hell check: everyone who has done something tonight they are deeply ashamed of — finish your drink. Everyone else drinks 3 for lying.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-group-02",
    template:
      "Waterfall of chaos: {player1} starts drinking. Everyone follows. You can only stop when the person before you stops. {player1} must tell an embarrassing story before they can stop.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-group-03",
    template:
      "Everyone must say the most out-of-pocket thought they've had today. Group votes on the most unhinged — winner gives out 4 drinks, everyone else drinks 1.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-group-04",
    template:
      "Final toast: everyone finishes their drink. {player1} must give a toast roasting every single person in the group. Ten seconds per person minimum.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Vote × 3
  {
    id: "c-vote-01",
    template:
      "Vote: who had the most unhinged moment tonight? They get to create one rule for the rest of the game — and it must target someone specific.",
    category: CardCategory.Vote,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-vote-02",
    template:
      "Vote: who would be the first to commit a crime if laws didn't exist for a day? That person explains what they'd do — drink 1 per person who's genuinely concerned.",
    category: CardCategory.Vote,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-vote-03",
    template:
      "Vote: who is the biggest menace to society in this group? That person gets their drink topped up by everyone else and must accept the title.",
    category: CardCategory.Vote,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },

  // Rule × 3
  {
    id: "c-rule-01",
    template:
      "New rule: {player1} is now the 'Hell Boss' — every time anyone drinks, they must make direct eye contact with {player1} and say 'I deserve this.' Breaking this costs 2 extra drinks.",
    category: CardCategory.Rule,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-rule-02",
    template:
      "New rule: all drinks must be taken as a shot — no sipping allowed for the rest of the game. Violations = finish your drink.",
    category: CardCategory.Rule,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-rule-03",
    template:
      "Final rule: all previous rules are cancelled. One new rule takes over — {player1} picks it, and it must be the most chaotic rule they can think of. It lasts until the game ends.",
    category: CardCategory.Rule,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
];
