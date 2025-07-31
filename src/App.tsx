import { Button, Chip } from "@heroui/react";
import { PageLayout } from "./components/layout/PageLayout";
import EditableCard from "./components/Card/EditableCard";
import { useState } from "react";
import { Card } from "./components/Card/types";

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { visibleValue: "", hiddenValue: "" },
  ]);

  const addEmptyCard = () => {
    setCards([...cards, { visibleValue: "", hiddenValue: "" }]);
  };

  const removeCard = (idxToRemove: number) => {
    const newCards = cards.filter((_, idx) => idx !== idxToRemove);
    setCards(newCards);
  };

  const changeVisibleValue = (cardIdx: number, value: string) => {
    const newCards = [...cards];
    newCards[cardIdx] = {
      hiddenValue: newCards[cardIdx].hiddenValue,
      visibleValue: value,
    };
    setCards(newCards);
  };

  const changeHiddenValue = (cardIdx: number, value: string) => {
    const newCards = [...cards];
    newCards[cardIdx] = {
      hiddenValue: value,
      visibleValue: newCards[cardIdx].visibleValue,
    };
    setCards(newCards);
  };
  return (
    <PageLayout>
      <div className="mb-6 flex items-center gap-2">
        <h1 className="text-2xl font-bold">Learn Helper</h1>
        <Chip size="sm" classNames={{ content: "font-semibold" }}>
          v.0.0.1
        </Chip>
      </div>
      {JSON.stringify(cards)}
      {cards.map((card, idx) => (
        <EditableCard
          key={idx}
          visibleValue={card.visibleValue}
          onVisibleValueChange={(value) => changeVisibleValue(idx, value)}
          hiddenValue={card.hiddenValue}
          onHiddenValueChange={(value) => changeHiddenValue(idx, value)}
          onDelete={() => removeCard(idx)}
        ></EditableCard>
      ))}

      <Button onPress={addEmptyCard}>Добавить</Button>
    </PageLayout>
  );
};

export default App;
