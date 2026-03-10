import { CardCategory, CardTemplate, Round } from "@/types/game";

/**
 * Static card deck — 70 cards split across 3 rounds.
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
      "{player1}, what's your body count? Answer honestly or drink 3. The group decides if they believe you.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-02",
    template:
      "{player1}, describe your most embarrassing hookup in three words. Refuse and drink 2.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-03",
    template:
      "{player1}, have you ever hooked up with someone in this room or wanted to? Answer or drink 3.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-04",
    template:
      "{player1}, what's the sketchiest place you've ever had sex? Tell the group or drink 2.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-truth-05",
    template:
      "{player1}, have you ever slid into someone's DMs specifically to hook up? If yes, drink 2 and say if it worked.",
    category: CardCategory.Truth,
    round: Round.HeatingUp,
    playerCount: 1,
  },

  // Confess × 4
  {
    id: "w-confess-01",
    template:
      "{player1}, show the group the last flirty or dirty text you sent. No deleting first. Refuse = drink 3.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-confess-02",
    template:
      "{player1}, confess the most embarrassing thing you've done while drunk. If the group already knows the story, drink 2.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-confess-03",
    template:
      "{player1}, admit who in this room you stalked on social media before meeting them in person. Deny it = drink 3.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-confess-04",
    template:
      "{player1}, confess the thirstiest DM you've ever sent. Read it out loud or drink 4.",
    category: CardCategory.Confess,
    round: Round.HeatingUp,
    playerCount: 1,
  },

  // Challenge × 3
  {
    id: "w-challenge-01",
    template:
      "Everyone names a sex position. First person who repeats one or blanks out drinks 2. {player1} starts.",
    category: CardCategory.Challenge,
    round: Round.HeatingUp,
    playerCount: 1,
  },
  {
    id: "w-challenge-02",
    template:
      "{player1} and {player2}: who can describe their type in the most hilariously specific way? Group votes — loser drinks 2.",
    category: CardCategory.Challenge,
    round: Round.HeatingUp,
    playerCount: 2,
  },
  {
    id: "w-challenge-03",
    template:
      "Most convincing moan wins. Everyone participates — group picks a winner who gives out 3 drinks.",
    category: CardCategory.Challenge,
    round: Round.HeatingUp,
    playerCount: 0,
  },

  // Group × 4
  {
    id: "w-group-01",
    template:
      "Everyone who has had a one-night stand, drink 1. If it was someone you'd already met before, drink 2.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-group-02",
    template:
      "Everyone who has sent a nude, drink 1. If you've sent one to someone in this room, finish your drink.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-group-03",
    template:
      "Drink 1 if you've ever faked it. Drink 2 if you've faked it more than once with the same person.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-group-04",
    template:
      "Everyone who has hooked up with someone at least 10 years older or younger than them — drink 2 and own it.",
    category: CardCategory.Group,
    round: Round.HeatingUp,
    playerCount: 0,
  },

  // Vote × 3
  {
    id: "w-vote-01",
    template:
      "Vote: who in this group is the biggest flirt? That person has to hit on the person to their left — right now.",
    category: CardCategory.Vote,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-vote-02",
    template:
      "Vote: who is most likely to have a secret situationship? That person drinks 2 and does not confirm or deny.",
    category: CardCategory.Vote,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-vote-03",
    template:
      "Vote: who would be the most adventurous in bed? That person assigns 3 drinks however they want.",
    category: CardCategory.Vote,
    round: Round.HeatingUp,
    playerCount: 0,
  },

  // Rule × 2
  {
    id: "w-rule-01",
    template:
      "New rule: nobody can say 'no' for the next 3 cards. Every refusal costs 2 drinks.",
    category: CardCategory.Rule,
    round: Round.HeatingUp,
    playerCount: 0,
  },
  {
    id: "w-rule-02",
    template:
      "New rule: {player1} is now the 'Thirst Trap Judge' — they rate every confession's spiciness until the next rule card. Their word is final.",
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
      "{player1}, rate everyone in the room on physical attractiveness, 1–10, out loud. Refuse = drink 5.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-truth-02",
    template:
      "{player1}, have you ever thought about someone in this room in a sexual way? Drink 1 for yes, but if you say no, {player2} decides if they believe you.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-truth-03",
    template:
      "{player1}, what is the wildest sexual thing you've done that you've never told anyone? Full story or finish your drink.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-truth-04",
    template:
      "{player1}, read your most recent browser history item out loud. If it's embarrassing, drink 3. If it's absolutely filthy, everyone else drinks too.",
    category: CardCategory.Truth,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-truth-05",
    template:
      "{player1}, what's the most desperate thing you've ever done to get someone's attention romantically or sexually? Tell it or drink 4.",
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
      "{player1}, confess the worst lie you've told to get someone into bed. Full story or finish your drink.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-confess-03",
    template:
      "{player1}, show the group your screen time report right now. Confess what app you're most ashamed of. Refuse = drink 4.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-confess-04",
    template:
      "{player1}, admit the most unhinged thing in your search history this week. Show proof or the group doesn't believe you — drink 3 either way.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-confess-05",
    template:
      "{player1}, confess who you've hate-followed or obsessively stalked online. {player2} gets to check your phone to verify. Refuse = finish your drink.",
    category: CardCategory.Confess,
    round: Round.Crazy,
    playerCount: 2,
  },

  // Challenge × 4
  {
    id: "h-challenge-01",
    template:
      "{player1} vs {player2}: who can dirty talk in the most ridiculous fake accent for 20 seconds? Group votes — loser drinks 3.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-challenge-02",
    template:
      "Everyone names a euphemism for sex. First person to repeat or blank out drinks 3. {player1} starts.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-challenge-03",
    template:
      "{player1} and {player2}: staring contest while everyone else says increasingly distracting things. First to break finishes their drink.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 2,
  },
  {
    id: "h-challenge-04",
    template:
      "{player1} has 60 seconds to get anyone in the room to blush using only words. If they succeed, the blusher drinks 2. If they fail, {player1} drinks 3.",
    category: CardCategory.Challenge,
    round: Round.Crazy,
    playerCount: 1,
  },

  // Group × 4
  {
    id: "h-group-01",
    template:
      "Everyone who has sexted someone in the last week, drink 2. If the person you sexted is in this room, finish your drink.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-group-02",
    template:
      "Drink 1 if you've ever hooked up with a friend's ex. Drink 3 if they found out.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-group-03",
    template:
      "Everyone who has a friends-with-benefits situation right now — drink 2 and say how complicated it is on a scale of 1–10.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-group-04",
    template:
      "Everyone who has been caught in the act — drink 3. If the story is legendary, you owe the group the full details.",
    category: CardCategory.Group,
    round: Round.Crazy,
    playerCount: 0,
  },

  // Vote × 3
  {
    id: "h-vote-01",
    template:
      "Vote: who in this group has the highest body count? That person must either confirm or deny — then drink 3.",
    category: CardCategory.Vote,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-vote-02",
    template:
      "Vote: who is most likely to have a secret kink nobody knows about? That person drinks 3 and is NOT allowed to explain themselves.",
    category: CardCategory.Vote,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-vote-03",
    template:
      "Vote: who would last the longest in a no-sex challenge? The winner assigns 4 drinks. Everyone suspects the winner is lying.",
    category: CardCategory.Vote,
    round: Round.Crazy,
    playerCount: 0,
  },

  // Rule × 3
  {
    id: "h-rule-01",
    template:
      "New rule: {player1} must speak exclusively in innuendo until the next rule card. Everything they say must sound dirty. Violations = 1 drink each.",
    category: CardCategory.Rule,
    round: Round.Crazy,
    playerCount: 1,
  },
  {
    id: "h-rule-02",
    template:
      "New rule: no crossing your legs or arms for the rest of this round. Open body language only. Violations = 1 drink.",
    category: CardCategory.Rule,
    round: Round.Crazy,
    playerCount: 0,
  },
  {
    id: "h-rule-03",
    template:
      "New rule: {player1} must give a compliment about someone's appearance before every card flip for the next 4 cards. Skip = drink 2.",
    category: CardCategory.Rule,
    round: Round.Crazy,
    playerCount: 1,
  },

  // ─────────────────────────────────────────────
  // ROUND 3 — WELCOME TO HELL
  // ─────────────────────────────────────────────

  // Truth × 5
  {
    id: "c-truth-01",
    template:
      "{player1}, describe your absolute worst sexual experience in vivid detail. The group decides when you've given enough — or you finish your drink.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-truth-02",
    template:
      "{player1}, who in this room would you sleep with if you had to? You must pick someone — saying nobody means you finish your drink AND someone else picks for you.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-truth-03",
    template:
      "{player1}, confess the most unhinged thing you've done to stalk an ex or crush online. Full receipts or finish your drink.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-truth-04",
    template:
      "{player1} and {player2}, rank each other's attractiveness and then explain what they could do to improve it. Both must speak — silence costs 4 drinks each.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-truth-05",
    template:
      "{player1}, what is a sexual fantasy you've never told anyone? Say it out loud or finish your drink. The group decides if it's spicy enough.",
    category: CardCategory.Truth,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Confess × 6
  {
    id: "c-confess-01",
    template:
      "{player1}, confess the most depraved thing you've ever done that nobody in this room knows about. Group rates it 1–10 on the unhinged scale. Below 7 = finish your drink for being boring.",
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
      "{player1}, confess your most shameful hookup — the one you swore you'd take to the grave. Full details or finish your drink and everyone roasts you anyway.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-confess-04",
    template:
      "{player1} and {player2}, each confess the worst thing you've thought about the other. Say it to their face. Whoever chickens out finishes their drink.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-confess-05",
    template:
      "{player1}, show the group your most explicit text conversation. You pick the person — but {player2} picks how far back you scroll. Refuse = finish your drink.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-confess-06",
    template:
      "{player1}, confess something you did that would end a friendship if the wrong person found out. If the group thinks it's weak, you finish your drink AND confess again.",
    category: CardCategory.Confess,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Challenge × 4
  {
    id: "c-challenge-01",
    template:
      "Final boss: everyone names something they'd never do in bed. First person to say something nobody believes — drinks 4. {player1} starts.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-challenge-02",
    template:
      "{player1} vs {player2}: two truths and a lie — all three have to be sexual or deeply embarrassing. Wrong guess = drink 4. Correct guess = the liar finishes their drink.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 2,
  },
  {
    id: "c-challenge-03",
    template:
      "Psychic horniness test: everyone secretly writes a number 1–10 rating how turned on they are right now. {player1} guesses the total. Within 5 = give out 6 drinks. Off by more = finish your drink.",
    category: CardCategory.Challenge,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-challenge-04",
    template:
      "{player1} has 60 seconds to convince the group that their worst sexual story was actually worth it. Group votes — if less than half are convinced, {player1} finishes their drink.",
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
      "Waterfall of shame: {player1} starts drinking. Everyone follows. You can only stop when the person ahead of you stops. {player1} decides when — and they have to say something embarrassing before they stop.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },
  {
    id: "c-group-03",
    template:
      "Everyone who has fantasized about someone in this room at any point — finish your drink. Don't lie. We all know.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-group-04",
    template:
      "Final toast to hell: everyone finishes their drink. {player1} must give a toast that includes at least one deeply personal confession. Ten seconds minimum.",
    category: CardCategory.Group,
    round: Round.WelcomeToHell,
    playerCount: 1,
  },

  // Vote × 3
  {
    id: "c-vote-01",
    template:
      "Vote: who had the most unhinged moment of the night? They get to make one rule that lasts until the game ends — and it must be uncomfortable for at least one person.",
    category: CardCategory.Vote,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-vote-02",
    template:
      "Vote: who is secretly the horniest person in the room right now? That person assigns 5 drinks — no splits, all to one person.",
    category: CardCategory.Vote,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },
  {
    id: "c-vote-03",
    template:
      "Vote: who needs to get laid most urgently? That person gets their drink topped up by everyone else and must say 'thank you, I needed this' before drinking.",
    category: CardCategory.Vote,
    round: Round.WelcomeToHell,
    playerCount: 0,
  },

  // Rule × 3
  {
    id: "c-rule-01",
    template:
      "New rule: {player1} is now the 'Hell Boss' — every time anyone takes a sip, they must ask {player1} for permission using a seductive voice. Breaking this costs 2 drinks.",
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
