// ANNUAL UPDATE FILE — most yearly changes can be made here.
export const tournament = {
  year: 2026,
  edition: '5th Annual',
  status: 'Registration Open',
  registrationOpen: false,
  registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe0DMNF6zFmXJ2kWulpGRmzHR3OgvROvd_Btg-9K-AwYajXCA/viewform?usp=publish-editor',
  organizerEmail: 'juniorluna2@gmail.com',
  // Optional: paste a published CSV URL from Google Sheets for live scores.
  // Required headers: name,handicap,round1,round2,thru
  liveScoringUrl: '',
  liveRefreshSeconds: 30,
  event: {
    dates: 'September 25th - 27th, 2026',
    location: 'Southeast Michigan',
    price: 'TBD tournament entry',
    format: '36 holes · 80% handicap · Individual Net Stroke Play',
  },
  schedule: [
    { day: 'Friday', label: 'Opening round', detail: '18 holes - Tee Times Starting approx. 2:00pm' },
    // { day: 'Saturday', label: 'Opening round', detail: '18-hole individual competition · course and tee times coming soon' },
    // { day: 'Saturday PM', label: 'Two-person scramble', detail: '9 holes · choose your partner' },
    { day: 'Sunday', label: 'Final round', detail: '18 holes - Tee Times Starting approx. 12:30pm' },
    { day: 'Sunday', label: 'Awards', detail: 'Awards immediately following play at the Luna Household (8374 Lasalle Ct., Grosse Ile, MI 48138)' },
  ],
  courses: [
    // { name: 'Huntmore Golf Club', location: 'Brighton, Michigan', image: './assets/huntmore.jpg', url: 'https://www.huntmoregolfclub.com' },
    { name: 'West Shore Golf & Country Club', location: 'Grosse Ile, Michigan', image: './assets/west_shore.jpg', url: 'https://www.westshoregcc.com' },
  ],
  highlights: [
    { label: 'Individual', value: '80% net' },
    { label: 'Weekend', value: '36 holes' },
    { label: 'Side games', value: 'Skins, pins + long drive' },
    { label: 'Tradition', value: 'Since 2022' },
  ],
  games: [
    { title: 'Net Champion', text: 'Lowest net score over 36 holes.' },
    { title: 'Net skins', text: 'A separate skins pot for each 18-hole round. Ties on a hole cancel the skin.' },
    { title: 'Closest to the pin', text: 'Every par 3 is in play. Winners are tracked by round and hole.' },
    { title: 'Longest drive', text: 'Two designated holes each round — one on each nine.' },
    { title: 'Team net', text: 'Committee-selected pairs compete for the lowest combined net score.' },
    // { title: 'Two-person scramble', text: 'Saturday afternoon’s nine-hole side event. Pick your partner and go low.' },
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
    { year: 2025, name: 'Chris Trela', score: '144 (+2)', image: './assets/winner_2025.jpg' },
    { year: 2024, name: 'Al Cyster', score: '148 (+5)', image: './assets/winner_2024.jpg' },
    { year: 2023, name: 'Tyler Bozynski', score: '143 (E)', image: './assets/winner_2023.jpg' },
    { year: 2022, name: 'Raul Luna', score: '142 (-1)', image: './assets/winner_2022.jpg' },
  ],
};

