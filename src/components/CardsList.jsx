import Card from "./Card";

function CardsList({ flashcards }) {
  return (
    <div className="pb-20">
      {flashcards.map((card) => (
        <Card key={card.id} question={card.question} answer={card.answer} isFlipped={card.isFlipped} timeStamp={card.timeStamp} />
      ))}
    </div>
  );
}

export default CardsList;
