import { useState } from "react";
import "./App.css";
import { WaveCommand } from "./WaveCommand";
import { TribeKingCards, BlackWaveCard } from "./Cards";
import { CardList } from "./CardList";

function App() {
  const [cardCode, setCardCode] = useState("");
  return (
    <>
      <div
        className="card"
        style={{ gap: "1em", display: "flex", flexDirection: "column" }}
      >
        <WaveCommand
          value={cardCode}
          style={{ width: "500px", height: "500px" }}
        />
        <input
          type="text"
          value={cardCode}
          onChange={(event) => setCardCode(event.target.value)}
        />
      </div>
      <div
        className="card"
        style={{ gap: "1em", display: "flex", flexDirection: "column" }}
      >
        <CardList
          cards={TribeKingCards}
          onCardSelect={(card) => setCardCode(card.Code)}
        />
        <CardList
          cards={BlackWaveCard}
          onCardSelect={(card) => setCardCode(card.Code)}
        />
      </div>
    </>
  );
}

export default App;
