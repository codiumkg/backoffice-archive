import RegRequestsTable from "@/components/req-requests/RegRequestsTable";
import ResourceList from "@/components/shared/ResourceList/ResourceList";
import { getRegRequests } from "@/requests/reg-requests";
import { redirect } from "next/navigation";

async function fetchRegRequests() {
  try {
    const regRequests = await getRegRequests();

    return regRequests;
  } catch (error) {}

  redirect("error");
}

export default async function Requests() {
  const regRequests = await fetchRegRequests();

  return (
    <ResourceList title="Заявки">
      <RegRequestsTable regRequests={regRequests} />
    </ResourceList>
  );
}
