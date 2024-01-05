import ResourceList from "@/components/shared/ResourceList/ResourceList";
import Table, { TableColumn, TableRow } from "@/components/shared/Table/Table";
import { getTopics } from "@/requests/topics";

async function fetchTopics() {
  return await getTopics();
}

export default async function Topics() {
  const topics = await fetchTopics();

  return (
    <ResourceList title="Топики">
      <Table
        headers={[{ title: "ID" }, { title: "Название" }, { title: "Раздел" }]}
      >
        {topics.map((topic) => (
          <TableRow key={topic.id}>
            <TableColumn>{topic.id}</TableColumn>
            <TableColumn>{topic.title}</TableColumn>
            <TableColumn>{topic.section.title}</TableColumn>
          </TableRow>
        ))}
      </Table>
    </ResourceList>
  );
}
