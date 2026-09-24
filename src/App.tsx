import { useState } from 'react'

/* ── Icons ─────────────────────────────────────────────────────────── */
function IconLock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  )
}
function IconDiscord() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  )
}
function IconTelegram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}
function IconChevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}
function IconStar({ filled }: { filled: boolean }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

/* ── Service icons ──────────────────────────────────────────────────── */
function IconCpu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  )
}
function IconTweak() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  )
}
function IconZap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
}
function IconMouse() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="6"/><line x1="12" y1="2" x2="12" y2="8"/>
    </svg>
  )
}
function IconTrash() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
      <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
    </svg>
  )
}
function IconWifi() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
    </svg>
  )
}

/* ── Data ──────────────────────────────────────────────────────────── */
const SERVICES = [
  { icon: <IconCpu />, title: 'Настройка ПК', desc: 'Полная оптимизация системы под игровые нагрузки. BIOS, Windows, планировщик задач.', tag: 'SYSTEM' },
  { icon: <IconTweak />, title: 'Твикер', desc: 'Тонкая настройка реестра, параметров GPU и CPU для максимального FPS в Rust.', tag: 'TWEAKS' },
  { icon: <IconZap />, title: 'Удаление микрофризов', desc: 'Диагностика и устранение заиканий кадров. Стабильный фреймтайм без провалов.', tag: 'PERF' },
  { icon: <IconMouse />, title: 'Настройка мыши и сенсы', desc: 'Точная калибровка DPI, polling rate и сенсы в Rust для контроля отдачи.', tag: 'INPUT' },
  { icon: <IconTrash />, title: 'Чистка Windows', desc: 'Удаление мусора, лишних служб и bloatware. Быстрая загрузка, меньше RAM.', tag: 'CLEAN' },
  { icon: <IconWifi />, title: 'Настройка интернета (MTU)', desc: 'Оптимизация сетевого стека, MTU, буферов и пинга для Rust-серверов.', tag: 'NETWORK' },
]

const REVIEWS = [
  { name: 'Vladislav_pr', handle: '@vladislav_pr', stars: 5, text: 'После настройки микрофризы пропали полностью. FPS вырос с 80 до 140 в городах. Мастер знает своё дело — всё сделали за 50 минут.', avatar: 'VP' },
  { name: 'Kira_Plays', handle: '@kira_plays', stars: 5, text: 'Настроили мышь и сенсу — наконец-то чувствую контроль отдачи. Реакция и точность стали заметно лучше. Рекомендую всем Rust-игрокам.', avatar: 'KP' },
  { name: 'Dmitriy_K', handle: '@dmitriy_k', stars: 5, text: 'Пинг стал стабильным, пропали спайки. MTU настроили грамотно. Игра ощущается совершенно иначе. Спасибо команде за быструю работу.', avatar: 'DK' },
]

const DISCORD_URL = 'https://discord.gg/qtpFKgUN4'
const TELEGRAM_URL = 'https://t.me/ne3x7'

