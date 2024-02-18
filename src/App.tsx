import { useState } from "react";
import "./App.css";
import { WaveCommand } from "./WaveCommand";
import { TribeKingCards, BlackWaveCard, GiantVersionEnemies } from "./Cards";
import { CardList } from "./CardList";

function App() {
  const [cardCode, setCardCode] = useState("");
  return (
    <>
      <h1>Mega Man Star Force 2: Wave command viewer</h1>
      <div className="card">
        <WaveCommand value={cardCode} className="wave-command-grid" />
        <div className="card">
          <label htmlFor="wave-command-code">Wave command Code </label>
          <input
            name="wave-command-code"
            type="text"
            value={cardCode}
            onChange={(event) => setCardCode(event.target.value)}
          />
        </div>
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

        <div className="card-sektion">
          <h2>Turn virus into their giant version</h2>
          <p>
            In the Omega-Xis screen, press select to input a wave command code,
            use this grid as a reference to know where to input the code.
          </p>
          <blockquote>Note: Only one code can be activated at time.</blockquote>
          <CardList
            cards={GiantVersionEnemies}
            onCardSelect={(card) => setCardCode(card.Code)}
          />
        </div>
      </div>
      <footer>
        <a href="https://gamefaqs.gamespot.com/ds/942813-mega-man-star-force-2-zerker-x-ninja/cheats">
          Mega Man Star Force 2: Wave Command Card source
        </a>
      </footer>
    </>
  );
}

export default App;
