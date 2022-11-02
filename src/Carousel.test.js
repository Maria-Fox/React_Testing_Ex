import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";


// did not allow jsx parsing to check if component instance was rendered. Needed to install npm install --save-dev @babel/preset-react.
https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx

// if there are props simply pass them in at instance.

it("Should render a Carousel upon page load", function () {
  render(<Carousel />);
})

it("Matches snapshot upon inital load", function () {
  let { asFragemnt } = render(<Carousel />);
  expect(asFragemnt()).toMatchSnapshot();
})

// it("works when you click on the right arrow", function() {
//   const { queryByTestId, queryByAltText } = render(<Carousel />);

//   // expect the first image to show, but not the second
//   expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
//   expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

//   // move forward in the carousel
//   const rightArrow = queryByTestId("right-arrow");
//   fireEvent.click(rightArrow);

//   // expect the second image to show, but not the first
//   expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
//   expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
// });
