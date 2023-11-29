import ResourceList from "@/components/ResourceList/ResourceList";
import DataTable from "@/components/shared/DataTable/DataTable";
import { getGroups } from "@/requests/groups";

async function fetchGroups() {
  const groups = await getGroups();

  return groups;
}

export default async function Groups() {
  const groups = await fetchGroups();

  return (
    <ResourceList title="Группы">
      <DataTable
        data={groups}
        headers={[
          { header: "ID", accessorKey: "id" },
          { header: "Название", accessorKey: "title" },
          { header: "Предмет", accessorKey: "subject" },
          { header: "ID Предмета", accessorKey: "subjectId" },
        ]}
      />
    </ResourceList>
  );
}
