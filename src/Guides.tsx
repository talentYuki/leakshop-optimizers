import { useState } from 'react'

const GAMES = [
  { name: 'Rust', icon: '🦀', category: 'rust' },
  { name: 'Dota 2', icon: '⚔️', category: 'dota' },
  { name: 'CS2', icon: '🔫', category: 'cs2' },
  { name: 'Fortnite', icon: '🏆', category: 'fortnite' },
  { name: 'Valorant', icon: '🎯', category: 'valorant' },
  { name: 'PUBG', icon: '🍳', category: 'pubg' },
  { name: 'Apex Legends', icon: '🚀', category: 'apex' },
  { name: 'GTA V', icon: '🚗', category: 'gta' },
  { name: 'Minecraft', icon: '⛏️', category: 'minecraft' },
  { name: 'Terraria', icon: '🌳', category: 'terraria' },
  { name: 'DayZ', icon: '🧟', category: 'dayz' },
  { name: 'Escape from Tarkov', icon: '🎒', category: 'tarkov' },
  { name: 'League of Legends', icon: '🛡️', category: 'lol' },
  { name: 'Overwatch 2', icon: '🦸', category: 'overwatch' },
  { name: 'Rainbow Six Siege', icon: '🚔', category: 'r6' },
  { name: 'Rocket League', icon: '⚽', category: 'rocket' },
  { name: 'Among Us', icon: '👽', category: 'amongus' },
  { name: 'Phasmophobia', icon: '👻', category: 'phasmo' },
  { name: 'The Forest', icon: '🌲', category: 'forest' },
  { name: 'Sons of the Forest', icon: '🪓', category: 'sotf' },
  { name: 'Valheim', icon: '⚒️', category: 'valheim' },
  { name: '7 Days to Die', icon: '🧟‍♂️', category: '7dtd' },
  { name: 'ARK', icon: '🦖', category: 'ark' },
  { name: 'Conan Exiles', icon: '🗡️', category: 'conan' },
  { name: 'New World', icon: '🏝️', category: 'newworld' },
  { name: 'Lost Ark', icon: '⚓', category: 'lostark' },
  { name: 'Warframe', icon: '🤖', category: 'warframe' },
  { name: 'Destiny 2', icon: '🌟', category: 'destiny' },
  { name: 'Path of Exile', icon: '💀', category: 'poe' },
  { name: 'Diablo IV', icon: '😈', category: 'diablo' },
  { name: 'World of Warcraft', icon: '🐉', category: 'wow' },
  { name: 'Final Fantasy XIV', icon: '🔮', category: 'ffxiv' },
  { name: 'Elder Scrolls Online', icon: '📜', category: 'eso' },
  { name: 'Guild Wars 2', icon: '🏹', category: 'gw2' },
  { name: 'Black Desert', icon: '🏜️', category: 'bdo' },
  { name: 'Albion Online', icon: '🛡️', category: 'albion' },
  { name: 'Sea of Thieves', icon: '🏴‍☠️', category: 'sot' },
  { name: 'No Man\'s Sky', icon: '🚀', category: 'nms' },
  { name: 'Star Citizen', icon: '🛸', category: 'starcitizen' },
  { name: 'Elite Dangerous', icon: '🌌', category: 'elite' },
  { name: 'Euro Truck Simulator 2', icon: '🚛', category: 'ets2' },
  { name: 'American Truck Simulator', icon: '🚚', category: 'ats' },
  { name: 'Farming Simulator', icon: '🚜', category: 'farming' },
  { name: 'Sims 4', icon: '🏠', category: 'sims' },
  { name: 'Cities: Skylines', icon: '🏙️', category: 'cities' },
  { name: 'Factorio', icon: '⚙️', category: 'factorio' },
  { name: 'Satisfactory', icon: '🏭', category: 'satisfactory' },
  { name: 'RimWorld', icon: '🌍', category: 'rimworld' },
  { name: 'Project Zomboid', icon: '🧟', category: 'zomboid' },
  { name: 'Dying Light 2', icon: '🏃', category: 'dyinglight' },
]

