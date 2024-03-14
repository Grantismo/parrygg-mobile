import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import SettingsPage from "./index";

describe("SettingsPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SettingsPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
