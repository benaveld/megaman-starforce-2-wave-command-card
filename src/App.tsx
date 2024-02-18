import { useState } from "react";
import "./App.css";
import { WaveCommand } from "./WaveCommand";
import { TribeKingCards, BlackWaveCard } from "./Cards";
import { CardList } from "./CardList";

function App() {
  const [cardCode, setCardCode] = useState("");
  return (
    <>
      <div className="card">
        <WaveCommand value={cardCode} className="wave-command-grid" />
        <input
          type="text"
          value={cardCode}
          onChange={(event) => setCardCode(event.target.value)}
        />
      </div>
      <div className="card scroll">
        <div className="card-sektion">
          <h2>Auto forms</h2>
          <p>
            Go to mega's menu and press select then you'll see a blank screen
            press the correct blank spots which is coded in letters below.The
            ones I'm gonna do are the form codes.After you transform into one of
            them you automatically turn into that form you used at the start of
            the battle but if you want to turn back into normal MegaMan you have
            to reset your game.
          </p>
          <CardList
            cards={TribeKingCards}
            onCardSelect={(card) => setCardCode(card.Code)}
          />
        </div>
        <div className="card-sektion">
          <h2>Blank Card Wave Command</h2>
          <p>
            Open the Wave Command Editor of a Blank card, input the codes below
            and the Blank cards will becomes the battle cards.
          </p>
          <CardList
            cards={BlackWaveCard}
            onCardSelect={(card) => setCardCode(card.Code)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
