import ResourceList from "@/components/shared/ResourceList/ResourceList";
import Table, { TableColumn, TableRow } from "@/components/shared/Table/Table";
import { DATE_FORMAT } from "@/constants/common";

import { getSubjects } from "@/requests/subjects";
import dayjs from "dayjs";

async function fetchSubjects() {
  return await getSubjects();
}

export default async function Subjects() {
  const subjects = await fetchSubjects();

  return (
    <ResourceList title="Предметы">
      <Table
        headers={[
          { title: "ID" },
          { title: "Название" },
          { title: "Создан" },
          { title: "Обновлен" },
        ]}
      >
        {subjects.map((subject) => (
          <TableRow key={subject.id}>
            <TableColumn>{subject.id}</TableColumn>
            <TableColumn>{subject.title}</TableColumn>
            <TableColumn>
              {dayjs(subject.createdAt).format(DATE_FORMAT)}
            </TableColumn>
            <TableColumn>
              {dayjs(subject.updatedAt).format(DATE_FORMAT)}
            </TableColumn>
          </TableRow>
        ))}
      </Table>
    </ResourceList>
  );
}
