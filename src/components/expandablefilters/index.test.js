import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import ExpandableFilters from "./index";

cleanup();
describe("<ExpandableFilters />", () => {
  it("renders without crashing", () => {
    render(<ExpandableFilters />);
  });

  test.todo("renders options=[] props");
});
