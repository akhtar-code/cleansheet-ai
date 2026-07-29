"use client";

import { useState } from "react";

type SplitColumnProps = {
  columns: string[];

  onSplitColumn: (
    column: string,
    delimiter: string
  ) => void;
};

export default function SplitColumn({
  columns,
  onSplitColumn,
}: SplitColumnProps) {
  const [splitColumnName, setSplitColumnName] =
    useState("");

  const [delimiter, setDelimiter] =
    useState(" ");

  return (
    <div className="mt-8 border-t pt-8">

      <h3 className="text-xl font-bold mb-4">
        ✂ Split Column
      </h3>

      <div className="grid gap-4 md:grid-cols-3">

        <select
          value={splitColumnName}
          onChange={(e) =>
            setSplitColumnName(
              e.target.value
            )
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
          value={delimiter}
          onChange={(e) =>
            setDelimiter(
              e.target.value
            )
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
            onSplitColumn(
              splitColumnName,
              delimiter
            )
          }
          className="rounded-xl bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
        >
          Split Column
        </button>

      </div>

    </div>
  );
}