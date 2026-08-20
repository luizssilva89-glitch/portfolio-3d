class SoundEngine {
  private ctx: AudioContext | null = null
  private isMuted: boolean = false
  private droneGain: GainNode | null = null
  private droneOsc1: OscillatorNode | null = null
  private droneOsc2: OscillatorNode | null = null
  private isDronePlaying: boolean = false

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted
    if (muted && this.droneGain && this.ctx) {
      this.droneGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1)
    } else if (!muted && this.droneGain && this.ctx && this.isDronePlaying) {
      this.droneGain.gain.setTargetAtTime(0.04, this.ctx.currentTime, 0.5)
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted
  }

  public playHover() {
    if (this.isMuted) return
    try {
      this.init()
      if (!this.ctx) return

      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(580, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08)

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.08)
    } catch {
      // Audio context might be restricted before interaction
    }
  }

  public playSelect() {
    if (this.isMuted) return
    try {
      this.init()
      if (!this.ctx) return

      const osc1 = this.ctx.createOscillator()
      const osc2 = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc1.type = 'triangle'
      osc2.type = 'sine'

      osc1.frequency.setValueAtTime(520, this.ctx.currentTime)
      osc1.frequency.exponentialRampToValueAtTime(1040, this.ctx.currentTime + 0.15)

      osc2.frequency.setValueAtTime(780, this.ctx.currentTime)
      osc2.frequency.exponentialRampToValueAtTime(1560, this.ctx.currentTime + 0.15)

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18)

      osc1.connect(gain)
      osc2.connect(gain)
      gain.connect(this.ctx.destination)

      osc1.start()
      osc2.start()
      osc1.stop(this.ctx.currentTime + 0.18)
      osc2.stop(this.ctx.currentTime + 0.18)
    } catch {
      // Ignored
    }
  }

  public playWarp() {
    if (this.isMuted) return
    try {
      this.init()
      if (!this.ctx) return

      const osc = this.ctx.createOscillator()
      const filter = this.ctx.createBiquadFilter()
      const gain = this.ctx.createGain()

      osc.type = 'sawtooth'
      filter.type = 'lowpass'

      osc.frequency.setValueAtTime(120, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(450, this.ctx.currentTime + 0.4)

      filter.frequency.setValueAtTime(300, this.ctx.currentTime)
      filter.frequency.exponentialRampToValueAtTime(2400, this.ctx.currentTime + 0.3)
      filter.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.6)

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.6)
    } catch {
      // Ignored
    }
  }

  public playModalOpen() {
    if (this.isMuted) return
    try {
      this.init()
      if (!this.ctx) return

      const freqs = [440, 660, 880, 1320]
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return
        const osc = this.ctx.createOscillator()
        const gain = this.ctx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.03)

        gain.gain.setValueAtTime(0.04, this.ctx.currentTime + idx * 0.03)
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.03 + 0.25)

        osc.connect(gain)
        gain.connect(this.ctx.destination)

        osc.start(this.ctx.currentTime + idx * 0.03)
        osc.stop(this.ctx.currentTime + idx * 0.03 + 0.25)
      })
    } catch {
      // Ignored
    }
  }

  public playModalClose() {
    if (this.isMuted) return
    try {
      this.init()
      if (!this.ctx) return

      const freqs = [1100, 770, 440]
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return
        const osc = this.ctx.createOscillator()
        const gain = this.ctx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.03)

        gain.gain.setValueAtTime(0.03, this.ctx.currentTime + idx * 0.03)
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.03 + 0.15)

        osc.connect(gain)
        gain.connect(this.ctx.destination)

        osc.start(this.ctx.currentTime + idx * 0.03)
        osc.stop(this.ctx.currentTime + idx * 0.03 + 0.15)
      })
    } catch {
      // Ignored
    }
  }

  public playTyping() {
    if (this.isMuted) return
    try {
      this.init()
      if (!this.ctx) return

      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'triangle'
      const randomFreq = 1200 + Math.random() * 600
      osc.frequency.setValueAtTime(randomFreq, this.ctx.currentTime)

      gain.gain.setValueAtTime(0.02, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.02)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.02)
    } catch {
      // Ignored
    }
  }

  public toggleAmbientDrone(): boolean {
    try {
      this.init()
      if (!this.ctx) return false

      if (this.isDronePlaying) {
        if (this.droneGain) {
          this.droneGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.5)
        }
        setTimeout(() => {
          if (this.droneOsc1) {
            this.droneOsc1.stop()
            this.droneOsc1.disconnect()
            this.droneOsc1 = null
          }
          if (this.droneOsc2) {
            this.droneOsc2.stop()
            this.droneOsc2.disconnect()
            this.droneOsc2 = null
          }
        }, 500)
        this.isDronePlaying = false
        return false
      } else {
        const osc1 = this.ctx.createOscillator()
        const osc2 = this.ctx.createOscillator()
        const filter = this.ctx.createBiquadFilter()
        const gain = this.ctx.createGain()

        osc1.type = 'sawtooth'
        osc1.frequency.setValueAtTime(55, this.ctx.currentTime) // A1 note

        osc2.type = 'sine'
        osc2.frequency.setValueAtTime(82.41, this.ctx.currentTime) // E2 harmonic

        filter.type = 'lowpass'
        filter.frequency.setValueAtTime(180, this.ctx.currentTime)

        const targetGain = this.isMuted ? 0 : 0.035
        gain.gain.setValueAtTime(0.0001, this.ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(targetGain, this.ctx.currentTime + 2.0)

        osc1.connect(filter)
        osc2.connect(filter)
        filter.connect(gain)
        gain.connect(this.ctx.destination)

        osc1.start()
        osc2.start()

        this.droneGain = gain
        this.droneOsc1 = osc1
        this.droneOsc2 = osc2
        this.isDronePlaying = true
        return true
      }
    } catch {
      return false
    }
  }

  public getIsDronePlaying(): boolean {
    return this.isDronePlaying
  }
}

export const soundFX = new SoundEngine()
