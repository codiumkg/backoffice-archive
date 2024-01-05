import ResourceList from "@/components/shared/ResourceList/ResourceList";
import Table, { TableColumn, TableRow } from "@/components/shared/Table/Table";
import { DATE_FORMAT } from "@/constants/common";
import { getLectures } from "@/requests/lectures";
import dayjs from "dayjs";

async function fetchLectures() {
  return await getLectures();
}

export default async function Sections() {
  const lectures = await fetchLectures();

  return (
    <ResourceList title="Лекции">
      <Table
        headers={[
          { title: "ID" },
          { title: "Название" },
          { title: "Номер" },
          { title: "Топик" },
          { title: "Создан" },
          { title: "Обновлен" },
        ]}
      >
        {lectures.map((lecture) => (
          <TableRow key={lecture.id}>
            <TableColumn>{lecture.id}</TableColumn>
            <TableColumn>{lecture.title}</TableColumn>
            <TableColumn>{lecture.number}</TableColumn>
            <TableColumn>{lecture.topic.title}</TableColumn>
            <TableColumn>
              {dayjs(lecture.createdAt).format(DATE_FORMAT)}
            </TableColumn>
            <TableColumn>
              {dayjs(lecture.updatedAt).format(DATE_FORMAT)}
            </TableColumn>
          </TableRow>
        ))}
      </Table>
    </ResourceList>
  );
}
