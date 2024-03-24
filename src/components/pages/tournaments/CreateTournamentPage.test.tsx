import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import CreateTournamentPage from "@/components/pages/tournaments/CreateTournamentPage";

describe("CreateTournamentPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CreateTournamentPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
