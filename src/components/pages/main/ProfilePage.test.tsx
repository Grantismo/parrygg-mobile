import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import ProfilePage from "@/components/pages/main/ProfilePage";

describe("ProfilePage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ProfilePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
