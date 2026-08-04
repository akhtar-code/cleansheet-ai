import { describe, it, expect } from "vitest";
import { removeEmptyColumns } from "../app/workspace/utils/removeEmptyColumns";

describe("removeEmptyColumns()", () => {
  it("removes completely empty columns", () => {
    const input = [
      { Name: "Ali", Age: 20, City: "" },
      { Name: "Sara", Age: 22, City: "" },
    ];

    expect(removeEmptyColumns(input)).toEqual([
      { Name: "Ali", Age: 20 },
      { Name: "Sara", Age: 22 },
    ]);
  });

  it("keeps columns containing at least one value", () => {
    const input = [
      { Name: "Ali", City: "" },
      { Name: "Sara", City: "Karachi" },
    ];

    expect(removeEmptyColumns(input)).toEqual(input);
  });

  it("returns empty array when input is empty", () => {
    expect(removeEmptyColumns([])).toEqual([]);
  });

  it("does not remove columns containing zero", () => {
    const input = [
      { Name: "Ali", Score: 0 },
      { Name: "Sara", Score: "" },
    ];

    expect(removeEmptyColumns(input)).toEqual(input);
  });

  it("does not remove columns containing false", () => {
    const input = [
      { Name: "Ali", Active: false },
      { Name: "Sara", Active: "" },
    ];

    expect(removeEmptyColumns(input)).toEqual(input);
  });

  it("removes multiple empty columns", () => {
    const input = [
      {
        Name: "Ali",
        Empty1: "",
        Empty2: "",
        Age: 20,
      },
      {
        Name: "Sara",
        Empty1: "",
        Empty2: "",
        Age: 22,
      },
    ];

    expect(removeEmptyColumns(input)).toEqual([
      { Name: "Ali", Age: 20 },
      { Name: "Sara", Age: 22 },
    ]);
  });

it("does not modify data when no empty columns exist", () => {
  const input = [
    { Name: "Ali", Age: 20 },
    { Name: "Sara", Age: 22 },
  ];

  expect(removeEmptyColumns(input)).toEqual(input);
});

it("removes an empty column even when all values are whitespace", () => {
  const input = [
    { Name: "Ali", Notes: "   " },
    { Name: "Sara", Notes: "   " },
  ];

  expect(removeEmptyColumns(input)).toEqual([
    { Name: "Ali" },
    { Name: "Sara" },
  ]);
});

it("keeps partially filled columns", () => {
  const input = [
    { Name: "Ali", Notes: "" },
    { Name: "Sara", Notes: "Present" },
  ];

  expect(removeEmptyColumns(input)).toEqual(input);
});});