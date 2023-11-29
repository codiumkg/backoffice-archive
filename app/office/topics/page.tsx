import ResourceList from "@/components/ResourceList/ResourceList";
import DataTable from "@/components/shared/DataTable/DataTable";
import { getTopics } from "@/requests/topics";

async function fetchTopics() {
  return await getTopics();
}

export default async function Topics() {
  const topics = await fetchTopics();

  return (
    <ResourceList title="Топики">
      <DataTable
        data={topics}
        headers={[
          { header: "ID", accessorKey: "id" },
          { header: "Название", accessorKey: "title" },
          { header: "ID Раздела", accessorKey: "sectionId" },
          { header: "Создано", accessorKey: "createdAt" },
          { header: "Обновлено", accessorKey: "updatedAt" },
        ]}
      />
    </ResourceList>
  );
}
