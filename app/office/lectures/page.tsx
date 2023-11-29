import ResourceList from "@/components/ResourceList/ResourceList";
import { getLectures } from "@/requests/lectures";

async function fetchLectures() {
  return await getLectures();
}

export default async function Sections() {
  const lectures = await fetchLectures();

  return <ResourceList title="Лекции"></ResourceList>;
}
