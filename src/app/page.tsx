'use client'
import { Player } from '@remotion/player'
import { HeroComposition } from '../remotion/HeroComposition'

export default function Home() {
  return (
    <main className="relative bg-dark-bg">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Player component={HeroComposition} durationInFrames={180} compositionWidth={1280} compositionHeight={720} fps={30} autoPlay loop style={{ width: '100%', height: '100vh' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-5xl md:text-7xl font-display text-center neon-text mb-4 px-4">Ferramentas criadas para quem leva o envelopamento a outro nível</h1>
          <p className="text-xl md:text-2xl text-gray-300 text-center mb-8 px-4">Performance, precisão e personalidade em cada detalhe.</p>
          <button className="pointer-events-auto px-8 py-4 bg-transparent border-2 border-neon text-neon font-bold text-lg hover:bg-neon hover:text-black transition-all duration-300 neon-border">Explore os Produtos →</button>
        </div>
      </section>
      {/* Segmentos */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center neon-text mb-16">Escolha seu universo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Automotivo', 'Decorativo', 'Window Film', 'PPF'].map((seg) => (
              <div key={seg} className="bg-dark-card border border-dark-border p-8 rounded-lg card-hover cursor-pointer">
                <div className="h-48 bg-dark-border mb-6 rounded flex items-center justify-center text-neon font-mono">[{seg}]</div>
                <h3 className="text-2xl font-display text-white mb-2">{seg}</h3>
                <p className="text-gray-400">Ferramentas especializadas para {seg.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Produtos em Destaque */}
      <section className="py-20 px-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center neon-text mb-4">Os mais vendidos. Os mais copiados.</h2>
          <p className="text-xl text-gray-400 text-center mb-16">Os originais são esses.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-dark-card border border-dark-border rounded-lg overflow-hidden card-hover">
                <div className="h-64 bg-dark-border flex items-center justify-center text-neon font-mono">[PRODUTO {i}]</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Produto Premium {i}</h3>
                  <p className="text-gray-400 mb-4">Ferramenta de alta performance.</p>
                  <button className="w-full px-6 py-3 bg-neon text-black font-bold hover:shadow-neon transition-all">Ver Detalhes</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Final */}
      <section className="py-20 px-4 bg-black border-t border-neon">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display neon-text mb-8">Pronto para evoluir?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-neon text-black font-bold text-lg hover:shadow-neon transition-all">Onde Comprar</button>
            <button className="px-10 py-5 bg-transparent border-2 border-neon text-neon font-bold text-lg neon-border">Seja Distribuidor</button>
          </div>
        </div>
      </section>
      <footer className="py-8 px-4 bg-dark-bg border-t border-dark-border">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2026 Joker Wrap Tools. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
