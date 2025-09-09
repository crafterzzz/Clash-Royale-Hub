import React, { useState } from 'react'

const allCards = [
  'Archer','Knight','Giant','Musketeer','Fireball','Zap','Prince','Baby Dragon',
  'Bowler','Minions','Hog Rider','P.E.K.K.A','Wizard','Valkyrie','Graveyard','Golem'
]

export default function App(): JSX.Element {
  const [deck, setDeck] = useState<string[]>([])

  const addToDeck = (card: string) => {
    if (deck.includes(card)) return
    if (deck.length >= 8) return
    setDeck([...deck, card])
  }

  const removeFromDeck = (card: string) => {
    setDeck(deck.filter(c => c !== card))
  }

  const clearDeck = () => setDeck([])

  return (
    <div className="app-root">
      <header className="header">
        <div className="brand">
          <h1>Clash Royale Hub</h1>
          <p className="tag">Deck Builder & Guides</p>
        </div>
      </header>

      <main className="container">
        <section className="deck-builder">
          <div className="deck-header">
            <h2>Deck Builder</h2>
            <div className="deck-actions">
              <button onClick={clearDeck} className="btn ghost">Clear</button>
              <div className="deck-count">{deck.length}/8</div>
            </div>
          </div>

          <div className="deck-slots" role="list">
            {deck.map((card) => (
              <button key={card} onClick={() => removeFromDeck(card)} className="card slot filled" title="Click to remove">
                {card}
              </button>
            ))}
            {Array.from({ length: 8 - deck.length }).map((_, i) => (
              <div key={i} className="card slot empty">Empty</div>
            ))}
          </div>

          <h3 className="available-title">Available Cards</h3>
          <div className="cards-grid">
            {allCards.map((card) => (
              <button
                key={card}
                onClick={() => addToDeck(card)}
                className={`card selectable ${deck.includes(card) ? 'disabled' : ''}`}
                disabled={deck.includes(card) || deck.length >= 8}
              >
                {card}
              </button>
            ))}
          </div>
        </section>

        <aside className="guides">
          <h2>Deck Guides</h2>
          <p className="muted">Coming soon — add strategy guides for popular decks here.</p>

          <div className="guide-placeholder">
            <h4>Example: Giant Bowler</h4>
            <p className="muted">Tip: Place Bowler behind Giant to clear small troops. Use Fireball for medium-health support units.</p>
          </div>
        </aside>
      </main>

      <footer className="footer">
        <small>Made with ❤️ — Black, Blue, and Pink theme</small>
      </footer>
    </div>
  )
}
