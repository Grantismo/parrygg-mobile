import { describe, expect, it, jest } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";
import "react-native-draggable-flatlist";

import TournamentEventsPage from "@/components/pages/tournaments/TournamentEventsPage";

// Flatlist causes a recursive snapshot error so we mock it out
jest.mock("react-native-draggable-flatlist", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

describe("CreateTournamentPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TournamentEventsPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
