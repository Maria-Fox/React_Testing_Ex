import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

// smoke test
it("Should render Card component", function () {
  render(<Card />);
});

// snapshot test. The first time you run this will take a napshot, then re-run to compare the outcomes.
it("Should render the first indexed carousel item", function () {
  let renderObj = render(<Card />);
  console.log(renderObj);

  // as fragment is a method destructured from the return obj. Puts return item in a div and we can test what's in the fragment.
  let {asFragment} = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
})