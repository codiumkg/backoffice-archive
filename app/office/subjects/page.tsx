import ResourceList from "@/components/ResourceList/ResourceList";
import DataTable from "@/components/shared/DataTable/DataTable";
import { getSubjects } from "@/requests/subjects";

async function fetchSubjects() {
  return await getSubjects();
}

export default async function Subjects() {
  const subjects = await fetchSubjects();

  return (
    <ResourceList title="Предметы">
      <DataTable
        data={subjects}
        headers={[
          { header: "ID", accessorKey: "id" },
          { header: "Название", accessorKey: "title" },
          { header: "Создан", accessorKey: "createdAt" },
          { header: "Обновлен", accessorKey: "updatedAt" },
        ]}
      />
    </ResourceList>
  );
}
