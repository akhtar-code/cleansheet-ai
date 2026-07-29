"use client";

import { useState } from "react";

type FindReplaceProps = {
  onFindReplace: (
    findText: string,
    replaceText: string
  ) => void;
};

export default function FindReplace({
  onFindReplace,
}: FindReplaceProps) {
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  return (
    <div className="mt-8 border-t pt-8">

      <h3 className="text-xl font-bold mb-4">
        🔍 Find & Replace
      </h3>

      <div className="grid gap-4 md:grid-cols-3">

        <input
          type="text"
          placeholder="Find text..."
          value={findText}
          onChange={(e) =>
            setFindText(e.target.value)
          }
          className="rounded-xl border border-gray-300 p-3"
        />

        <input
          type="text"
          placeholder="Replace with..."
          value={replaceText}
          onChange={(e) =>
            setReplaceText(e.target.value)
          }
          className="rounded-xl border border-gray-300 p-3"
        />

        <button
          onClick={() =>
            onFindReplace(
              findText,
              replaceText
            )
          }
          className="rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          Replace All
        </button>

      </div>

    </div>
  );
}