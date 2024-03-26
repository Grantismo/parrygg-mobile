import { describe, expect, it, jest } from "@jest/globals";
import React from "react";
import "react-native-draggable-flatlist";
import renderer from "react-test-renderer";

import TournamentPageContentPage from "@/components/pages/tournaments/TournamentPageContentPage";

// Flatlist causes a recursive snapshot error so we mock it out
jest.mock("react-native-draggable-flatlist", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

describe("TournamentPageContentPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TournamentPageContentPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
