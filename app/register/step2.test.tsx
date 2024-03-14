import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import RegistrationStep2Page from "./step2";

describe("RegistrationStep2Page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<RegistrationStep2Page />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
