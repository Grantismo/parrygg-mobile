import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import ProfileSettingsPage from "./profile";

describe("ProfileSettingsPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ProfileSettingsPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
