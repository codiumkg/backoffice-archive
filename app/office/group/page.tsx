"use client";

import Resource from "@/components/shared/Resource/Resource";
import { useParams } from "next/navigation";

function GroupDetail() {
  const { id } = useParams();

  return <Resource title="Группа"></Resource>;
}

export default GroupDetail;
