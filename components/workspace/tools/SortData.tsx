"use client";

import { useState } from "react";

type SortDataProps = {
  columns: string[];

  onSortData: (
    column: string,
    direction: "asc" | "desc"
  ) => void;
};

export default function SortData({
  columns,
  onSortData,
}: SortDataProps) {
  const [sortColumn, setSortColumn] =
    useState("");

  const [sortDirection, setSortDirection] =
    useState<"asc" | "desc">("asc");

  return (
    <div className="mt-8 border-t pt-8">

      <h3 className="text-xl font-bold mb-4">
        ↕️ Sort Data
      </h3>

      <div className="grid gap-4 md:grid-cols-3">

        <select
          value={sortColumn}
          onChange={(e) =>
            setSortColumn(e.target.value)
          }
          className="rounded-xl border border-gray-300 p-3"
        >
          <option value="">
            Select Column
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
          value={sortDirection}
          onChange={(e) =>
            setSortDirection(
              e.target.value as
                | "asc"
                | "desc"
            )
          }
          className="rounded-xl border border-gray-300 p-3"
        >
          <option value="asc">
            A → Z
          </option>

          <option value="desc">
            Z → A
          </option>
        </select>

        <button
          onClick={() =>
            onSortData(
              sortColumn,
              sortDirection
            )
          }
          className="rounded-xl bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition"
        >
          Sort Data
        </button>

      </div>

    </div>
  );
}