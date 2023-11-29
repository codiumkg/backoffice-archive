import ResourceList from "@/components/ResourceList/ResourceList";
import { getRegRequests } from "@/requests/reg-requests";

async function fetchRegRequests() {
  const regRequests = await getRegRequests();

  return regRequests;
}

export default async function Requests() {
  const regRequests = await fetchRegRequests();

  return <ResourceList title="Заявки"></ResourceList>;
}
