import { describe, it, expect } from "vitest";
import { trimSpaces } from "../app/workspace/utils/trimSpaces";

describe("trimSpaces()", () => {
  it("removes leading and trailing spaces", () => {
    const input = [
      {
        Name: "  Ali  ",
        City: "  Karachi ",
      },
    ];

    expect(trimSpaces(input)).toEqual([
      {
        Name: "Ali",
        City: "Karachi",
      },
    ]);
  });

  it("does not change already trimmed values", () => {
    const input = [
      {
        Name: "Ali",
        City: "Karachi",
      },
    ];

    expect(trimSpaces(input)).toEqual(input);
  });

  it("returns empty array when input is empty", () => {
    expect(trimSpaces([])).toEqual([]);
  });

  it("does not modify numbers", () => {
    const input = [
      {
        Name: " Ali ",
        Age: 20,
      },
    ];

    expect(trimSpaces(input)).toEqual([
      {
        Name: "Ali",
        Age: 20,
      },
    ]);
  });

  it("does not modify boolean values", () => {
    const input = [
      {
        Active: true,
        Name: " Ali ",
      },
    ];

    expect(trimSpaces(input)).toEqual([
      {
        Active: true,
        Name: "Ali",
      },
    ]);
  });

  it("trims every string in every row", () => {
    const input = [
      {
        Name: " Ali ",
        City: " Karachi ",
      },
      {
        Name: " Sara ",
        City: " Lahore ",
      },
    ];

    expect(trimSpaces(input)).toEqual([
      {
        Name: "Ali",
        City: "Karachi",
      },
      {
        Name: "Sara",
        City: "Lahore",
      },
    ]);
  });

it("trims strings containing only spaces into empty strings", () => {
  const input = [
    {
      Name: "     ",
      City: " Karachi ",
    },
  ];

  expect(trimSpaces(input)).toEqual([
    {
      Name: "",
      City: "Karachi",
    },
  ]);
});

it("does not modify null or undefined values", () => {
  const input = [
    {
      Name: null,
      City: undefined,
      Age: 20,
    },
  ];

  expect(trimSpaces(input)).toEqual(input);
});

it("trims multiple spaces but preserves spaces inside text", () => {
  const input = [
    {
      Name: "  Ali Ahmed  ",
      City: "  New York  ",
    },
  ];

  expect(trimSpaces(input)).toEqual([
    {
      Name: "Ali Ahmed",
      City: "New York",
    },
  ]);
});});