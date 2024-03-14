import { describe, expect, it } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import RegistrationStep3Page from "@/components/pages/register/RegistrationStep3Page";

describe("RegistrationStep3Page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<RegistrationStep3Page />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
