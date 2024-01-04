import { IRegRequest } from "@/interfaces/regRequest";
import Table from "../shared/Table/Table";

interface Props {
  regRequests: IRegRequest[];
}

export default function RegRequestsTable({ regRequests }: Props) {
  return (
    <Table
      headers={[
        { title: "ID" },
        { title: "Название" },
        { title: "Телефон" },
        { title: "Возраст" },
      ]}
    >
      {regRequests.map((request) => (
        <div key={request.id}>{request.name}</div>
      ))}
    </Table>
  );
}
