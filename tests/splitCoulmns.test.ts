import { describe, it, expect } from "vitest";
import { splitColumn } from "../app/workspace/utils/splitColumns";

describe("splitColumn()", () => {
  it("splits full name into two columns", () => {
    const input = [
      { Name: "Ali Khan" },
    ];

    expect(
      splitColumn(input, "Name", " ")
    ).toEqual([
      {
        Name: "Ali Khan",
        Name_1: "Ali",
        Name_2: "Khan",
      },
    ]);
  });

  it("splits multiple rows", () => {
    const input = [
      { Name: "Ali Khan" },
      { Name: "Sara Ahmed" },
    ];

    expect(
      splitColumn(input, "Name", " ")
    ).toEqual([
      {
        Name: "Ali Khan",
        Name_1: "Ali",
        Name_2: "Khan",
      },
      {
        Name: "Sara Ahmed",
        Name_1: "Sara",
        Name_2: "Ahmed",
      },
    ]);
  });

  it("returns original data if delimiter is missing", () => {
    const input = [
      { Name: "Ali" },
    ];

    expect(
      splitColumn(input, "Name", " ")
    ).toEqual([
      {
        Name: "Ali",
        Name_1: "Ali",
        Name_2: "",
      },
    ]);
  });

  it("handles empty input", () => {
    expect(
      splitColumn([], "Name", " ")
    ).toEqual([]);
  });

  it("splits comma separated values", () => {
    const input = [
      {
        City: "Karachi,Sindh",
      },
    ];

    expect(
      splitColumn(input, "City", ",")
    ).toEqual([
      {
        City: "Karachi,Sindh",
        City_1: "Karachi",
        City_2: "Sindh",
      },
    ]);
  });

  it("does not modify unrelated columns", () => {
    const input = [
      {
        Name: "Ali Khan",
        Age: 20,
      },
    ];

    expect(
      splitColumn(input, "Name", " ")
    ).toEqual([
      {
        Name: "Ali Khan",
        Name_1: "Ali",
        Name_2: "Khan",
        Age: 20,
      },
    ]);
  });
});