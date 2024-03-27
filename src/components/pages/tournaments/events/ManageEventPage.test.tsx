import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import ManageEventPage from "@/components/pages/tournaments/events/ManageEventPage";

describe("ManageEventPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ManageEventPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
