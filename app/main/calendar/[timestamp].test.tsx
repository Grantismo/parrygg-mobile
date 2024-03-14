import { describe, expect, it, jest } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import CalendarDatePage from "./[timestamp]";

jest.mock("expo-router", () => ({
  useLocalSearchParams: () => {
    return { timestamp: 1710379807000 };
  },
}));

describe("CalendarDatePage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CalendarDatePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
