import { describe, it, expect } from "vitest";
import { findReplace } from "../app/workspace/utils/findReplace";

describe("findReplace()", () => {
  it("replaces matching text", () => {
    const input = [
      { Name: "Ali", City: "Karachi" },
    ];

    expect(
      findReplace(input, "Ali", "Ahmed")
    ).toEqual([
      { Name: "Ahmed", City: "Karachi" },
    ]);
  });

  it("replaces text in multiple rows", () => {
    const input = [
      { Name: "Ali" },
      { Name: "Ali" },
      { Name: "Sara" },
    ];

    expect(
      findReplace(input, "Ali", "Ahmed")
    ).toEqual([
      { Name: "Ahmed" },
      { Name: "Ahmed" },
      { Name: "Sara" },
    ]);
  });

  it("does nothing when text is not found", () => {
    const input = [
      { Name: "Ali" },
    ];

    expect(
      findReplace(input, "John", "Ahmed")
    ).toEqual(input);
  });

  it("returns empty array for empty input", () => {
    expect(
      findReplace([], "Ali", "Ahmed")
    ).toEqual([]);
  });

  it("does not modify numbers", () => {
    const input = [
      { Name: "Ali", Age: 20 },
    ];

    expect(
      findReplace(input, "Ali", "Ahmed")
    ).toEqual([
      { Name: "Ahmed", Age: 20 },
    ]);
  });

  it("replaces text in different columns", () => {
    const input = [
      {
        Name: "Ali",
        City: "Ali Town",
      },
    ];

    expect(
      findReplace(input, "Ali", "Ahmed")
    ).toEqual([
      {
        Name: "Ahmed",
        City: "Ahmed Town",
      },
    ]);
  });

  it("supports empty replacement text", () => {
    const input = [
      { Name: "Ali" },
    ];

    expect(
      findReplace(input, "Ali", "")
    ).toEqual([
      { Name: "" },
    ]);
  });

  it("does not change boolean values", () => {
    const input = [
      {
        Active: true,
        Name: "Ali",
      },
    ];

    expect(
      findReplace(input, "Ali", "Ahmed")
    ).toEqual([
      {
        Active: true,
        Name: "Ahmed",
      },
    ]);
  });

it("replaces multiple occurrences inside the same string", () => {
  const input = [
    { Text: "Ali Ali Ali" },
  ];

  expect(
    findReplace(input, "Ali", "Ahmed")
  ).toEqual([
    { Text: "Ahmed Ahmed Ahmed" },
  ]);
});

it("does not modify empty strings", () => {
  const input = [
    { Name: "", City: "" },
  ];

  expect(
    findReplace(input, "Ali", "Ahmed")
  ).toEqual(input);
});

it("replaces text while preserving surrounding characters", () => {
  const input = [
    { Text: "Hello Ali!" },
  ];

  expect(
    findReplace(input, "Ali", "Ahmed")
  ).toEqual([
    { Text: "Hello Ahmed!" },
  ]);
});});