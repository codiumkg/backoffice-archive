import ResourceList from "@/components/shared/ResourceList/ResourceList";
import Table, { TableColumn, TableRow } from "@/components/shared/Table/Table";
import { getGroups } from "@/requests/groups";

async function fetchGroups() {
  const groups = await getGroups();

  return groups;
}

export default async function Groups() {
  const groups = await fetchGroups();

  return (
    <ResourceList title="Группы">
      <Table
        headers={[{ title: "ID" }, { title: "Название" }, { title: "Предмет" }]}
      >
        {groups.map((group) => (
          <TableRow key={group.id}>
            <TableColumn>{group.id}</TableColumn>
            <TableColumn>{group.title}</TableColumn>
            <TableColumn>{group.subject.title}</TableColumn>
          </TableRow>
        ))}
      </Table>
    </ResourceList>
  );
}
