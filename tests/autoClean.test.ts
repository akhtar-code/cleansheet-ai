import { describe, it, expect } from "vitest";
import { autoClean } from "../app/workspace/utils/autoClean";

describe("autoClean()", () => {
  it("removes duplicate rows", () => {
    const input = [
      { Name: "Ali", Age: 20 },
      { Name: "Ali", Age: 20 },
      { Name: "Sara", Age: 22 },
    ];

    expect(autoClean(input)).toEqual([
      { Name: "Ali", Age: 20 },
      { Name: "Sara", Age: 22 },
    ]);
  });

  it("removes empty rows", () => {
    const input = [
      { Name: "Ali", Age: 20 },
      { Name: "", Age: "" },
      { Name: "Sara", Age: 22 },
    ];

    expect(autoClean(input)).toEqual([
      { Name: "Ali", Age: 20 },
      { Name: "Sara", Age: 22 },
    ]);
  });

  it("trims spaces", () => {
    const input = [
      {
        Name: "  Ali  ",
        City: " Karachi ",
      },
    ];

    expect(autoClean(input)).toEqual([
      {
        Name: "Ali",
        City: "Karachi",
      },
    ]);
  });

  it("removes empty columns", () => {
    const input = [
      {
        Name: "Ali",
        Empty: "",
        Age: 20,
      },
      {
        Name: "Sara",
        Empty: "",
        Age: 22,
      },
    ];

    expect(autoClean(input)).toEqual([
      {
        Name: "Ali",
        Age: 20,
      },
      {
        Name: "Sara",
        Age: 22,
      },
    ]);
  });

  it("handles empty input", () => {
    expect(autoClean([])).toEqual([]);
  });

  it("applies all cleaning operations together", () => {
    const input = [
      {
        Name: "  Ali  ",
        Empty: "",
        Age: 20,
      },
      {
        Name: "Ali",
        Empty: "",
        Age: 20,
      },
      {
        Name: "",
        Empty: "",
        Age: "",
      },
      {
        Name: " Sara ",
        Empty: "",
        Age: 22,
      },
    ];

    expect(autoClean(input)).toEqual([
      {
        Name: "Ali",
        Age: 20,
      },
      {
        Name: "Sara",
        Age: 22,
      },
    ]);
  });
});