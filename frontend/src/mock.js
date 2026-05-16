// Mock data for MF Enterprise — easy to swap with backend later

export const BRAND = {
  name: 'Maikl Fedulov',
  org: 'MF ENTERPRISE',
  established: '2009',
  establishedNote: 'BORN IN MIND',
  birthYear: 2009,
  tagline: 'Sixteen. Building systems that print while the world scrolls.',
  bio: 'Currently studying in the United Kingdom. Trading since 14. Writing the math the market hasn\u2019t noticed yet.',
  locations: ['Riga, Latvia', 'United Kingdom'],
  email: 'maiklfedulov.enterprise@gmail.com',
  phone: '+371 23556680',
  status: 'OPEN FOR COLLABORATION',
  logoUrl: 'https://customer-assets.emergentagent.com/job_prodigy-builds/artifacts/krkbndjp_MF_enterprise_avatar_logo.png'
};

export const MANIFESTO = {
  eyebrow: 'MANIFESTO / 001',
  body: "Most of my generation is scrolling. I'm writing the algorithms that bet against them — and winning. I don't trade time for money. I trade math for asymmetry, and curiosity for compounding edge.",
  signature: '— M.F.'
};

export const STATS = [
  { value: '16', label: 'Years on Earth', suffix: '' },
  { value: '14', label: 'Age at First Trade', suffix: '' },
  { value: '26', label: 'In a Single Day ($40 → $1,062)', suffix: '×' },
  { value: '02', label: 'Years Trading Markets', suffix: '+' },
  { value: '24', label: 'Polymarket Bot Uptime', suffix: '/7' },
  { value: '∞', label: 'Curiosity Coefficient', suffix: '' }
];

export const VENTURES = [
  {
    id: 'polymarket',
    index: '01',
    name: 'Polymarket Alpha Engine',
    category: 'Autonomous Quant System',
    summary:
      'A fully autonomous AI betting system. No human input. It identifies the highest-probability mathematical edges on Polymarket, sizes positions by Kelly-adjacent logic, and deploys capital while I sleep.',
    tags: ['AI', 'Probability', 'Quant', 'Polymarket', 'Python'],
    status: 'LIVE',
    year: '2025'
  },
  {
    id: 'crypto',
    index: '02',
    name: 'Crypto — Discretionary Desk',
    category: 'Personal Trading Book',
    summary:
      'Started at 14 with a $20 deposit. Survived the gigantic losing streaks every young trader pretends never happened. Then, in a single 24-hour session, ran $40 into $1,062 — the trade I won\u2019t shut up about for the rest of my life.',
    tags: ['Crypto', 'Discretionary', 'Conviction', '26× Day'],
    status: 'ACTIVE',
    year: '2023 — Now'
  },
  {
    id: 'investor',
    index: '03',
    name: 'Active Investor — Global Book',
    category: 'US & Worldwide Equities · Crypto · Early-Stage',
    summary:
      'A long-only book stretched across US tech, worldwide equities and major cryptocurrencies. Lately also writing small early-stage cheques — most recently into aivocal.fr, a project worth a click.',
    tags: ['Equities', 'Crypto', 'Early-Stage', 'Global'],
    status: 'ACTIVE',
    year: 'Ongoing',
    link: { label: 'aivocal.fr', href: 'https://aivocal.fr' }
  },
  {
    id: 'python-lab',
    index: '04',
    name: 'Python Laboratory',
    category: 'Internal Tooling & Automation',
    summary:
      'An ever-growing archive of automation, scrapers, signal generators, and quant utilities. Most of it never ships publicly. It just runs — quietly, every day.',
    tags: ['Python', 'Automation', 'Scrapers', 'Tooling'],
    status: 'ONGOING',
    year: 'Continuous'
  },
  {
    id: 'real-estate',
    index: '05',
    name: 'Riga Heritage — Real Estate',
    category: 'Long-Horizon Capital',
    summary:
      'Family roots in real estate. Personal obsession: pre-war heritage buildings in the historic centre of Riga. Patience, taste, and stone — the slowest, heaviest compounding asset on the menu.',
    tags: ['Real Estate', 'Heritage', 'Riga', 'Long Horizon'],
    status: 'STRATEGIC',
    year: 'Generational'
  }
];

export const QUOTES = [
  'Obsession is just discipline that forgot to clock out.',
  'Wealth is the residue of attention.',
  "The market doesn't ask your age.",
  'Sleep is leverage. Compounding never sleeps.',
  'Edge is asymmetric. So is my schedule.',
  'Most people consume content. I write the systems that consume markets.'
];

export const TIMELINE = [
  { year: '2009', event: 'Born in Latvia. MF Enterprise born — in mind — the same day.' },
  { year: '2023', event: 'First deposit at 14. Twenty dollars and one obsession.' },
  { year: '2024', event: 'The day. $40 → $1,062 in a single 24-hour crypto session.' },
  { year: '2025', event: 'Move to the United Kingdom for studies. School by day, markets by night.' },
  { year: '2025', event: 'Polymarket Alpha Engine deployed — fully autonomous.' },
  { year: '2025', event: 'Active investor across US/global equities, crypto and early-stage (incl. aivocal.fr).' },
  { year: '2026', event: 'The Foundation in build — co-authored with an MIT professor. SP500 algo + MF token loop. Pre-launch.' },
  { year: 'Next', event: 'Heritage real-estate in Riga. Quant fund. Whatever compounds harder.' }
];

export const TRADING = {
  tradesCount: 1300,
  volumeUsdt: 21120366,
  venue: 'MEXC',
  note: 'Spot & futures. Lifetime, personal book.'
};

export const FOUNDATION = {
  eyebrow: 'THE FOUNDATION · COMING 2026',
  title: {
    first: 'A token that',
    outline: 'only',
    last: 'goes one way.'
  },
  summary:
    'A fund-grade engine, co-built with a Professor from MIT. He writes the core — a discretionary-grade trading algorithm for the S&P 500. I write the loop that turns its P&L into something the public can actually own.',
  detail:
    'Part of the bot’s realized profit is programmatically routed back into a token I launch on decentralized exchanges. Our own capital seeds the liquidity. From there: every winning session is more buy pressure, every holder is an aligned co-pilot. Targeted launch capitalization: $70,000+ in seed liquidity, expanding from day one. Public launch — 2026.',
  pillars: [
    { icon: 'GraduationCap', label: 'Core Engine', value: 'MIT Professor · Algo on S&P 500', note: 'Discretionary-grade alpha engine. Battle-tested math, not vibes.' },
    { icon: 'Coins', label: 'Token Layer', value: 'MF Token · Launching on DEX', note: 'Auto-reinvested profits create constant programmatic buy pressure.' },
    { icon: 'Cpu', label: 'Reinvestment Loop', value: 'Bot Profit → Token Buys', note: 'On-chain, transparent, unstoppable while the bot prints.' },
    { icon: 'Lock', label: 'Status', value: 'Pre-Launch · Q4 2026', note: 'Waitlist opening soon. Whitepaper on request.' }
  ]
};
