import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import MyPlayersPage from "@/components/pages/main/MyPlayersPage";

describe("ProfilePage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<MyPlayersPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});