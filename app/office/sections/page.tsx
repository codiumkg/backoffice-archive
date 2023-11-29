import ResourceList from "@/components/ResourceList/ResourceList";
import { getSections } from "@/requests/sections";

async function fetchSections() {
  return await getSections();
}

export default async function Sections() {
  const sections = await fetchSections();

  return <ResourceList title="Разделы"></ResourceList>;
}
