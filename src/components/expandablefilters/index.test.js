import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ExpandableFilters from "./index";

cleanup();
describe("<ExpandableFilters />", () => {
  beforeEach(cleanup);

  it("renders without crashing", () => {
    render(<ExpandableFilters />);
  });

  it("doesn't render anything with options=[] props", () => {
    const { queryByTitle } = render(<ExpandableFilters options={[]} />);
    const title = queryByTitle("expandable-title");
    expect(title).toBeNull();
  });

  it("renders props options=[{id: 1, name: Love}]", () => {
    const { queryByText, getByText } = render(
      <ExpandableFilters options={[{ id: 1, name: "love" }]} title={"TestTitle"} />
    );
    const checboxItemTitle = queryByText("love");
    const checboxTitle = getByText("Select TestTitle");
    expect(checboxItemTitle).toBeInTheDocument();
    expect(checboxTitle).toBeInTheDocument();
  });
});
