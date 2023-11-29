import ResourceList from "@/components/ResourceList/ResourceList";
import { getGroups } from "@/requests/groups";

async function fetchGroups() {
  const groups = await getGroups();

  return groups;
}

export default async function Groups() {
  const groups = await fetchGroups();

  return <ResourceList title="Группы"></ResourceList>;
}
