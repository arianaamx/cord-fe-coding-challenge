import React from "react";
import { fireEvent, render } from "@testing-library/react";

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

describe("click checkbox to be checked", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<CheckBox />);
    const checkbox = queryByTitle("checkbox");
    fireEvent.change(checkbox, { target: { value: "testValue" } });
    expect(checkbox.value).toBe("testValue");
  });
});
