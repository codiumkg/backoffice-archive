import ResourceList from "@/components/shared/ResourceList/ResourceList";
import { getTopics } from "@/requests/topics";

async function fetchTopics() {
  return await getTopics();
}

export default async function Topics() {
  const topics = await fetchTopics();

  return <ResourceList title="Топики"></ResourceList>;
}
