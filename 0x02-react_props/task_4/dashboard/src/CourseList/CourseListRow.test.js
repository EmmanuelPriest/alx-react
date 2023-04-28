import React from "react";
import { render } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const { getByText } = render(<CourseListRow isHeader={true} textFirstCell="Header" />);
    const thElement = getByText("Header");
    expect(thElement).toHaveAttribute("colSpan", "2");
  });

  it("renders two cells when textSecondCell is present", () => {
    const { getByText } = render(
    <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
    );
    const thElement1 = getByText("Header 1");
    const thElement2 = getByText("Header 2");
    expect(thElement1).toBeInTheDocument();
    expect(thElement2).toBeInTheDocument();
  });

  it("renders correctly two td elements within a tr element", () => {
    const { getByText } = render(<CourseListRow textFirstCell="Data 1" textSecondCell="Data 2" />);
    const tdElement1 = getByText("Data 1");
    const tdElement2 = getByText("Data 2");
    expect(tdElement1).toBeInTheDocument();
    expect(tdElement2).toBeInTheDocument();
  });
});
