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
      <tr>
        <th>Code</th>
        <th>Effect</th>
      </tr>
      {cards.map((card) => (
        <tr key={card.Code} onClick={() => onCardSelect(card)}>
          <td>{card.Code}</td>
          <td>{card.Effect}</td>
        </tr>
      ))}
    </table>
  );
}
