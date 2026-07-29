import { describe, it, expect } from "vitest";
import { sortData } from "../app/workspace/utils/sortData";

describe("sortData()", () => {
  it("sorts strings in ascending order", () => {
    const input = [
      { Name: "Sara" },
      { Name: "Ali" },
      { Name: "Bilal" },
    ];

    expect(sortData(input, "Name", "asc")).toEqual([
      { Name: "Ali" },
      { Name: "Bilal" },
      { Name: "Sara" },
    ]);
  });

  it("sorts strings in descending order", () => {
    const input = [
      { Name: "Ali" },
      { Name: "Bilal" },
      { Name: "Sara" },
    ];

    expect(sortData(input, "Name", "desc")).toEqual([
      { Name: "Sara" },
      { Name: "Bilal" },
      { Name: "Ali" },
    ]);
  });

  it("sorts numbers in ascending order", () => {
    const input = [
      { Age: 30 },
      { Age: 20 },
      { Age: 25 },
    ];

    expect(sortData(input, "Age", "asc")).toEqual([
      { Age: 20 },
      { Age: 25 },
      { Age: 30 },
    ]);
  });

  it("sorts numbers in descending order", () => {
    const input = [
      { Age: 20 },
      { Age: 25 },
      { Age: 30 },
    ];

    expect(sortData(input, "Age", "desc")).toEqual([
      { Age: 30 },
      { Age: 25 },
      { Age: 20 },
    ]);
  });

  it("returns empty array for empty input", () => {
    expect(sortData([], "Name", "asc")).toEqual([]);
  });

  it("does not crash when column is missing", () => {
    const input = [
      { Name: "Ali" },
      { Name: "Sara" },
    ];

    expect(sortData(input, "Age", "asc")).toEqual(input);
  });

  it("handles duplicate values correctly", () => {
    const input = [
      { Age: 20 },
      { Age: 20 },
      { Age: 30 },
    ];

    expect(sortData(input, "Age", "asc")).toEqual([
      { Age: 20 },
      { Age: 20 },
      { Age: 30 },
    ]);
  });

  it("does not modify original data reference", () => {
    const input = [
      { Name: "Sara" },
      { Name: "Ali" },
    ];

    const copy = [...input];

    sortData(input, "Name", "asc");

    expect(input).toEqual(copy);
  });
});