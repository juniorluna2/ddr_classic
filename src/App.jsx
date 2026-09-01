import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, ChevronDown, Flag, Mail, MapPin, Menu, RefreshCw, Trophy, X } from 'lucide-react';
import { tournament as t } from './data/tournament';

const tabs = ['Leaderboard', 'Skins', 'Pin prizes'];
const score = (n) => n === 0 ? 'E' : n > 0 ? `+${n}` : `${n}`;

function useLiveScores() {
  const [players, setPlayers] = useState(t.leaderboard);
  const [updated, setUpdated] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!t.liveScoringUrl) return;
    const load = async () => {
      try {
        const response = await fetch(t.liveScoringUrl, { cache: 'no-store' });
        if (!response.ok) throw new Error('Score feed unavailable');
        const csv = await response.text();
        const [head, ...rows] = csv.trim().split(/\r?\n/).map(row => row.split(',').map(v => v.trim()));
        const values = rows.map(row => Object.fromEntries(head.map((key, i) => [key.toLowerCase(), row[i]])));
        setPlayers(values.map(p => ({ name: p.name, handicap: p.handicap, round1: p.round1, round2: p.round2, thru: p.thru, total: Number(p.round1 || 0) + Number(p.round2 || 0), toPar: Number(p.topar || 0) })).sort((a, b) => a.toPar - b.toPar));
        setUpdated(new Date()); setError(false);
      } catch { setError(true); }
    };
    load(); const timer = setInterval(load, t.liveRefreshSeconds * 1000);
    return () => clearInterval(timer);
  }, []);
  return { players, updated, error };
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="brand" href="#top" aria-label="Dirty Downriver Classic home">
      <img src="./assets/DDRClassic.PNG" alt="" /><span>Dirty Downriver<br/><b>Classic</b></span>
    </a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'open' : ''} onClick={() => setOpen(false)}>
      <a href="#event">The event</a><a href="#scoreboard">Scoring</a><a href="#courses">Courses</a><a href="#history">History</a>
      <a className="nav-cta" href="#contact">Get updates</a>
    </nav>
  </header>;
}

function Scoreboard() {
  const [active, setActive] = useState('Leaderboard');
  const { players, updated, error } = useLiveScores();
  const ranked = useMemo(() => players.map((p, i, arr) => ({ ...p, pos: i && p.toPar === arr[i-1].toPar ? `T${i}` : `${i+1}` })), [players]);
  return <section className="scoreboard section" id="scoreboard">
    <div className="section-heading light"><div><span className="eyebrow">Tournament central</span><h2>Follow the competition</h2></div>
      <div className={`live-pill ${t.liveScoringUrl ? 'on' : ''}`}><i></i>{t.liveScoringUrl ? 'Live feed' : '2025 final'}</div>
    </div>
    <div className="score-card">
      <div className="tabs" role="tablist">{tabs.map(tab => <button key={tab} className={active === tab ? 'active' : ''} onClick={() => setActive(tab)}>{tab}</button>)}</div>
      {active === 'Leaderboard' && <div className="table-wrap"><table><thead><tr><th>Pos</th><th>Player</th><th>HCP</th><th>R1</th><th>R2</th><th>Thru</th><th>Total</th></tr></thead><tbody>
        {ranked.map((p, i) => <tr key={p.name} className={i === 0 ? 'leader' : ''}><td><b>{p.pos}</b></td><td><strong>{p.name}</strong>{p.note && <small>{p.note}</small>}</td><td>{p.handicap}</td><td>{p.round1 || '—'}</td><td>{p.round2 || '—'}</td><td>{p.thru || 'F'}</td><td className={p.toPar < 0 ? 'under' : ''}><b>{score(p.toPar)}</b></td></tr>)}
      </tbody></table></div>}
      {active === 'Skins' && <div className="award-grid">{t.skins.map((s, i) => <article key={i}><div className="hole"><span>Hole</span>{s.hole}</div><div><small>{s.round}</small><h3>{s.player}</h3><p>Score {s.score} · {s.value}</p></div></article>)}</div>}
      {active === 'Pin prizes' && <div className="award-grid">{t.pinWinners.map((p, i) => <article key={i}><div className="hole"><span>Hole</span>{p.hole}</div><div><small>{p.round}</small><h3>{p.player}</h3><p>Closest to the pin</p></div></article>)}</div>}
      <div className="score-note"><RefreshCw size={14}/>{error ? 'Using saved scores — live feed could not be reached.' : updated ? `Updated ${updated.toLocaleTimeString([], {hour:'numeric', minute:'2-digit'})}` : 'Scores shown are the 2025 final results.'}</div>
    </div>
  </section>;
}

