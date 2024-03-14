import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import CalendarPage from "@/components/pages/main/calendar/CalendarPage";

describe("CalendarPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CalendarPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
