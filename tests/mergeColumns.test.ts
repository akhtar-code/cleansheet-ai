import { describe, it, expect } from "vitest";
import { mergeColumns } from "../app/workspace/utils/mergeColumns";

describe("mergeColumns()", () => {
  it("merges two columns into the first column", () => {
    const input = [
      {
        First: "Ali",
        Last: "Khan",
      },
    ];

    expect(
      mergeColumns(input, "First", "Last", " ")
    ).toEqual([
      {
        First: "Ali Khan",
        Last: "",
      },
    ]);
  });

  it("merges multiple rows", () => {
    const input = [
      {
        First: "Ali",
        Last: "Khan",
      },
      {
        First: "Sara",
        Last: "Ahmed",
      },
    ];

    expect(
      mergeColumns(input, "First", "Last", " ")
    ).toEqual([
      {
        First: "Ali Khan",
        Last: "",
      },
      {
        First: "Sara Ahmed",
        Last: "",
      },
    ]);
  });

  it("supports custom separator", () => {
    const input = [
      {
        City: "Karachi",
        Province: "Sindh",
      },
    ];

    expect(
      mergeColumns(
        input,
        "City",
        "Province",
        ", "
      )
    ).toEqual([
      {
        City: "Karachi, Sindh",
        Province: "",
      },
    ]);
  });

  it("handles empty input", () => {
    expect(
      mergeColumns([], "A", "B", " ")
    ).toEqual([]);
  });

  it("keeps unrelated columns", () => {
    const input = [
      {
        Name: "Ali",
        Age: 20,
        City: "Karachi",
      },
    ];

    expect(
      mergeColumns(
        input,
        "Name",
        "City",
        " - "
      )
    ).toEqual([
      {
        Name: "Ali - Karachi",
        Age: 20,
        City: "",
      },
    ]);
  });

  it("handles missing values", () => {
    const input = [
      {
        First: "Ali",
        Last: "",
      },
    ];

    expect(
      mergeColumns(
        input,
        "First",
        "Last",
        " "
      )
    ).toEqual([
      {
        First: "Ali ",
        Last: "",
      },
    ]);
  });
});