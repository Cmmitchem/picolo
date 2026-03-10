export enum CardCategory {
  Truth = "truth",
  Confess = "confess",
  Challenge = "challenge",
  Group = "group",
  Vote = "vote",
  Rule = "rule",
}

export enum Round {
  HeatingUp = 1,
  Crazy = 2,
  WelcomeToHell = 3,
}

export enum GamePhase {
  Start = "start",
  PlayerEntry = "playerEntry",
  Playing = "playing",
  GameOver = "gameOver",
}

export interface CardTemplate {
  id: string;
  template: string;
  category: CardCategory;
  round: Round;
  /** Number of distinct players referenced via {player1}, {player2}, etc. 0 = addresses everyone */
  playerCount: number;
}

export interface HydratedCard {
  id: string;
  text: string;
  category: CardCategory;
  round: Round;
}

export interface Player {
  id: string;
  name: string;
}

export interface GameState {
  phase: GamePhase;
  players: Player[];
  currentRound: Round;
  deck: HydratedCard[];
  currentCardIndex: number;
  cardsPerRound: number;
  roundCardCount: number;
}
