"use client";
import { IGroup } from "@/interfaces/group";
import ResourceList from "@/components/shared/ResourceList/ResourceList";
import Table, { TableColumn, TableRow } from "@/components/shared/Table/Table";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

interface Props {
  groups: IGroup[];
}

function GroupsList({ groups }: Props) {
  const router = useRouter();

  return (
    <ResourceList
      title="Группы"
      onCreateClick={() => router.push(ROUTES.GROUP)}
    >
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

export default GroupsList;
