import { useState } from 'react'

const DISCORD_WEBHOOK = 'https://discordapp.com/api/webhooks/1552746001276735628/PB7ZydahZTV3sndsx1-J7otucZWtyGispSZKmioqFJiPmrvDaHJ1fcWPJ102tdisRNFU'

const SERVICES = [
  'Настройка ПК',
  'Твикер',
  'Удаление микрофризов',
  'Настройка мыши и сенсы',
  'Чистка Windows',
  'Настройка интернета (MTU)',
  'Гайд (Basic)',
  'Гайд (Pro)',
  'Гайд (Master)',
]

export default function Order() {
  const [form, setForm] = useState({
    service: SERVICES[0],
    name: '',
    discord: '',
    description: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'Leakshop Bot',
          embeds: [
            {
              title: '🆕 Новый заказ',
              color: 0xffffff,
              fields: [
                { name: 'Услуга', value: form.service, inline: true },
                { name: 'Имя', value: form.name, inline: true },
                { name: 'Discord', value: form.discord, inline: true },
                { name: 'Описание', value: form.description || '—' },
              ],
              footer: { text: 'Leakshop Optimizers' },
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      })

      if (response.ok) {
        setStatus('sent')
        setForm({ service: SERVICES[0], name: '', discord: '', description: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-20 px-6">
      <div className="max-w-[600px] mx-auto">

        <div className="mb-10">
          <p className="mono text-[10px] text-[#444] uppercase tracking-[0.25em] mb-3">// order</p>
          <h1 className="text-4xl md:text-[56px] font-black tracking-tight leading-none mb-4">
            ОФОРМИТЬ ЗАКАЗ
          </h1>
          <p className="text-[#555] text-lg">
            Заполни форму — мы свяжемся с тобой в Discord.
          </p>
        </div>

        {status === 'sent' ? (
          <div className="bg-[#111] border border-[#1A1A1A] rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-black mb-2">Заказ отправлен!</h2>
            <p className="text-[#666] mb-6">Мы свяжемся с тобой в Discord в ближайшее время.</p>
            <button
              onClick={() => setStatus('idle')}
              className="bg-white text-black font-bold px-6 py-3 rounded-xl"
            >
              Оформить ещё один
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#111] border border-[#1A1A1A] rounded-2xl p-6 flex flex-col gap-5">

            <div>
              <label className="block text-sm font-semibold mb-2">Услуга</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl px-4 py-3 text-white focus:border-[#333] outline-none"
              >
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Твоё имя</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Иван"
                className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl px-4 py-3 text-white focus:border-[#333] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Discord (тег или ID)</label>
              <input
                type="text"
                required
                value={form.discord}
                onChange={(e) => setForm({ ...form, discord: e.target.value })}
                placeholder="username#1234 или 123456789"
                className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl px-4 py-3 text-white focus:border-[#333] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Описание (что нужно?)</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Например: нужен твикер для Rust, микрофризы в городах"
                rows={4}
                className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl px-4 py-3 text-white focus:border-[#333] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-shimmer bg-white text-black font-bold py-4 rounded-xl disabled:opacity-50"
            >
              {status === 'sending' ? 'Отправка...' : 'Отправить заказ'}
            </button>

            {status === 'error' && (
              <p className="text-red-500 text-sm text-center">
                Ошибка отправки. Попробуй ещё раз или напиши в Discord.
              </p>
            )}

          </form>
        )}

      </div>
    </div>
  )
}