import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import SearchPage from "@/components/pages/main/SearchPage";

describe("SearchPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SearchPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});