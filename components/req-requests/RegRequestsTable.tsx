import { IRegRequest } from "@/interfaces/regRequest";
import Table, { TableRow, TableColumn } from "../shared/Table/Table";

interface Props {
  regRequests: IRegRequest[];
}

export default function RegRequestsTable({ regRequests }: Props) {
  return (
    <Table
      headers={[
        { title: "ID" },
        { title: "Ф.И.О" },
        { title: "Телефон" },
        { title: "Возраст" },
      ]}
    >
      {regRequests.map((request) => (
        <TableRow key={request.id}>
          <TableColumn>{request.id}</TableColumn>
          <TableColumn>{request.name}</TableColumn>
          <TableColumn>{request.phone}</TableColumn>
          <TableColumn>{request.age}</TableColumn>
        </TableRow>
      ))}
    </Table>
  );
}
