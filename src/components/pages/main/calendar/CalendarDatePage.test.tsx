import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import CalendarDatePage from "@/components/pages/main/calendar/CalendarDatePage";

describe("CalendarDatePage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CalendarDatePage timestamp="1710379807000" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
