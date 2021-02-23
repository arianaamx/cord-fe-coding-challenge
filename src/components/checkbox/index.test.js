import React from "react";
import { render } from "@testing-library/react";

import CheckBox from "./index";

describe("<CheckBox/>", () => {
  it("renders without crashing", () => {
    render(<CheckBox />);
  });

  it("label prop works", () => {
    const checkbox = render(<CheckBox label={"Test Label"} id={123} />);
    checkbox.getByText(/Test Label/);
  });
});
