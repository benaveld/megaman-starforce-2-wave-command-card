import { Card } from "./Cards";
import "./CardList.css";

export type CardListProps = {
  cards: Card[];
  onCardSelect?: (card: Card) => void;
  selectedCode?: string;
} & JSX.IntrinsicElements["table"];

export function CardList({
  cards,
  onCardSelect = () => {
    //no-op
  },
  selectedCode = "",
  className = "",
  ...other
}: CardListProps) {
  return (
    <table className={"card-list " + className} {...other}>
      <thead>
        <tr>
          <th>Code</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        {cards.map((card) => {
          const isSelected =
            selectedCode.toLowerCase() === card.Code.toLowerCase();
          const modifier = isSelected ? "active" : "inactive";
          return (
            <tr
              key={`${card.Code}-${modifier}`}
              onClick={() => onCardSelect(card)}
              className={modifier}
            >
              <td>{card.Code}</td>
              <td>{card.Effect}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
