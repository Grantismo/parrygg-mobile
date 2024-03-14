import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import RegistrationStep3Page from "./step3";

describe("RegistrationStep2Page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<RegistrationStep3Page />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
