export interface Prediction {
  homeWin: number;
  draw: number;
  awayWin: number;
  confidence: number;
  reasoning: string[];
}

export interface Match {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  odds: {
    home: number;
    draw: number;
    away: number;
  };
  prediction: Prediction;
}

export const matches: Match[] = [
  {
    id: "cl-1",
    league: "Champions League",
    homeTeam: "Paris Saint-Germain",
    awayTeam: "Bayern Munich",
    date: "2026-04-28",
    time: "21:00",
    odds: { home: 2.45, draw: 3.60, away: 2.70 },
    prediction: {
      homeWin: 38,
      draw: 24,
      awayWin: 38,
      confidence: 65,
      reasoning: [
        "Bayern's strong away record in Europe.",
        "PSG's home advantage at Parc des Princes.",
        "Key players returning from injury for both sides."
      ]
    }
  },
  {
    id: "cl-2",
    league: "Champions League",
    homeTeam: "Atlético Madrid",
    awayTeam: "Arsenal",
    date: "2026-04-29",
    time: "21:00",
    odds: { home: 3.10, draw: 3.30, away: 2.35 },
    prediction: {
      homeWin: 28,
      draw: 31,
      awayWin: 41,
      confidence: 72,
      reasoning: [
        "Arsenal's current attacking form is superior.",
        "Atlético's defensive solidity at home.",
        "Tactical battle between Simeone and Arteta."
      ]
    }
  },
  {
    id: "pl-1",
    league: "Premier League",
    homeTeam: "Liverpool",
    awayTeam: "Crystal Palace",
    date: "2026-04-25",
    time: "16:00",
    odds: { home: 1.48, draw: 4.50, away: 6.50 },
    prediction: {
      homeWin: 68,
      draw: 20,
      awayWin: 12,
      confidence: 88,
      reasoning: [
        "Liverpool's dominance at Anfield.",
        "Crystal Palace struggling against top-6 teams.",
        "Salah's historical record against Palace."
      ]
    }
  },
  {
    id: "pl-2",
    league: "Premier League",
    homeTeam: "Arsenal",
    awayTeam: "Newcastle",
    date: "2026-04-25",
    time: "18:30",
    odds: { home: 1.55, draw: 4.20, away: 5.80 },
    prediction: {
      homeWin: 62,
      draw: 22,
      awayWin: 16,
      confidence: 81,
      reasoning: [
        "Arsenal fighting for the title.",
        "Newcastle's inconsistent away form.",
        "High intensity expected at the Emirates."
      ]
    }
  },
  {
    id: "ll-1",
    league: "La Liga",
    homeTeam: "Real Madrid",
    awayTeam: "Alavés",
    date: "2026-04-21",
    time: "21:00",
    odds: { home: 1.25, draw: 6.00, away: 11.00 },
    prediction: {
      homeWin: 78,
      draw: 15,
      awayWin: 7,
      confidence: 94,
      reasoning: [
        "Real Madrid chasing the league title.",
        "Massive gap in squad quality.",
        "Bernabéu factor."
      ]
    }
  },
  {
    id: "ll-2",
    league: "La Liga",
    homeTeam: "Barcelona",
    awayTeam: "Celta Vigo",
    date: "2026-04-22",
    time: "20:00",
    odds: { home: 1.35, draw: 5.25, away: 8.50 },
    prediction: {
      homeWin: 72,
      draw: 18,
      awayWin: 10,
      confidence: 86,
      reasoning: [
        "Barcelona's resurgence under the new system.",
        "Celta's defensive vulnerabilities.",
        "Lamine Yamal's peak performance form."
      ]
    }
  }
];
