import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import CalendarTournamentPage from "@/components/pages/main/calendar/CalendarTournamentPage";

describe("CalendarTournamentPage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <CalendarTournamentPage timestamp="1710379807000" tournamentId="1" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
