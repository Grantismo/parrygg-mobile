import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import TournamentPageContentPage from "@/components/pages/tournaments/TournamentPageContentPage";

describe("TournamentPageContentPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TournamentPageContentPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
