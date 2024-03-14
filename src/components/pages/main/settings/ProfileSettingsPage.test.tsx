import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import ProfileSettingsPage from "@/components/pages/main/settings/ProfileSettingsPage";

describe("ProfileSettingsPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ProfileSettingsPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
