import ResourceList from "@/components/ResourceList/ResourceList";
import DataTable from "@/components/shared/DataTable/DataTable";
import { getLectures } from "@/requests/lectures";

async function fetchLectures() {
  return await getLectures();
}

export default async function Sections() {
  const lectures = await fetchLectures();

  return (
    <ResourceList title="Лекции">
      <DataTable
        data={lectures}
        headers={[
          { header: "ID", accessorKey: "id" },
          { header: "Название", accessorKey: "title" },
          { header: "Номер", accessorKey: "number" },
          { header: "ID Топика", accessorKey: "topicId" },
        ]}
      />
    </ResourceList>
  );
}