const TIERS = [
  {
    id: 'basic',
    name: 'BASIC',
    price: 150,
    desc: 'Просто гайд на игру',
    features: ['Основы игры', 'Управление', 'Базовые механики', 'Стартовые советы'],
    color: '#666',
  },
  {
    id: 'pro',
    name: 'PRO',
    price: 300,
    desc: 'Механики и продвинутые техники',
    features: ['Все из BASIC', 'Продвинутые механики', 'Тактики', 'Секретные места', 'Сборки'],
    color: '#aaa',
  },
  {
    id: 'master',
    name: 'MASTER',
    price: 599,
    desc: 'Полный гайд — всё, что нужно',
    features: [
      'Все из PRO',
      'Комбат (PvP)',
      'Электрика',
      'Билдер',
      'Фармер',
      'Индустриальщик',
      'Микро-контроль',
      'Макро-игра',
    ],
    color: '#fff',
  },
]

const MAIN_CATEGORIES = ['rust', 'dota', 'cs2', 'fortnite']

export default function Guides() {
  const [filter, setFilter] = useState('all')
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  const filteredGames = filter === 'all'
    ? GAMES
    : filter === 'other'
      ? GAMES.filter(g => !MAIN_CATEGORIES.includes(g.category))
      : GAMES.filter(g => g.category === filter)

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Заголовок */}
        <div className="mb-14">
          <p className="mono text-[10px] text-[#444] uppercase tracking-[0.25em] mb-3">// guides</p>
          <h1 className="text-4xl md:text-[56px] font-black tracking-tight leading-none mb-4">
            ГАЙДЫ ПО ИГРАМ
          </h1>
          <p className="text-[#555] text-lg max-w-2xl">
            50+ игр. 3 уровня детализации. От базовых основ до полного мастерства.
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['all', 'rust', 'dota', 'cs2', 'fortnite', 'other'].map(f => (
            <button
              key={f}
              onClick={() => { setFilter(f); setSelectedGame(null) }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                filter === f
                  ? 'bg-white text-black'
                  : 'bg-[#111] text-[#666] border border-[#1A1A1A] hover:border-[#333]'
              }`}
            >
              {f === 'all' ? 'Все' : f === 'other' ? 'Другие' : f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Карточки игр */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-16">
          {filteredGames.map(g => (
            <div
              key={g.name}
              onClick={() => setSelectedGame(g.name)}
              className={`card-hover border rounded-2xl p-5 flex flex-col items-center gap-3 cursor-pointer transition-all ${
                selectedGame === g.name
                  ? 'bg-white text-black border-white'
                  : 'bg-[#111] border-[#1A1A1A] hover:border-[#333]'
              }`}
            >
              <div className="text-4xl">{g.icon}</div>
              <div className="text-sm font-semibold text-center">{g.name}</div>
            </div>
          ))}
        </div>

        {/* Уровни гайдов */}
        {selectedGame && (
          <div className="mb-16">
            <h2 className="text-2xl font-black mb-2">
              Гайды для <span className="text-white">{selectedGame}</span>
            </h2>
            <p className="text-[#555] text-sm mb-8">Выбери уровень детализации</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {TIERS.map(tier => (
                <div
                  key={tier.id}
                  className="bg-[#111] border border-[#1A1A1A] rounded-2xl p-6 flex flex-col hover:border-[#333] transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="mono text-[10px] tracking-widest" style={{ color: tier.color }}>
                      {tier.name}
                    </span>
                    <span className="text-2xl font-black">{tier.price} ₽</span>
                  </div>
                  <p className="text-[#666] text-sm mb-6">{tier.desc}</p>
                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {tier.features.map(f => (
                      <li key={f} className="text-sm text-[#888] flex items-start gap-2">
                        <span className="text-white mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://discord.gg/qtpFKgUN4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer flex items-center justify-center gap-2 bg-white text-black font-bold text-sm py-3 rounded-xl"
                  >
                    Купить
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Если игра не выбрана */}
        {!selectedGame && (
          <div className="text-center py-16 border border-dashed border-[#1A1A1A] rounded-2xl">
            <p className="text-[#444] text-sm">Выбери игру, чтобы увидеть уровни гайдов</p>
          </div>
        )}

      </div>
    </div>
  )
}