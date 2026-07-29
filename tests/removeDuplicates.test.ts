import { describe, it, expect } from "vitest";
import { removeDuplicates } from "../app/workspace/utils/removeDuplicates";

describe("removeDuplicates()", () => {
  it("removes duplicate rows", () => {
    const input = [
      { Name: "Ali", Age: 20 },
      { Name: "Sara", Age: 22 },
      { Name: "Ali", Age: 20 },
    ];

    const result = removeDuplicates(input);

    expect(result).toEqual([
      { Name: "Ali", Age: 20 },
      { Name: "Sara", Age: 22 },
    ]);
  });

  it("keeps unique rows", () => {
    const input = [
      { Name: "Ali", Age: 20 },
      { Name: "Sara", Age: 22 },
    ];

    expect(removeDuplicates(input)).toEqual(input);
  });

  it("returns empty array when input is empty", () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it("removes multiple duplicate rows", () => {
    const input = [
      { Name: "A", Age: 1 },
      { Name: "A", Age: 1 },
      { Name: "A", Age: 1 },
      { Name: "B", Age: 2 },
      { Name: "B", Age: 2 },
    ];

    expect(removeDuplicates(input)).toEqual([
      { Name: "A", Age: 1 },
      { Name: "B", Age: 2 },
    ]);
  });
});