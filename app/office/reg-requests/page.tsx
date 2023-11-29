import ResourceList from "@/components/ResourceList/ResourceList";
import DataTable from "@/components/shared/DataTable/DataTable";
import { getRegRequests } from "@/requests/reg-requests";

async function fetchRegRequests() {
  const regRequests = await getRegRequests();

  return regRequests;
}

export default async function Requests() {
  const regRequests = await fetchRegRequests();

  return (
    <ResourceList title="Заявки">
      <DataTable
        data={regRequests}
        headers={[
          { header: "ID", accessorKey: "id" },
          { header: "Ф.И.О", accessorKey: "name" },
          { header: "Телефон", accessorKey: "phone" },
          { header: "Возраст", accessorKey: "age" },
        ]}
      />
    </ResourceList>
  );
}
