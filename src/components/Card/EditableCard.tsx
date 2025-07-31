import { Button, Card, CardBody, Textarea } from "@heroui/react";

interface EditableCardProps {
  visibleValue: string;
  onVisibleValueChange: (value: string) => void;
  hiddenValue: string;
  onHiddenValueChange: (value: string) => void;
  onDelete: () => void;
}

const EditableCard: React.FC<EditableCardProps> = ({
  visibleValue,
  onVisibleValueChange,
  hiddenValue,
  onHiddenValueChange,
  onDelete,
}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <div className="flex gap-3">
            <Textarea
              className=""
              label="Вопрос"
              placeholder="Нажмите, чтобы изменить текст"
              value={visibleValue}
              onValueChange={onVisibleValueChange}
            />
            <Textarea
              className=""
              label="Скрытый текст"
              placeholder="Нажмите, чтобы изменить текст"
              value={hiddenValue}
              onValueChange={onHiddenValueChange}
            />
          </div>
          <Button onPress={onDelete}>X</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default EditableCard;
