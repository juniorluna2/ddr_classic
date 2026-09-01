// ANNUAL UPDATE FILE — most yearly changes can be made here.
export const tournament = {
  year: 2026,
  edition: '5th Annual',
  status: 'Dates coming soon',
  registrationOpen: false,
  registrationUrl: 'https://forms.gle/NJ6SQAXJKvh31wvEA',
  organizerEmail: 'juniorluna2@gmail.com',
  // Optional: paste a published CSV URL from Google Sheets for live scores.
  // Required headers: name,handicap,round1,round2,thru
  liveScoringUrl: '',
  liveRefreshSeconds: 30,
  event: {
    dates: 'Fall 2026',
    location: 'Southeast Michigan',
    price: '$140 tournament entry',
    format: '36 holes · 80% handicap · individual net stroke play',
  },
  schedule: [
    { day: 'Saturday', label: 'Opening round', detail: '18-hole individual competition · course and tee times coming soon' },
    { day: 'Saturday PM', label: 'Two-person scramble', detail: '9 holes · choose your partner' },
    { day: 'Sunday', label: 'Final round + awards', detail: '18 holes · awards immediately following play' },
  ],
  courses: [
    { name: 'Huntmore Golf Club', location: 'Brighton, Michigan', image: './assets/huntmore.jpg', url: 'https://www.huntmoregolfclub.com' },
    { name: 'West Shore Golf & Country Club', location: 'Grosse Ile, Michigan', image: './assets/west_shore.jpg', url: 'https://www.westshoregcc.com' },
  ],
  highlights: [
    { label: 'Individual', value: '80% net' },
    { label: 'Weekend', value: '45 holes' },
    { label: 'Side games', value: 'Skins + pins' },
    { label: 'Tradition', value: 'Since 2022' },
  ],
  games: [
    { title: 'Net skins', text: 'A separate skins pot for each 18-hole round. Ties on a hole cancel the skin.' },
    { title: 'Closest to the pin', text: 'Every par 3 is in play. Winners are tracked by round and hole.' },
    { title: 'Longest drive', text: 'Two designated holes each round — one on each nine.' },
    { title: 'Team net', text: 'Committee-selected pairs compete for the lowest combined net score.' },
    { title: 'Two-person scramble', text: 'Saturday afternoon’s nine-hole side event. Pick your partner and go low.' },
  ],
  leaderboard: [
    { name: 'Chris Trela', handicap: 7.0, round1: 73, round2: 71, total: 144, toPar: 1, note: 'Won playoff' },
    { name: 'Tyler Bozynski', handicap: 2.4, round1: 75, round2: 69, total: 144, toPar: 1 },
    { name: 'Matthew Kosiba', handicap: 6.1, round1: 72, round2: 75, total: 147, toPar: 4 },
    { name: 'Adam Murray', handicap: 4.4, round1: 76, round2: 72, total: 148, toPar: 5 },
    { name: 'Al Cyster', handicap: 1.7, round1: 71, round2: 77, total: 148, toPar: 5 },
    { name: "Joe O'Connor", handicap: 5.0, round1: 73, round2: 77, total: 150, toPar: 7 },
    { name: 'Dillon Dossey', handicap: 1.0, round1: 76, round2: 77, total: 153, toPar: 10 },
    { name: 'Raul Luna', handicap: 2.5, round1: 79, round2: 75, total: 154, toPar: 11 },
  ],
  skins: [
    { round: 'Round 1', hole: 2, player: 'Matthew Kosiba', score: 3, value: '$88' },
    { round: 'Round 1', hole: 8, player: "Joe O'Connor", score: 3, value: '$88' },
    { round: 'Round 1', hole: 13, player: 'Raul Luna', score: 3, value: '$88' },
    { round: 'Round 2', hole: 7, player: 'Tony Monaco', score: 3, value: '$74' },
  ],
  pinWinners: [
    { round: 'Round 1', hole: 3, player: 'Raul Luna' },
    { round: 'Round 1', hole: 7, player: 'Al Cyster' },
    { round: 'Round 1', hole: 12, player: 'Chris Trela' },
    { round: 'Round 1', hole: 15, player: 'Tony Monaco' },
    { round: 'Round 2', hole: 7, player: 'Tyler Bozynski' },
    { round: 'Round 2', hole: 12, player: 'Tony Mar' },
  ],
  teeTimes: [
    { time: '10:20 AM', players: ['Chris Trela', "Joe O’Connor", 'Al Cyster', 'Ray Hodges'] },
    { time: '10:30 AM', players: ['Adam Murray', 'Matthew Kosiba', 'Tony Mar', 'Tony Monaco'] },
    { time: '10:40 AM', players: ['Raul Luna', 'Tyler Bozynski', 'Dillon Dossey', 'Alex Nicol'] },
  ],
  champions: [
    { year: 2025, name: 'Chris Trela', score: '+1', image: './assets/winner_2025.jpg' },
    { year: 2022, name: 'DDR Classic Champion', score: 'Inaugural year', image: './assets/winner_2022.jpg' },
  ],
};
