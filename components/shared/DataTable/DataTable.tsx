"use client";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo } from "react";

import styles from "./DataTable.module.scss";

interface Props<T> {
  data: T[];
  headers: {
    header: string;
    accessorKey: string;
  }[];
}

export default function DataTable<T>({ data, headers }: Props<T>) {
  const resources = useMemo<T[]>(() => data, [data]);
  const columns = useMemo<ColumnDef<T>[]>(() => headers, [headers]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.header}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className={styles.headerRow} key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className={styles["header-cell"]}
                  key={header.id}
                  colSpan={header.colSpan}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.body}>
          {table.getRowModel().rows.map((row) => (
            <tr className={styles.dataRow} key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className={styles.dataCell} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
