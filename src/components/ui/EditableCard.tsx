import { Card, CardBody, Textarea } from "@heroui/react";

const EditableCard: React.FC = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <div className="flex gap-3">
            <Textarea
              className=""
              label="Вопрос"
              placeholder="Нажмите, чтобы изменить текст"
            />
            <Textarea
              className=""
              label="Скрытый текст"
              placeholder="Нажмите, чтобы изменить текст"
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EditableCard;
