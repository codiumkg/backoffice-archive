import GroupsList from "@/pages/group/components/GroupsList";
import { getGroups } from "@/requests/groups";

async function fetchGroups() {
  const groups = await getGroups();

  return groups;
}

export default async function Groups() {
  const groups = await fetchGroups();

  return <GroupsList groups={groups} />;
}
