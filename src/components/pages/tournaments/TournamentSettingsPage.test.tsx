import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import TournamentSettingsPage from "@/components/pages/tournaments/TournamentSettingsPage";

describe("TournamentSettingsPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TournamentSettingsPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
