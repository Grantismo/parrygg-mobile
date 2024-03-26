import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import TournamentAttendeesPage from "@/components/pages/tournaments/TournamentAttendeesPage";

describe("TournamentAttendeesPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TournamentAttendeesPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
