import { describe, it, expect } from "vitest";
import { removeEmptyRows } from "../app/workspace/utils/removeEmptyRows";

describe("removeEmptyRows()", () => {
  it("removes completely empty rows", () => {
    const input = [
      { Name: "Ali", Age: 20 },
      { Name: "", Age: "" },
      { Name: "Sara", Age: 22 },
    ];

    expect(removeEmptyRows(input)).toEqual([
      { Name: "Ali", Age: 20 },
      { Name: "Sara", Age: 22 },
    ]);
  });

  it("keeps rows that contain at least one value", () => {
    const input = [
      { Name: "", Age: 20 },
      { Name: "Ali", Age: "" },
    ];

    expect(removeEmptyRows(input)).toEqual(input);
  });

  it("returns empty array when input is empty", () => {
    expect(removeEmptyRows([])).toEqual([]);
  });

  it("removes multiple empty rows", () => {
    const input = [
      { Name: "", Age: "" },
      { Name: "", Age: "" },
      { Name: "Ali", Age: 20 },
      { Name: "", Age: "" },
    ];

    expect(removeEmptyRows(input)).toEqual([
      { Name: "Ali", Age: 20 },
    ]);
  });

  it("does not remove valid rows containing zero", () => {
    const input = [
      { Name: "Ali", Age: 0 },
      { Name: "", Age: "" },
    ];

    expect(removeEmptyRows(input)).toEqual([
      { Name: "Ali", Age: 0 },
    ]);
  });

  it("does not remove valid rows containing false", () => {
    const input = [
      { Active: false, Name: "Ali" },
      { Active: "", Name: "" },
    ];

    expect(removeEmptyRows(input)).toEqual([
      { Active: false, Name: "Ali" },
    ]);
  });
it("removes rows containing only whitespace", () => {
  const input = [
    { Name: "   ", Age: "" },
    { Name: "Ali", Age: 20 },
  ];

  expect(removeEmptyRows(input)).toEqual([
    { Name: "Ali", Age: 20 },
  ]);
});

it("does not modify already clean data", () => {
  const input = [
    { Name: "Ali", Age: 20 },
    { Name: "Sara", Age: 22 },
  ];

  expect(removeEmptyRows(input)).toEqual(input);
});

it("supports rows with different column names", () => {
  const input = [
    { City: "Karachi", Population: 200 },
    { City: "", Population: "" },
    { City: "Lahore", Population: 300 },
  ];

  expect(removeEmptyRows(input)).toEqual([
    { City: "Karachi", Population: 200 },
    { City: "Lahore", Population: 300 },
  ]);
});
});