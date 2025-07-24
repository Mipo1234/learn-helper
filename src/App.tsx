import { Chip } from "@heroui/react";
import { PageLayout } from "./components/layout/PageLayout";
import EditableCard from "./components/ui/EditableCard";

const App: React.FC = () => {
  return (
    <PageLayout>
      <div className="mb-6 flex items-center gap-2">
        <h1 className="text-2xl font-bold">Learn Helper</h1>
        <Chip size="sm" classNames={{ content: "font-semibold" }}>
          v.0.0.1
        </Chip>
      </div>
      <EditableCard />
    </PageLayout>
  );
};

export default App;