/* ── Stars component ───────────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-white">
      {[1,2,3,4,5].map(i => <span key={i} className={i <= count ? 'text-white' : 'text-[#2a2a2a]'}><IconStar filled={i <= count} /></span>)}
    </div>
  )
}

/* ── App ────────────────────────────────────────────────────────────── */
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1A1A1A] bg-[#0A0A0A]/92 backdrop-blur-lg">
        <div className="max-w-[1200px] mx-auto px-6 h-[60px] flex items-center justify-between gap-6">

          <a href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-black transition-transform group-hover:scale-105">
              <IconLock />
            </div>
            <span className="font-black text-[13px] tracking-[0.12em] text-white whitespace-nowrap leading-tight">
              LEAKSHOP<br />
              <span className="text-[#555] font-semibold tracking-[0.18em] text-[10px]">OPTIMIZERS</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            <a href="/guides"
              className="text-[#666] text-sm font-medium hover:text-white transition-colors duration-150">
              Гайды
            </a>
            <a href="/order"
              className="text-[#666] text-sm font-medium hover:text-white transition-colors duration-150">
              Заказать
            </a>
            {['Услуги', 'Отзывы', 'Контакты'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-[#666] text-sm font-medium hover:text-white transition-colors duration-150">
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer"
              className="btn-shimmer hidden sm:flex items-center gap-2 bg-white text-black text-sm font-bold px-4 py-2 rounded-xl">
              <IconDiscord />
              Discord
            </a>
            <button
              className="md:hidden p-2 rounded-lg border border-[#1A1A1A] hover:border-[#2a2a2a] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                {mobileOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-[#1A1A1A] bg-[#0A0A0A] px-6 py-5 flex flex-col gap-4">
            <a href="/guides"
              className="text-[#666] text-sm font-medium hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}>
              Гайды
            </a>
            <a href="/order"
              className="text-[#666] text-sm font-medium hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}>
              Заказать
            </a>
            {['Услуги', 'Отзывы', 'Контакты'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-[#666] text-sm font-medium hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}>
                {l}
              </a>
            ))}
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-white mt-1">
              <IconDiscord /> Discord
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        <div className="scanlines absolute inset-0 pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />

        <div className="relative max-w-[1200px] mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#1A1A1A] rounded-full px-3.5 py-1 mb-10 mono text-[10px] tracking-widest text-[#555] uppercase bg-[#0d0d0d]">
            <span className="w-1.5 h-1.5 rounded-full bg-white dot-pulse" />
            Оптимизация · Rust · PC Performance
          </div>

          <div className="mb-7">
            <h1 className="font-black leading-[0.9] tracking-[-0.03em] text-[clamp(40px,9vw,108px)]">
              <span className="block text-white">LEAKSHOP</span>
              <span
                className="block"
                style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)', color: 'transparent' }}
              >
                OPTIMIZERS
              </span>
            </h1>
          </div>

          <p className="text-[#555] text-[clamp(13px,1.8vw,17px)] font-medium leading-relaxed max-w-lg mb-10">
            Оптимизация ПК для Rust — твики, удаление микрофризов,<br className="hidden sm:block" />
            настройка BIOS, мыши и сетевого стека.
          </p>

          <div className="flex flex-wrap gap-3 mb-20">
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer"
              className="btn-shimmer flex items-center gap-2 bg-white text-black font-bold text-sm px-6 py-3.5 rounded-2xl">
              <IconDiscord />
              Заказать в Discord
            </a>
            <a href="#услуги"
              className="flex items-center gap-2 border border-[#1A1A1A] text-white font-semibold text-sm px-6 py-3.5 rounded-2xl hover:border-[#333] hover:bg-[#111] transition-all duration-200">
              Смотреть услуги
              <IconChevron />
            </a>
          </div>

          <div className="grid grid-cols-3 max-w-[560px] gap-px bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#1A1A1A]">
            {[
              { val: '500+', label: 'Клиентов' },
              { val: '4.9 / 5', label: 'Рейтинг' },
              { val: '~1 час', label: 'Настройка' },
            ].map(s => (
              <div key={s.label} className="bg-[#0d0d0d] px-5 py-5 text-center">
                <div className="text-xl md:text-2xl font-black text-white tracking-tight mb-0.5">{s.val}</div>
                <div className="mono text-[10px] text-[#444] uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="sep max-w-[1200px] mx-auto" />

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section id="услуги" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14">
            <p className="mono text-[10px] text-[#444] uppercase tracking-[0.25em] mb-3">// services</p>
            <h2 className="text-3xl md:text-[40px] font-black tracking-tight leading-none">Наши услуги</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES.map((s) => (
              <div key={s.title}
                className="card-hover bg-[#111] border border-[#1A1A1A] rounded-2xl p-6 flex flex-col gap-5 cursor-default">
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#1a1a1a] border border-[#222] flex items-center justify-center text-[#888]">
                    {s.icon}
                  </div>
                  <span className="mono text-[9px] text-[#333] tracking-[0.2em] font-semibold pt-1">{s.tag}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[15px] text-white mb-2">{s.title}</h3>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#111] border border-[#1A1A1A] rounded-2xl px-6 py-5">
            <div>
              <p className="font-bold text-white text-[15px] mb-0.5">Не знаешь что нужно?</p>
              <p className="text-[#444] text-sm font-medium">Оставь заявку — бесплатно проконсультируем и подберём услуги.</p>
            </div>
            <a href="/order"
              className="btn-shimmer shrink-0 flex items-center gap-2 bg-white text-black text-sm font-bold px-5 py-2.5 rounded-xl">
              Оставить заявку
            </a>
          </div>
        </div>
      </section>

      <hr className="sep max-w-[1200px] mx-auto" />

      {/* ── REVIEWS ─────────────────────────────────────────────── */}
      <section id="отзывы" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14">
            <p className="mono text-[10px] text-[#444] uppercase tracking-[0.25em] mb-3">// reviews</p>
            <h2 className="text-3xl md:text-[40px] font-black tracking-tight leading-none">Отзывы клиентов</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {REVIEWS.map((r) => (
              <div key={r.name}
                className="card-hover bg-[#111] border border-[#1A1A1A] rounded-2xl p-6 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <Stars count={r.stars} />
                  <span className="mono text-[9px] text-[#2a2a2a] tracking-widest">VERIFIED</span>
                </div>
                <p className="text-[#555] text-sm leading-relaxed font-medium flex-1">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#1A1A1A]">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#222] flex items-center justify-center mono text-[10px] font-bold text-[#555]">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{r.name}</div>
                    <div className="mono text-[10px] text-[#333]">{r.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer id="контакты" className="border-t border-[#1A1A1A] py-14 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-black">
                  <IconLock />
                </div>
                <span className="font-black text-xs tracking-[0.12em]">
                  LEAKSHOP OPTIMIZERS
                </span>
              </div>
              <p className="text-[#3a3a3a] text-sm leading-relaxed max-w-xs font-medium">
                Профессиональная оптимизация ПК для Rust-игроков. Быстро, надёжно, с результатом.
              </p>
            </div>

            <div>
              <p className="mono text-[10px] text-[#333] uppercase tracking-widest mb-5">Контакты</p>
              <div className="flex flex-col gap-3">
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#555] hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-xl bg-[#111] border border-[#1A1A1A] flex items-center justify-center group-hover:border-[#2a2a2a] transition-colors">
                    <IconDiscord />
                  </div>
                  <span className="text-sm font-medium">Leakshop Optimizers</span>
                </a>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#555] hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-xl bg-[#111] border border-[#1A1A1A] flex items-center justify-center group-hover:border-[#2a2a2a] transition-colors">
                    <IconTelegram />
                  </div>
                  <span className="text-sm font-medium">@ne3x7</span>
                </a>
              </div>
            </div>

            <div>
              <p className="mono text-[10px] text-[#333] uppercase tracking-widest mb-5">Страницы</p>
              <ul className="flex flex-col gap-2.5">
                {['Услуги', 'Отзывы', 'Контакты', 'Политика конфиденциальности'].map(l => (
                  <li key={l}>
                    <a href="#" className="text-[#3a3a3a] text-sm font-medium hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#1A1A1A] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="mono text-[10px] text-[#2a2a2a] uppercase tracking-widest">
              © 2024 Leakshop Optimizers. Все права защищены.
            </p>
            <p className="mono text-[10px] text-[#1e1e1e] uppercase tracking-widest">
              500+ клиентов · Rust Performance
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}