export default function App() {
  return <><Header/><main id="top">
    <section className="hero">
      <img className="hero-photo" src="./assets/group_2024.jpg" alt="Dirty Downriver Classic golfers together on the course" />
      <div className="hero-shade"></div><div className="hero-content">
        <span className="hero-kicker"><Flag size={16}/> {t.edition} · {t.year}</span>
        <h1>Good golf.<br/><em>Better stories.</em></h1>
        <p>A weekend of competition, camaraderie, and bragging rights in southeast Michigan.</p>
        <div className="hero-actions"><a className="button primary" href="#event">Explore the weekend <ArrowRight size={18}/></a><a className="text-link" href="#scoreboard">View 2025 results</a></div>
      </div>
      <div className="hero-facts"><div><CalendarDays/><span><small>When</small>{t.event.dates}</span></div><div><MapPin/><span><small>Where</small>{t.event.location}</span></div><div><Trophy/><span><small>Status</small>{t.status}</span></div></div>
    </section>

    <section className="intro section" id="event"><div className="intro-copy"><span className="eyebrow">More than a tournament</span><h2>A downriver tradition,<br/>built one round at a time.</h2><p>The Dirty Downriver Classic brings friends together for a full weekend of fair competition and questionable decisions off the tee. Seasoned player or weekend golfer, there’s a game—and a story—for everyone.</p></div>
      <div className="stats">{t.highlights.map(x => <div key={x.label}><strong>{x.value}</strong><span>{x.label}</span></div>)}</div>
    </section>

    <section className="weekend section"><div className="section-heading"><div><span className="eyebrow">The weekend</span><h2>Three rounds. One champion.</h2></div><p>{t.event.format}</p></div>
      <div className="schedule-list">{t.schedule.map((s, i) => <article key={s.day}><span className="round-number">0{i+1}</span><div><small>{s.day}</small><h3>{s.label}</h3><p>{s.detail}</p></div><ChevronDown/></article>)}</div>
    </section>

    <Scoreboard/>

    <section className="games section"><div className="section-heading"><div><span className="eyebrow">More ways to win</span><h2>Every shot has a story.</h2></div></div><div className="game-grid">{t.games.map((g, i) => <article key={g.title}><span>{String(i+1).padStart(2,'0')}</span><h3>{g.title}</h3><p>{g.text}</p></article>)}</div></section>

    <section className="courses section" id="courses"><div className="section-heading"><div><span className="eyebrow">Where we play</span><h2>Two courses. Two tests.</h2></div></div><div className="course-grid">{t.courses.map(c => <a href={c.url} target="_blank" rel="noreferrer" key={c.name}><img src={c.image} alt={`${c.name} golf course`} /><div><small>{c.location}</small><h3>{c.name}</h3><span>Visit course <ArrowRight size={16}/></span></div></a>)}</div></section>

    <section className="history section" id="history"><div className="history-photo"><img src="./assets/trophy.jpg" alt="Dirty Downriver Classic trophy" /></div><div className="history-copy"><span className="eyebrow">Past champions</span><h2>The names on the trophy.</h2><p>Every year adds another chapter. Here’s to the players who found a way to finish on top.</p>{t.champions.map(c => <div className="champion" key={c.year}><strong>{c.year}</strong><img src={c.image} alt=""/><span>{c.name}<small>{c.score}</small></span></div>)}</div></section>

    <section className="cta section" id="contact"><img src="./assets/DDRClassic.PNG" alt="Dirty Downriver Classic logo"/><div><span className="eyebrow">Stay in the loop</span><h2>Ready for the next round?</h2><p>Get tournament dates, registration news, tee times, and scoring updates from the organizer.</p></div><a className="button primary" href={`mailto:${t.organizerEmail}?subject=Dirty Downriver Classic updates`}><Mail size={18}/> Get event updates</a></section>
  </main><footer><span>Dirty Downriver Classic · Est. 2022</span><span>Golf. Friends. Downriver.</span></footer></>;
}
