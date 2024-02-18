import { Card } from "./Cards";

export type CardListProps = {
  cards: Card[];
  onCardSelect?: (card: Card) => void;
} & JSX.IntrinsicElements["table"];

export function CardList({
  cards,
  onCardSelect = () => {
    //no-op
  },
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
        {cards.map((card) => (
          <tr key={card.Code} onClick={() => onCardSelect(card)}>
            <td>{card.Code}</td>
            <td>{card.Effect}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
