import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import RegistrationStep1Page from "./step1";

describe("RegistrationStep1Page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<RegistrationStep1Page />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
