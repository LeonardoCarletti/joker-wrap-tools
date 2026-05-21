'use client'
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion'

export const HeroComposition = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const neonOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' })
  const scaleIn = spring({ frame, fps, config: { damping: 12, stiffness: 80 } })
  const glowPulse = Math.sin(frame / 15) * 0.3 + 0.7
  const scanlineY = interpolate(frame % 90, [0, 90], [-10, 110])

  return (
    <AbsoluteFill style={{ backgroundColor: '#0a0a0a' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#39FF1408 1px, transparent 1px), linear-gradient(90deg, #39FF1408 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: neonOpacity }} />
      <div style={{ position: 'absolute', top: `${scanlineY}%`, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #39FF14, transparent)', opacity: 0.4 * neonOpacity }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%) scale(${scaleIn})`, width: 320, height: 320, boxShadow: `0 0 ${60 * glowPulse}px #39FF14, 0 0 ${120 * glowPulse}px #39FF1440`, borderRadius: 8, background: '#111', border: '1px solid #39FF14', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#39FF14', fontFamily: 'monospace' }}>[PRODUTO PRINCIPAL]</div>
      <div style={{ position: 'absolute', bottom: '15%', left: 0, right: 0, textAlign: 'center', color: '#39FF14', fontSize: 28, fontWeight: 900, opacity: neonOpacity, letterSpacing: 2, textShadow: '0 0 20px #39FF14', fontFamily: 'Impact, Arial Black, sans-serif' }}>JOKER WRAP TOOLS</div>
    </AbsoluteFill>
  )
}
