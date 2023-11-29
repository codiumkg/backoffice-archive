import ResourceList from "@/components/ResourceList/ResourceList";
import DataTable from "@/components/shared/DataTable/DataTable";
import { getSections } from "@/requests/sections";

async function fetchSections() {
  return await getSections();
}

export default async function Sections() {
  const sections = await fetchSections();

  return (
    <ResourceList title="Разделы">
      <DataTable
        data={sections}
        headers={[
          { header: "ID", accessorKey: "id" },
          { header: "Название", accessorKey: "title" },
          { header: "ID Предмета", accessorKey: "subjectId" },
          { header: "Создано", accessorKey: "createdAt" },
          { header: "Обновлено", accessorKey: "updatedAt" },
        ]}
      />
    </ResourceList>
  );
}