// COMPETITION ARCHIVE — add a new year here to make it appear in the dropdown.
export const competitionYears = {
  2026: {
    status: 'upcoming', label: '2026 Tournament', leaderboard: [],
    prizes: [
      { category: 'Tournament champion', detail: 'Winner and payout to be announced' },
      { category: 'Net skins', detail: 'Hole winners and skin values to be announced' },
      { category: 'Closest to the pin', detail: 'Winning holes and players to be announced' },
      { category: 'Longest drive', detail: 'Winning holes and players to be announced' },
      { category: 'Team net', detail: 'Winning team and payout to be announced' },
    ],
    teeTimeGroups: [
      { label: 'Friday opening round', course: 'West Shore Golf & Country Club', rows: [
        { time: '2:00 PM', players: [ 'Golfer 1', 'Golfer 2', 'Golfer 3', 'Golfer 4']},
        { time: '2:10 PM', players: [ 'Golfer 1', 'Golfer 2', 'Golfer 3', 'Golfer 4']},
      ]},
      { label: 'Sunday final round', course: 'West Shore Golf & Country Club', rows: [
        { time: '12:10 PM', players: [ 'Golfer 1', 'Golfer 2', 'Golfer 3', 'Golfer 4']},
        { time: '12:20 PM', players: [ 'Golfer 1', 'Golfer 2', 'Golfer 3', 'Golfer 4']},
      ] },
    ],
  },
  2025: {
    status: 'final', label: '2025 Final Results', leaderboard: tournament.leaderboard,
    prizes: [
      { category: 'Tournament champion', detail: 'Chris Trela · 144 (+2) · $140', winner: true },
      { category: 'Round 1 closest to the pin', detail: 'Hole 3 Raul Luna · Hole 7 Al Cyster · Hole 12 Chris Trela · Hole 15 Tony Monaco' },
      { category: 'Round 1 skins', detail: 'Matthew Kosiba $176 · Joe O’Connor $88 · Raul Luna $88 · Tyler Bozynski $88' },
      { category: 'Round 1 team net', detail: 'Raul Luna & Tyler Bozynski · 65 · $50/team' },
      { category: 'Round 1 longest drive', detail: 'Hole 5 Adam Murray · Hole 17 Tyler Bozynski' },
      { category: 'Scramble', detail: '1st Team Loner $100 · 2nd Team Swinger Squared $60 · 3rd Team Lancy Underall $40' },
      { category: 'Round 2 closest to the pin', detail: 'Hole 7 Tyler Bozynski · Hole 12 Tony Mar · Hole 14 Joe O’Connor · Hole 18 Joe O’Connor' },
      { category: 'Round 2 skins', detail: 'Tony Monaco · Alex Nicol · Tyler Bozynski · Adam Murray · Al Cyster · Matthew Kosiba · $74 each' },
      { category: 'Round 2 team net', detail: 'Tyler Bozynski & Adam Murray · 61 · $50/team' },
      { category: 'Round 2 longest drive', detail: 'Hole 9 Tyler Bozynski · Hole 16 Chris Trela' },
    ],
    teeTimeGroups: [
      { label: 'Saturday opening round', course: 'Huntmore Golf Club', rows: [
        { time: '10:20 AM', players: ['Chris Trela', 'Joe O’Connor', 'Al Cyster', 'Ray Hodges'] },
        { time: '10:30 AM', players: ['Adam Murray', 'Matthew Kosiba', 'Tony Mar', 'Tony Monaco'] },
        { time: '10:40 AM', players: ['Raul Luna', 'Tyler Bozynski', 'Dillon Dossey', 'Alex Nicol'] },
      ] },
      { label: 'Saturday afternoon scramble', course: 'Huntmore Golf Club', rows: [
        { time: '3:00 PM', players: ['Chris Trela', 'Joe O’Connor', 'Al Cyster', 'Ray Hodges'] },
        { time: '3:10 PM', players: ['Adam Murray', 'Matthew Kosiba', 'Tony Mar', 'Tony Monaco'] },
        { time: '3:20 PM', players: ['Raul Luna', 'Sraul Luna', 'Tyler Bozynski', 'Alex Nicol'] },
      ] },
      { label: 'Sunday final round', course: 'West Shore Golf & Country Club', rows: [
        { time: '11:40 AM', players: ['Raul Luna', 'Tony Monaco', 'Ray Hodges', 'Alex Nicol'] },
        { time: '11:50 AM', players: ['Tyler Bozynski', 'Adam Murray', 'Dillon Dossey', 'Tony Mar'] },
        { time: '12:00 PM', players: ['Al Cyster', 'Chris Trela', 'Matthew Kosiba', 'Joe O’Connor'] },
      ] },
    ],
  },
};
