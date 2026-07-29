"use client";

import { useState } from "react";

type MergeColumnsProps = {
  columns: string[];

  onMergeColumns: (
    firstColumn: string,
    secondColumn: string,
    separator: string
  ) => void;
};

export default function MergeColumns({
  columns,
  onMergeColumns,
}: MergeColumnsProps) {
  const [firstColumn, setFirstColumn] =
    useState("");

  const [secondColumn, setSecondColumn] =
    useState("");

  const [separator, setSeparator] =
    useState(" ");

  return (
    <div className="mt-8 border-t pt-8">

      <h3 className="text-xl font-bold mb-4">
        🔗 Merge Columns
      </h3>

      <div className="grid gap-4 md:grid-cols-4">

        <select
          value={firstColumn}
          onChange={(e) =>
            setFirstColumn(e.target.value)
          }
          className="rounded-xl border border-gray-300 p-3"
        >
          <option value="">
            First Column
          </option>

          {columns.map((column) => (
            <option
              key={column}
              value={column}
            >
              {column}
            </option>
          ))}
        </select>

        <select
          value={secondColumn}
          onChange={(e) =>
            setSecondColumn(e.target.value)
          }
          className="rounded-xl border border-gray-300 p-3"
        >
          <option value="">
            Second Column
          </option>

          {columns.map((column) => (
            <option
              key={column}
              value={column}
            >
              {column}
            </option>
          ))}
        </select>

        <select
          value={separator}
          onChange={(e) =>
            setSeparator(e.target.value)
          }
          className="rounded-xl border border-gray-300 p-3"
        >
          <option value=" ">
            Space
          </option>

          <option value=",">
            Comma
          </option>

          <option value="-">
            Dash (-)
          </option>

          <option value="|">
            Pipe (|)
          </option>
        </select>

        <button
          onClick={() =>
            onMergeColumns(
              firstColumn,
              secondColumn,
              separator
            )
          }
          className="rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
        >
          Merge Columns
        </button>

      </div>

    </div>
  );
}