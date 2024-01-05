import ResourceList from "@/components/shared/ResourceList/ResourceList";
import Table, { TableColumn, TableRow } from "@/components/shared/Table/Table";
import { getSections } from "@/requests/sections";

async function fetchSections() {
  return await getSections();
}

export default async function Sections() {
  const sections = await fetchSections();

  return (
    <ResourceList title="Разделы">
      <Table
        headers={[{ title: "ID" }, { title: "Название" }, { title: "Предмет" }]}
      >
        {sections.map((section) => (
          <TableRow key={section.id}>
            <TableColumn>{section.id}</TableColumn>
            <TableColumn>{section.title}</TableColumn>
            <TableColumn>{section.subject.title}</TableColumn>
          </TableRow>
        ))}
      </Table>
    </ResourceList>
  );
}
