import ResourceList from "@/components/ResourceList/ResourceList";
import { getSubjects } from "@/requests/subjects";

async function fetchSubjects() {
  return await getSubjects();
}

export default async function Subjects() {
  const subjects = await fetchSubjects();

  return <ResourceList title="Предметы"></ResourceList>;
}
